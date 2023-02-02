import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import OTPForm from "./OTPForm";

function RegisterForm() {
  const emailRef = useRef("");
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [emailRegex, setEmailRegex] = useState(false);

  const [style, setStyle] = useState("registerForm");
  const [register, setRegister] = useState(true);

  const onHandleToOTP = (e) => {
    e.preventDefault();
    if (emailRef.current.value.match(regexEmail)) {
      setInterval(() => {
        setRegister(false);
      }, 1100);
      setStyle("registerForm registerAnimation");
      setEmailRegex(false);
    } else {
      setEmailRegex(true);
    }
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
            placeholder="Nhập email để lấy mã OTP..."
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
              Email không hợp lệ ví dụ admin@gmail.com
            </span>
          )}
        </div>
      ) : (
        <OTPForm />
      )}
    </>
  );
}

export default RegisterForm;
