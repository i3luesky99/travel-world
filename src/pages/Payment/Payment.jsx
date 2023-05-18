import { useEffect, useState } from "react";
import { formatCurrency } from "../../theme/functions";
import InternetBanking from "./components/InternetBanking";
import GuestContact from "./components/GuestContact";
import PaymentMethod from "./components/PaymentMethod";
import Momo from "./components/Momo";
import TourPriceDetail from "./components/TourPriceDetail";
import { useParams } from "react-router-dom";
import { handleGetTourById } from "../../services/tourService";
import AuthMethods from "./components/AuthMethods";
import { handleVNPay } from "../../services/vnPayService";
import { handleGetUserByEmail, handleCreateUserApi, handleGetUserByPhone, handleCreateUserByPhoneApi } from "../../services/userService";
import { handleLoginByPhoneApi, handleLoginApi } from "../../services/loginService";
import localStorageService from "../../services/localStorageService";
import {
  handleOtpApi,
  handleVerifyPhoneOtpApi,
} from "../../services/otpService";
import Invoice from "./components/Invoice";
import { handleCreateBookTour } from "../../services/bookTourService";

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
    // const dataApi = await handleVerifyPhoneOtpApi({
    //   phone: parseInt(paymentInfo.phone),
    //   code: paymentInfo.otp,
    // });
    try {
      await handleVerifyPhoneOtpApi({
        phone: parseInt(paymentInfo.phone),
        code: paymentInfo.otp,
      }).then(async (dataOTPPhone) => {
        if (dataOTPPhone.status && dataOTPPhone.status === "pending") {
          setError(true);

        } else {
          if (localStorage.getItem("userId") === null) {
            ///phone
            if (paymentInfo.phone !== '' && paymentInfo.name !== '') {
              try {
                await handleGetUserByPhone("0" + paymentInfo.phone).then(async (user) => {
                  if (user.errCode === 1) {
                    await handleCreateUserByPhoneApi({
                      email: "",
                      password: "123456",
                      fullName: paymentInfo.name,
                      address: "",
                      phoneNumber: paymentInfo.phone,
                      gender: "",
                      roleId: "R2"
                    }).then((userNew) => {
                      if (userNew.errCode !== 0) {
                        alert(userNew.errMessage);
                      }
                    })
                    const dataLogin = await handleLoginByPhoneApi(paymentInfo.phone, '123456');
                    if (dataLogin) {
                      const user = dataLogin.user;
                      localStorageService.saveUser(dataLogin.accessToken);
                      localStorage.setItem("roleId", user.roleId);
                      localStorage.setItem("userId", user.id);
                    }

                  } else {
                    if (user.errCode === 0) {
                      localStorageService.saveUser(dataOTPPhone.accessToken);
                      localStorage.setItem("roleId", dataOTPPhone.user.roleId);
                      localStorage.setItem("userId", dataOTPPhone.user.id);
                    }
                  }
                });
              } catch (error) {

              }

            }

          }
          ///tao bookTour
          await handleCreateBookTour({
            tourId: tourId,
            customerId: localStorage.getItem("userId"),
            adultSlot: adult,
            childrenSlot: kids,
            date: new Date(),
            type: null,
            paymentId: "P4",
            state: "S1",
            note: "book success",
          });
          setInvoice(true);
          setError(false);
        }
      });


    } catch (error) {
      setError(true);
      return error;
    }
  };

  const handleVerifyEmailOtp = async () => {
    try {

      await handleOtpApi({
        email: paymentInfo.email,
        otp: paymentInfo.otp,
      }).then(async (data) => {
        if (data.errCode === 0) {
          //console.log(data);
          ///khong otp ddung 
          //kieemr tra da co user ddang nhap hay chua
          // chua dang nhap tao use bang email voi pass 123456
          //va tu dong dang nhap
          if (localStorage.getItem("userId") === null) {
            if (paymentInfo.email !== '' && paymentInfo.name !== '') {
              try {
                await handleGetUserByEmail(paymentInfo.email).then(async (user) => {
                  if (user.errCode === 1) {
                    await handleCreateUserApi({
                      email: paymentInfo.email,
                      password: "123456",
                      fullName: paymentInfo.name,
                      address: "",
                      phoneNumber: paymentInfo.phone,
                      gender: "",
                      roleId: "R2"
                    }).then((userNew) => {
                      if (userNew.errCode !== 0) {
                        alert(userNew.errMessage);
                      }
                    })
                    const userLogin = await handleLoginApi(paymentInfo.email, '123456');
                    if (userLogin) {
                      const user = userLogin.user;
                      localStorageService.saveUser(userLogin.accessToken);
                      localStorage.setItem("roleId", user.roleId);
                      localStorage.setItem("userId", user.id);
                    }

                  } else {
                    if (user.errCode === 0) {
                      localStorageService.saveUser(data.accessToken);
                      localStorage.setItem("roleId", data.user.roleId);
                      localStorage.setItem("userId", data.user.id);
                    }
                  }

                });
              } catch (error) {

              }

            }

          }
          ///tao bookTour
          if (localStorage.getItem("userId") !== null) {
            await handleCreateBookTour({
              tourId: tourId,
              customerId: localStorage.getItem("userId"),
              adultSlot: adult,
              childrenSlot: kids,
              date: new Date(),
              type: null,
              paymentId: "P4",
              state: "S1",
              note: "book success",
            });

            setInvoice(true);
            setError(false);
          }

        } else {
          alert(data.errMessage);
          setError(true);
        }

      });

    } catch (error) {
      setError(true);
      return error;
    }
  };
  const total =
    tour?.adultPrice * adult +
    tour?.childPrice * kids +
    tour?.babyPrice * baby || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOptionAuth === "Email" && paymentInfo.name !== '' && paymentInfo.email !== '') {
      handleVerifyEmailOtp();
    } else {
      if (paymentInfo.name !== '' && paymentInfo.phone !== '') {
        handleVerifyPhoneOtp();
      }

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
  const handleCreateUserNew = () => { };

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

            <p className="totalText">
              <a href="http://localhost:8888/order/create_payment_url">
                Tổng tiền
              </a>
            </p>
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
