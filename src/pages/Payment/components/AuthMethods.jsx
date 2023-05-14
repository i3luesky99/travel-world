import React, { useEffect, useState } from "react";
import {
  handlePhoneOtpApi,
  handleEmailOtpApi,
} from "../../../services/otpService";
export default function AuthMethods(props) {
  const {
    paymentInfo,
    handleInputChange,
    selectedOptionAuth,
    setSelectedOptionAuth,
    error,
  } = props;
  const [resendOTP, setResendOTP] = useState(false);
  const [resendOTPPhone, setResendOTPPhone] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleOptionChange = (event) => {
    setSelectedOptionAuth(event.target.value);
  };

  const handleCreatePhoneOtp = async () => {
    const regex = /^([1-9])+([0-9]{8})$/;
    if (regex.test(paymentInfo.phone)) {
      setResendOTPPhone(true);
      await handlePhoneOtpApi({
        phone: parseInt(paymentInfo.phone),
      });
    } else {
      alert("Số điện thoại không hợp lệ");
    }
  };

  const handleCreateEmailOtp = async () => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (paymentInfo.email.match(regexEmail)) {
      setResendOTP(true);
      await handleEmailOtpApi({ email: paymentInfo.email });
    } else {
      alert("Email không hợp lệ");
    }
  };

  useEffect(() => {
    let timer;
    if ((countdown > 0 && resendOTP) || (countdown > 0 && resendOTPPhone)) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setResendOTP(false);
      setCountdown(60);
    }
    return () => clearTimeout(timer);
  }, [countdown, resendOTP, resendOTPPhone]);

  return (
    <>
      <p className="title">Hình thức xác thực</p>
      <div className="info">
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Số diện thoại"
              checked={selectedOptionAuth === "Số diện thoại"}
              onChange={handleOptionChange}
            />
            <p>Số điện thoại</p>
          </label>
        </div>
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Email"
              checked={selectedOptionAuth === "Email"}
              onChange={handleOptionChange}
            />
            <p>Email</p>
          </label>
        </div>
      </div>
      <div className="info">
        {selectedOptionAuth === "Email" ? (
          <div className="optionPayment">
            <label>Nhập email :</label>
            <input
              type="text"
              name="email"
              value={paymentInfo.email}
              onChange={handleInputChange}
            />
            {!resendOTP ? (
              <div
                className="button"
                onClick={() => {
                  handleCreateEmailOtp();
                }}
              >
                Nhận mã OTP
              </div>
            ) : (
              <div
                style={{
                  width: "170px",
                  background: "grey",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                Nhận lại OTP sau {countdown}
              </div>
            )}
          </div>
        ) : (
          <div className="optionPayment">
            <label>Nhập số điện thoại :</label>
            <input
              type="text"
              name="phone"
              value={paymentInfo.phone}
              onChange={handleInputChange}
            />
            {!resendOTPPhone ? (
              <div
                className="button"
                onClick={() => {
                  handleCreatePhoneOtp();
                }}
              >
                Nhận mã OTP
              </div>
            ) : (
              <div
                style={{
                  width: "170px",
                  background: "grey",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                Nhận lại OTP sau {countdown}
              </div>
            )}
          </div>
        )}
        <div className="optionPayment">
          <label>Nhập OTP Code :</label>
          <input
            type="text"
            name="otp"
            value={paymentInfo.otp}
            onChange={handleInputChange}
          />
          {error && (
            <div
              style={{
                width: "170px",
                background: "red",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "7px",
                color: "white",
              }}
            >
              OTP sai hoặc rỗng
            </div>
          )}
        </div>
      </div>
    </>
  );
}
