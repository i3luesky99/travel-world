import { useEffect, useState } from "react";
import { formatCurrency } from "../../theme/functions";
import InternetBanking from "./components/InternetBanking";
import GuestContact from "./components/GuestContact";
import PaymentMethod from "./components/PaymentMethod";
import Momo from "./components/Momo";
import TourPriceDetail from "./components/TourPriceDetail";
import { useLocation, useParams } from "react-router-dom";
import { handleGetTourById } from "../../services/tourService";

function Payment() {
  useEffect(() => { fetchTour(); }, []);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const { state } = useLocation();
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
    ////console.log(tourData);

    setTour(tourData);
    //console.log(props);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("123123");
    // Here you can implement your payment logic using the paymentInfo state
  };
  const handleInputChange = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };
  const props = {
    adultPrice: tour.adultPrice,
    kidPrice: tour.childPrice,
    babyPrice: tour.babyPrice,
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

  const total = adultPrice
    ? tour.adultPrice * adult + tour.childPrice * kids + tour.babyPrice * baby
    : 0;



  return (
    <div className="payment-page">
      <TourPriceDetail {...props} />
      <form className="payment-form flex" onSubmit={handleSubmit}>
        <GuestContact {...props} />
        <PaymentMethod {...props} />
        <div className="info">
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
        <button type="submit">Thanh toán</button>
      </form>
    </div>
  );
}

export default Payment;
