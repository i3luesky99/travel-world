import { useState } from "react";
import { formatCurrency } from "../../theme/functions";
import { BsCashStack } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import MenuDialog from "../../components/MenuDialog/MenuDialog";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const banks = [
    { name: "Ngân hàng ACB ", icon: "" },
    { name: "Ngân hàng Techcombank ", icon: "" },
    { name: "Ngân hàng ACB ", icon: "" },
    { name: "Ngân hàng ACB ", icon: "" },
  ];
  const [selectedOption, setSelectedOption] = useState("Tiền mặt");
  const [adult, setAdult] = useState(1);
  const [kids, setKids] = useState(0);
  const [baby, setBaby] = useState(0);

  const adultPrice = 10000000;
  const kidPrice = adultPrice / 2;
  const babyPrice = adultPrice / 20;
  const babyText = "Sơ sinh(< 2 tuổi)";

  const total = adultPrice
    ? adultPrice * adult + kidPrice * kids + babyPrice * baby
    : 0;
  const handleInputChange = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("123123");
    // Here you can implement your payment logic using the paymentInfo state
  };

  return (
    <div className="payment-page">
      <div className="tourDetail">
        <p className="title">BẢNG GIÁ TOUR CHI TIẾT</p>
        <table>
          <thead className="topTable">
            <tr>
              <td>Loại giá\Độ tuổi</td>
              <td>Người lớn(Trên 11 tuổi)</td>
              <td>Trẻ em(2 - 11 tuổi)</td>
              <td>{babyText}</td>
            </tr>
          </thead>
          <tbody className="botTable">
            <tr>
              <td>Giá</td>
              <td>{formatCurrency(adultPrice)}</td>
              <td>{formatCurrency(kidPrice)}</td>
              <td>{formatCurrency(babyPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <form className="payment-form flex" onSubmit={handleSubmit}>
        <p className="title">THÔNG TIN LIÊN HỆ</p>
        <div className="info">
          <div className="optionPayment">
            <label>Họ và tên :</label>
            <input
              type="text"
              name="name"
              value={paymentInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="optionPayment">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              value={paymentInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="optionPayment">
            <label>Số điện thoại :</label>
            <input
              type="text"
              name="phone"
              value={paymentInfo.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="optionPayment">
            <label>Người lớn :</label>
            <input
              type="number"
              min={1}
              value={adult}
              onChange={(e) => setAdult(e.target.value)}
            />
          </div>
          <div className="optionPayment">
            <label htmlFor="cvv">Trẻ em :</label>
            <input
              type="number"
              min={0}
              value={kids}
              onChange={(e) => setKids(e.target.value)}
            />
          </div>
          <div className="optionPayment">
            <label htmlFor="cvv">Sơ sinh :</label>
            <input
              type="number"
              min={0}
              value={baby}
              onChange={(e) => setBaby(e.target.value)}
            />
          </div>
        </div>
        <p className="title">PHƯƠNG THỨC THANH TOÁN</p>
        <div className="info">
          <div className="optionSelect">
            <label>
              <input
                type="radio"
                value="Tiền mặt"
                checked={selectedOption === "Tiền mặt"}
                onChange={handleOptionChange}
              />
              <p>Tiền mặt</p>
              <BsCashStack className="icon" />
            </label>
          </div>
          <div className="optionSelect">
            <label>
              <input
                type="radio"
                value="Momo"
                checked={selectedOption === "Momo"}
                onChange={handleOptionChange}
              />
              <p>Momo</p>
              <img src={require("../../assets/picture/momo.png")} alt="" />
            </label>
          </div>
          <div className="optionSelect ">
            <label>
              <input
                type="radio"
                value="Internet Banking"
                checked={selectedOption === "Internet Banking"}
                onChange={handleOptionChange}
              />
              <p>Internet Banking</p>
              <BsBank2 className="icon" />
            </label>
          </div>
        </div>
        <div className="info">
          {selectedOption === "Internet Banking" && (
            <>
              <div className="optionPayment">
                <label>Số thẻ :</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="optionPayment">
                <label htmlFor="cvv">Loại thẻ :</label>
                <MenuDialog banks={banks} />
              </div>
              <div className="optionPayment">
                <label>Ngày hết hạn :</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentInfo.expirationDate}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </div>
        <button type="submit">Thanh toán</button>
      </form>

      <div className="tourTotalPrice">
        <div>{formatCurrency(total)}</div>
      </div>
    </div>
  );
}

export default Payment;
