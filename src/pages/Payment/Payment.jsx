import { useEffect, useState } from "react";
import { formatCurrency } from "../../theme/functions";
import InternetBanking from "./components/InternetBanking";
import GuestContact from "./components/GuestContact";
import PaymentMethod from "./components/PaymentMethod";
import Momo from "./components/Momo";
import TourPriceDetail from "./components/TourPriceDetail";
import { useLocation, useParams } from "react-router-dom";
import { handleGetTourById } from "../../services/tourService";
import { handleCreateBookTour } from "../../services/bookTourService";
import AuthMethods from "./components/AuthMethods";

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
  const [adult, setAdult] = useState(1);
  const [kids, setKids] = useState(0);
  const [baby, setBaby] = useState(0);
  const [tour, setTour] = useState({});
  const { tourId } = useParams();

  const adultPrice = 10000000;
  const kidPrice = tour.childrenSlot;
  const babyPrice = tour.childrenSlot / 20;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment logic using the paymentInfo state
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
  };
  const handleCreateUserNew = () => {

  }
  const handleCreateNewBookTour = async () => {
    const dataBookTour = {
      tourId: tourId,
      customerId: 2,
      adultSlot: adult,
      childrenSlot: kids,
      date: new Date(),
      type: null,
      paymentId: 1,
      state: "S3",
      note: null,
    }
    const dataApi = await handleCreateBookTour(dataBookTour);


  }
  const total = adultPrice
    ? tour.adultPrice * adult + tour.childPrice * kids + tour.babyPrice * baby
    : 0;

  useEffect(() => {
    fetchTour();
  }, []);

  return (
    <div className="payment-page">
      <TourPriceDetail {...props} />
      <form className="payment-form flex" onSubmit={handleSubmit}>
        <GuestContact {...props} />
        <AuthMethods {...props} />
        <PaymentMethod {...props} />
        <div className="info" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
        <p className="totalText">Tổng tiền</p>
        <div className="tourTotalPrice flex">
          <label>{formatCurrency(total)}</label>
        </div>
        <button type="submit" onClick={() => {
          handleCreateNewBookTour();
        }}>Thanh toán</button>
      </form>
    </div>
  );
}

export default Payment;
