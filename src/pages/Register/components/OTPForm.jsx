import React, { useRef } from "react";
import { useState } from "react";
import { handleOtpApi } from "../../../services/otpService";
import UserForm from "./UserForm";
import { handleRegisterApi } from "../../../services/registerService";

function OTPForm(props) {
  const { handleSubmit, email } = props;
  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const otpNum = "12345";
  const [userForm, setUserForm] = useState(false);
  const [style, setStyle] = useState("registerForm");
  // const otpRef = useRef("");
  const [otpRegex, setOtpRegex] = useState(false);
  const [otpInfo, setOtpInfo] = useState({
    errCode: 1,
    errMessage: "",
  });
  const onHandleOTP = () => {
    if (otp === otpNum) {
      console.log(true);
    } else {
    }
  };
  const HandleGetOtp = async () => {
    await handleRegisterApi({ email: email });
  };
  const onHandleToUserForm = async (e) => {
    setOtpInfo({ ...otpInfo, errMessage: "" });
    try {
      let data = await handleOtpApi({ email, otp });
      if (data && data.errCode !== 0) {
        setOtpInfo({ ...otpInfo, errMessage: data.errMessage });
        setOtpRegex(true);
      } else {
        if (data && data.errCode === 0) {
          e.preventDefault();
          setInterval(() => {
            setUserForm(true);
          }, 1100);

          setStyle("registerForm registerAnimation");
        }
      }
    } catch (error) {
      setOtpInfo({ ...otpInfo, errMessage: "OTP không đúng!" });
      setOtpRegex(true);
      console.log(error);
    }
  };

  return (
    <>
      {!userForm ? (
        <div className={style}>
          <span className="registerTitle">OTP</span>
          <input
            className="registerInput"
            placeholder="Nhập mã OTP ..."
            onChange={(e) => setOtp(e.target.value)}
          />
          {otpRegex && (
            <span style={{ color: "red", marginTop: "15px" }}>
              {otpInfo.errMessage}
            </span>
          )}
          <div className="bottom">
            <button
              className="btn registerButton"
              type="submit"
              onClick={onHandleToUserForm}
            >
              Tiếp tục
            </button>
            <button
              className="btn registerLoginButton"
              type="submit"
              onClick={HandleGetOtp}
            >
              Lấy lại OTP
            </button>
          </div>
        </div>
      ) : (
        <UserForm email={email} />
      )}
    </>
  );
}

export default OTPForm;
