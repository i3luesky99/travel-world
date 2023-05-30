import { useEffect, useState, useRef } from "react";
import { formatCurrency } from "../../theme/functions";
import GuestContact from "./components/GuestContact";
import PaymentMethod from "./components/PaymentMethod";
import TourPriceDetail from "./components/TourPriceDetail";
import { useParams } from "react-router-dom";
import { handleGetTourById } from "../../services/tourService";
import { handleSendMailBookTourAPI, handleSendMailBookTourByMoneyAPI } from "../../services/sendMailService";

import AuthMethods from "./components/AuthMethods";

import {
  handleGetUserByEmail,
  handleCreateUserApi,
  handleGetUserByPhone,
  handleCreateUserByPhoneApi,
} from "../../services/userService";
import {
  handleLoginByPhoneApi,
  handleLoginApi,
} from "../../services/loginService";
import { handleStripe } from "../../services/stripeService";
import localStorageService from "../../services/localStorageService";
import {
  handleOtpApi,
  handleVerifyPhoneOtpApi,
} from "../../services/otpService";
import {
  handleCreateBookTour,
  handleChangeStateBookTourAPI,
  handleCancellationBookTourAPI,
  handleGetBookTourById,
} from "../../services/bookTourService";
import { handleCreateBillAPI } from "../../services/billService";
import TourInfo from "./components/TourInfo";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    otp: "",
    amount: "",
    orderDescription: "",
  });
  const formRef = useRef(null);
  const [bookTour, setBookTour] = useState();
  const [urlPayment, setUrlPayment] = useState(
    "http://localhost:8080/create_payment_url"
  );
  const [selectedOption, setSelectedOption] = useState("Tiền mặt");
  const [selectedOptionAuth, setSelectedOptionAuth] = useState("Số diện thoại");
  const [adult, setAdult] = useState(1);
  const [kids, setKids] = useState(0);
  const [baby, setBaby] = useState(0);
  const [tour, setTour] = useState({});
  const { tourId } = useParams();
  const [bill, setBill] = useState();
  const [error, setError] = useState(false);
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

  const handlePaymentWithStripe = async () => {
    try {
      const dataPayment = {
        amount: 2000000,
        name: "du lich viet",
        param: 2,
        //   , success_url: window.location.origin + window.location.pathname

        //   , cancel_url: window.location.origin + window.location.pathname
        //
      };
      const urlPayment = await handleStripe(dataPayment);
      if (urlPayment.errCode && urlPayment.errCode === 0) {
        await window.location.replace(urlPayment.url);
      } else {
        alert("Lỗi thanh toán");
      }
    } catch (error) {
      console.log(error);
    }
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
            if (paymentInfo.phone !== "" && paymentInfo.name !== "") {
              try {
                await handleGetUserByPhone("0" + paymentInfo.phone).then(
                  async (user) => {
                    if (user.errCode === 1) {
                      await handleCreateUserByPhoneApi({
                        email: "",
                        password: "123456",
                        fullName: paymentInfo.name,
                        address: "",
                        phoneNumber: paymentInfo.phone,
                        gender: "",
                        roleId: "R2",
                      }).then((userNew) => {
                        if (userNew.errCode !== 0) {
                          alert(userNew.errMessage);
                        }
                      });
                      const dataLogin = await handleLoginByPhoneApi(
                        paymentInfo.phone,
                        "123456"
                      );
                      if (dataLogin) {
                        const user = dataLogin.user;
                        localStorageService.saveUser(dataLogin.accessToken);
                        localStorage.setItem("roleId", user.roleId);
                        localStorage.setItem("userId", user.id);
                      }
                    } else {
                      if (user.errCode === 0) {
                        localStorageService.saveUser(dataOTPPhone.accessToken);
                        localStorage.setItem(
                          "roleId",
                          dataOTPPhone.user.roleId
                        );
                        localStorage.setItem("userId", dataOTPPhone.user.id);
                      }
                    }
                  }
                );
              } catch (error) { }
            }
          }
          ///tao bookTour
          await handlePaymentMethods();
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
          ///khong otp ddung
          //kieemr tra da co user ddang nhap hay chua
          // chua dang nhap tao use bang email voi pass 123456
          //va tu dong dang nhap
          if (localStorage.getItem("userId") === null) {
            if (paymentInfo.email !== "" && paymentInfo.name !== "") {
              try {
                await handleGetUserByEmail(paymentInfo.email).then(
                  async (user) => {
                    if (user.errCode === 1) {
                      await handleCreateUserApi({
                        email: paymentInfo.email,
                        password: "123456",
                        fullName: paymentInfo.name,
                        address: "",
                        phoneNumber: paymentInfo.phone,
                        gender: "",
                        roleId: "R2",
                      }).then((userNew) => {
                        if (userNew.errCode !== 0) {
                          alert(userNew.errMessage);
                        }
                      });
                      const userLogin = await handleLoginApi(
                        paymentInfo.email,
                        "123456"
                      );
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
                  }
                );
              } catch (error) { }
            }
          }
          ///tao bookTour
          if (localStorage.getItem("userId") !== null) {
            //tao bookTour thành công

            await handlePaymentMethods();
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
  const handlePaymentBank = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };
  const handleCreateBookTourPayMoney = async () => {
    await handleCreateBookTour({
      tourId: tourId,
      customerId: localStorage.getItem("userId"),
      adultSlot: adult,
      childrenSlot: kids,
      babySlot: baby,
      date: new Date(),
      type: null,
      paymentId: "P4",
      state: "S1",
      note: "success",
    }).then(async (dataBook) => {
      await handleSendMailBookTourByMoneyAPI({
        customerId: localStorage.getItem("userId"),
        bookTourId: dataBook.bookTourId
      })
      window.location.replace("/travel-order/" + dataBook.bookTourId);
    });
  };
  const handleCreateBookTourVNPay = async () => {
    await handleCreateBookTour({
      tourId: tourId,
      customerId: localStorage.getItem("userId"),
      adultSlot: adult,
      childrenSlot: kids,
      babySlot: baby,
      date: new Date(),
      type: null,
      paymentId: "P6",
      state: "S1",
      note: "success",
    }).then((dataBookTour) => {

    });
    // .then(async (dataBook) => {
    //   await handleSendMailBookTourAPI({
    //     customerId: localStorage.getItem("userId"),
    //     bookTourId: dataBook.bookTourId
    //   })

    // })
  };
  const handleCreateBookTourPayVisa = async () => {
    await handleCreateBookTour({
      tourId: tourId,
      customerId: localStorage.getItem("userId"),
      adultSlot: adult,
      childrenSlot: kids,
      babySlot: baby,
      date: new Date(),
      type: null,
      paymentId: "P7",
      state: "S1",
      note: "success",
    }).then(async (data) => {
      if (data.errCode === 0) {
        setBookTour(data.bookTourId);

      }
    });
  };
  const handlePaymentMethods = async () => {
    if (selectedOption === "VNPay") {
      //Thanh toán bằng VNPay
      await setUrlPayment("http://localhost:8080/create_payment_url");
      await handleCreateBookTourVNPay();
      handlePaymentBank();
    } else {
      if (selectedOption === "visa") {
        //Thanh toán bằng visa
        await setUrlPayment("http://localhost:8080/create_payment_stripe");
        await handleCreateBookTourPayVisa();
        handlePaymentBank();
      } else {
        //Thanh toán bằng tiền
        handleCreateBookTourPayMoney();
        setError(false);
      }
    }
  };
  const handleValueValidation = async () => {
    if (selectedOption === "VNPay") {
      //Thanh toán bằng VNPay
      await setUrlPayment("http://localhost:8080/create_payment_url");
    } else {
      if (selectedOption === "visa") {
        //Thanh toán bằng visa
        await setUrlPayment("http://localhost:8080/create_payment_stripe");
      }
    }
    if (
      selectedOptionAuth === "Email" &&
      paymentInfo.name !== "" &&
      paymentInfo.email !== ""
    ) {
      setPaymentInfo({
        ...paymentInfo,
        phone: "",
      });
      await handleVerifyEmailOtp();
    } else {
      if (paymentInfo.name !== "" && paymentInfo.phone !== "") {
        setPaymentInfo({
          ...paymentInfo,
          email: "",
        });
        await handleVerifyPhoneOtp();
      } else {
        alert("Thông tin nhập chưa đầy đủ");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleValueValidation();
  };

  const handleCreateBill = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const paymentStatus = searchParams.get("payment");
    const tourIdReturn = searchParams.get("tourId");
    const amount = searchParams.get("amount");
    if (paymentStatus && tourIdReturn) {
      if (paymentStatus === "success") {
        //tao bill đổi state book tour
        await handleChangeStateBookTourAPI({
          tourId: tourIdReturn,
          customerId: localStorage.getItem("userId"),
          state: "S3",
          paymentId: "P7",
        }).then(async (dataBookTour) => {
          await handleCreateBillAPI({
            bookTourId: dataBookTour.bookTourId,
            customerId: localStorage.getItem("userId"),
            totalCost: amount,
            bookTourDate: new Date(),
            promotionCode: "",
            status: "S3",
          }).then(async (dataBill) => {
            if (dataBill.errCode === 0) {
              setBill(dataBill.bill.id);
              let dataApiBookTour = await handleGetBookTourById(
                dataBookTour.bookTourId
              );

              await handleSendMailBookTourAPI({
                customerId: localStorage.getItem("userId"),
                bookTourId: dataBookTour.bookTourId
              })
              window.location.replace("/invoice/" + dataBill.bill.id);

              // setAdult(
              //   dataApiBookTour.bookTour.adultSlot
              //     ? dataApiBookTour.bookTour.adultSlot
              //     : 0
              // );
              // setKids(
              //   dataApiBookTour.bookTour.childrenSlot
              //     ? dataApiBookTour.bookTour.childrenSlot
              //     : 0
              // );
              // setBaby(
              //   dataApiBookTour.bookTour.babySlot
              //     ? dataApiBookTour.bookTour.babySlot
              //     : 0
              // );
              setError(false);
            }
          });
        });
      } else {
        if (paymentStatus === "fail") {
          await handleChangeStateBookTourAPI({
            tourId: tourId,
            customerId: localStorage.getItem("userId"),
            state: "S1",
            paymentId: "P7",
          }).then(async (dataBookTour) => {
            await handleCancellationBookTourAPI({
              id: dataBookTour.bookTourId,
            });
          });
        }
      }
    } else {
      const paymentStatusVNPay = searchParams.get("vnp_TransactionStatus");
      const tourIdVNPay = tourId;
      const amountVNPay = searchParams.get("vnp_Amount");
      if (paymentStatusVNPay === "00") {
        //tao bill đổi state book tour
        await handleChangeStateBookTourAPI({
          tourId: tourIdVNPay,
          customerId: localStorage.getItem("userId"),
          state: "S3",
          paymentId: "P6",
        }).then(async (dataBookTour) => {
          await handleCreateBillAPI({
            bookTourId: dataBookTour.bookTourId,
            customerId: localStorage.getItem("userId"),
            totalCost: parseFloat(amountVNPay) / 100,
            bookTourDate: new Date(),
            promotionCode: "",
            status: "S3",
          }).then(async (dataBill) => {
            if (dataBill.errCode === 0) {
              setBill(dataBill.bill.id);
              let dataApiBookTour = await handleGetBookTourById(
                dataBookTour.bookTourId
              );
              await handleSendMailBookTourAPI({
                customerId: localStorage.getItem("userId"),
                bookTourId: dataBookTour.bookTourId
              })
              window.location.replace("/invoice/" + dataBill.bill.id);
              // setAdult(
              //   dataApiBookTour.bookTour.adultSlot
              //     ? dataApiBookTour.bookTour.adultSlot
              //     : 0
              // );
              // setKids(
              //   dataApiBookTour.bookTour.childrenSlot
              //     ? dataApiBookTour.bookTour.childrenSlot
              //     : 0
              // );
              // setBaby(
              //   dataApiBookTour.bookTour.babySlot
              //     ? dataApiBookTour.bookTour.babySlot
              //     : 0
              // );

              setError(false);
            }
          });
        });
      } else {
        await handleChangeStateBookTourAPI({
          tourId: tourIdVNPay,
          customerId: localStorage.getItem("userId"),
          state: "S1",
          paymentId: "P6",
        }).then(async (dataBookTour) => {
          await handleCancellationBookTourAPI({ id: dataBookTour.bookTourId });
        });
      }
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     selectedOptionAuth === "Email" &&
  //     paymentInfo.name !== "" &&
  //     paymentInfo.email !== ""
  //   ) {
  //     setPaymentInfo({
  //       ...paymentInfo,
  //       phone: "",
  //     });
  //     handleVerifyEmailOtp();
  //   } else {
  //     if (paymentInfo.name !== "" && paymentInfo.phone !== "") {
  //       setPaymentInfo({
  //         ...paymentInfo,
  //         email: "",
  //       });
  //       handleVerifyPhoneOtp();
  //     }
  //   }
  // };
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
    bill: bill,
  };
  //window.addEventListener('beforeunload', handleCreateBill());
  useEffect(() => {
    fetchTour();

    // handleCreateBill();

    //
  }, []);

  return (
    <div
      className="payment-page"
      onLoad={() => {
        handleCreateBill();
      }}
    >
      <>
        <TourPriceDetail {...props} />
        <form className="payment-form flex" onSubmit={handleSubmit}>
          <TourInfo {...props} />
          <GuestContact {...props} />
          <PaymentMethod {...props} />
          <form action={urlPayment} method="POST" ref={formRef}>
            <div className="optionPayment" hidden>
              <input type="number" name="amount" value={total} />
            </div>
            <div className="optionPayment" hidden>
              <input
                type="text"
                name="orderDescription"
                value={tour.nameTour}
              />
            </div>
            <div className="optionPayment" hidden>
              <input type="text" name="name" value={tour.nameTour} />
            </div>
            <div className="optionPayment" hidden>
              <input type="text" name="bookTourId" value={bookTour} />
            </div>
            <div className="optionPayment" hidden>
              <input type="number" name="param" value={tourId} />
            </div>
          </form>
          <div
            className="info"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {selectedOption === "Tiền mặt" && (
              <div className="optionPayment">
                <label>Đi đến cửa hàng để thanh toán trực tiếp</label>
              </div>
            )}
            {selectedOption === "VNPay" && (
              <div
                className="optionPayment"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label style={{ margin: "0px" }}>Thanh toán qua trang</label>
                <img
                  src={require("../../assets/picture/vnpay.png")}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}
            {selectedOption === "visa" && (
              <div
                className="optionPayment"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label style={{ margin: "0px" }}>Thanh toán bằng thẻ</label>
                <img
                  src={require("../../assets/picture/visa.png")}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}
          </div>

          <AuthMethods {...props} />
          <p className="totalText">Tổng tiền</p>
          <div className="tourTotalPrice flex">
            <label>{formatCurrency(total)}</label>
          </div>

          <button type="submit">Thanh toán</button>
        </form>
      </>
    </div>
  );
}

export default Payment;
