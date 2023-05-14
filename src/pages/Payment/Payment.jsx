import { useEffect, useState } from "react";
import { formatCurrency } from "../../theme/functions";
import InternetBanking from "./components/InternetBanking";
import GuestContact from "./components/GuestContact";
import PaymentMethod from "./components/PaymentMethod";
import Momo from "./components/Momo";
import TourPriceDetail from "./components/TourPriceDetail";
import { useParams } from "react-router-dom";
import { handleGetTourById } from "../../services/tourService";
import { handleCreateBookTour } from "../../services/bookTourService";
import AuthMethods from "./components/AuthMethods";
import {
  handleOtpApi,
  handleVerifyPhoneOtpApi,
} from "../../services/otpService";
import Invoice from "./components/Invoice";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    otp: "",
  });
  const [selectedOption, setSelectedOption] = useState("Tiền mặt");
  const [selectedOptionAuth, setSelectedOptionAuth] = useState("Số diện thoại");
  const [adult, setAdult] = useState(1);
  const [kids, setKids] = useState(0);
  const [baby, setBaby] = useState(0);
  const [tour, setTour] = useState({});
  const { tourId } = useParams();
  const [error, setError] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const fetchTour = async () => {
    const data = await handleGetTourById(tourId);
    const tourData = data.tour;

    setTour(tourData);
  };

  const handleInputChange = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };



  const handleVerifyPhoneOtp = async () => {
    const dataApi = await handleVerifyPhoneOtpApi({
      phone: parseInt(paymentInfo.phone),
      code: paymentInfo.otp,
    });
    if (dataApi.errCode !== 0) {
      //
      console.log("lỗi");
    } else {
      console.log("Thành công");
    }
  };

  const handleVerifyEmailOtp = async () => {
    try {
      await handleOtpApi({
        email: paymentInfo.email,
        otp: paymentInfo.otp,
      });
      setInvoice(true);
      setError(false);
    } catch (error) {
      setError(true);
      return error;
    }
  };
  const total =
    tour?.adultPrice * adult +
    tour?.childPrice * kids +
    tour?.babyPrice * baby || 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOptionAuth === "Email") {
      handleVerifyEmailOtp();
    } else {
      // handleVerifyPhoneOtp();
    }
  };
  const props = {
    adultPrice: tour.adultPrice,
    kidPrice: tour.childPrice,
    babyPrice: tour.babyPrice,
    totalSlot: tour.adultSlot + tour.childrenSlot,
    adult: adult,
    setAdult: setAdult,
    kids: kids,
    setKids: setKids,
    baby: baby,
    setBaby: setBaby,
    paymentInfo: paymentInfo,
    handleInputChange: handleInputChange,
    selectedOption: selectedOption,
    setSelectedOption: setSelectedOption,
    selectedOptionAuth: selectedOptionAuth,
    setSelectedOptionAuth: setSelectedOptionAuth,
    error: error,
    total: total,
    tour: tour,
  };
  const handleCreateUserNew = () => {

  }


  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <div className="payment-page">
      {!invoice ? (
        <>
          <TourPriceDetail {...props} />
          <form className="payment-form flex" onSubmit={handleSubmit}>
            <GuestContact {...props} />
            <PaymentMethod {...props} />
            <div
              className="info"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {selectedOption === "Internet Banking" && (
                <InternetBanking {...props} />
              )}
              {selectedOption === "Tiền mặt" && (
                <div className="optionPayment">
                  <label>Đi đến cửa hàng để thanh toán trực tiếp</label>
                </div>
              )}
            </div>
            {selectedOption === "Momo" && <Momo {...props} />}
            <AuthMethods {...props} />

            <p className="totalText">Tổng tiền</p>
            <div className="tourTotalPrice flex">
              <label>{formatCurrency(total)}</label>
            </div>

            <button type="submit">Thanh toán</button>
          </form>
        </>
      ) : (
        <Invoice {...props} />
      )}
    </div>
  );
}

export default Payment;
