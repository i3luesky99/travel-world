import React, { useState } from "react";
import { handlePhoneOtpApi, handleVerifyPhoneOtpApi, handleOtpApi, handleEmailOtpApi } from "../../../services/otpService";
import { async } from "q";
export default function AuthMethods(props) {
  const { paymentInfo, handleInputChange } = props;
  const [selectedOption, setSelectedOption] = useState("Số diện thoại");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCreatePhoneOtp = async () => {
    const regex = /^([1-9])+([0-9]{8})$/;
    if (regex.test(paymentInfo.phone)) {
      const dataApi = await handlePhoneOtpApi({ phone: parseInt(paymentInfo.phone) });
      if (dataApi.errCode !== 0) {
        //
        console.log("lỗi");
      } else {
        console.log("Thành công");
      }
    } else {
      alert('Số điện thoại không hợp lệ');
    }
  }
  const handleCreateEmailOtp = async () => {
    const dataApi = await handleEmailOtpApi({ email: paymentInfo.email });
    if (dataApi.errCode !== 0) {
      //
      console.log("lỗi");
    } else {
      console.log("Thành công");
    }
  }
  const handleVerifyPhoneOtp = async () => {
    const dataApi = await handleVerifyPhoneOtpApi({ phone: parseInt(paymentInfo.phone), code: paymentInfo.otp });
    if (dataApi.errCode !== 0) {
      //
      console.log("lỗi");
    } else {
      console.log("Thành công");
    }
  }
  const handleVerifyEmailOtp = async () => {
    const dataApi = await handleOtpApi({ email: paymentInfo.email, code: paymentInfo.otp });
    if (dataApi.errCode !== 0) {
      //
      console.log("lỗi");
    } else {
      console.log("Thành công");
    }
  }
  return (
    <>
      <p className="title">Hình thức xác thực</p>
      <div className="info">
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Số diện thoại"
              checked={selectedOption === "Số diện thoại"}
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
              checked={selectedOption === "Email"}
              onChange={handleOptionChange}
            />
            <p>Email</p>
          </label>
        </div>
      </div>
      <div className="info">
        {selectedOption === "Email" ? (
          <div className="optionPayment">
            <label>Nhập email :</label>
            <input
              type="text"
              name="email"
              value={paymentInfo.email}
              onChange={handleInputChange}
            />
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
          </div>
        )}
        <div className="optionPayment" onClick={() => {
          handleCreateEmailOtp();
        }}>
          <label>Nhận mã OTP </label>
        </div>
        <div className="optionPayment" onClick={() => {
          handleVerifyPhoneOtp();
        }}>
          <label>Nhập OTP Code :</label>
          <input
            type="text"
            name="otp"
            value={paymentInfo.otp}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
