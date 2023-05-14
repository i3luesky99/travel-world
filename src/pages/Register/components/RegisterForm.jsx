import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import OTPForm from "./OTPForm";
import { handleRegisterApi } from "../../../services/registerService";
function RegisterForm() {
  const emailRef = useRef("");
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [emailRegex, setEmailRegex] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    errMessage: "",
    errCode: 1,
  });
  const [style, setStyle] = useState("registerForm");
  const [register, setRegister] = useState(true);

  const onHandleToOTP = async (e) => {
    e.preventDefault();
    if (emailRef.current.value.match(regexEmail)) {
      let data = await handleRegister();
      if (data.errCode === 0) {
        //Nếu ko lỗi
        setInterval(() => {
          //lấy otp
          setRegister(false);
        }, 1100);
        setStyle("registerForm registerAnimation");
        setEmailRegex(false);
      } else {
        //Lỗi
        setRegisterInfo({ ...registerInfo, errMessage: data.errMessage });

        setEmailRegex(true);
        console.log("" + data.errCode + "-" + data.errMessage);
      }
    } else {
      //check cú pháp
      setRegisterInfo({
        ...registerInfo,
        errMessage: "Email không hợp lệ ví dụ admin@gmail.com",
      });
      setEmailRegex(true);
    }
  };
  const handleRegister = async () => {
    setRegisterInfo({ ...registerInfo, errMessage: "" });
    try {
      let data = await handleRegisterApi({ email: emailRef.current.value });
      if (data && data.errCode !== 0) {
        return data;
      }
      if (data && data.errCode === 0) {
        ///
        return data;
      }
    } catch (error) {
      setRegisterInfo({
        ...registerInfo,
        errMessage: "Mail này đã được đăng kí!",
      });
      setEmailRegex(true);
    }
  };
  const handleOnChangeInput = (event) => {
    setRegisterInfo({
      ...registerInfo,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      {register ? (
        <div className={style}>
          <span className="registerTitle">Đăng kí</span>
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            name="email"
            placeholder="Nhập email để lấy mã OTP..."
            onChange={(event) => {
              handleOnChangeInput(event);
            }}
            ref={emailRef}
          />
          <div className="bottom">
            <button className="btn registerButton" onClick={onHandleToOTP}>
              Đăng kí
            </button>
            <button className="btn registerLoginButton">
              <Link className="link" to="/login">
                Đăng nhập
              </Link>
            </button>
          </div>
          {emailRegex && (
            <span style={{ color: "red", marginTop: "15px" }}>
              {registerInfo.errMessage}
            </span>
          )}
        </div>
      ) : (
        <OTPForm email={registerInfo.email} />
      )}
    </>
  );
}

export default RegisterForm;
