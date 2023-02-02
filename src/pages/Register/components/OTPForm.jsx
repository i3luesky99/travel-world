import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";

function OTPForm(props) {
  const { handleSubmit } = props;
  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const otpNum = "12345";
  const [userForm, setUserForm] = useState(false);
  const [style, setStyle] = useState("registerForm");

  const onHandleOTP = () => {
    if (otp === otpNum) {
      console.log(true);
    } else {
    }
  };

  const onHandleToUserForm = (e) => {
    e.preventDefault();
    setInterval(() => {
      setUserForm(true);
    }, 1100);

    setStyle("registerForm registerAnimation");
  };

  return (
    <>
      {!userForm ? (
        <div className={style}>
          <span className="registerTitle">OTP</span>
          <input
            className="registerInput"
            placeholder="Enter your otp code ..."
            onChange={(e) => setOtp(e.target.value)}
          />
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
              onClick={onHandleOTP}
            >
              Lấy lại OTP
            </button>
          </div>
        </div>
      ) : (
        <UserForm />
      )}
    </>
  );
}

export default OTPForm;
