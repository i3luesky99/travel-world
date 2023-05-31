import { Drawer } from "@mui/material";
import React from "react";
import Cancel from "../../../assets/svg/cancel";
import CartIcon from "../../../assets/svg/cart";
import Heart from "../../../assets/svg/heart";
import { Popup } from "../../../components";
import { formatCurrency } from "../../../theme/functions";
import { handleCancellationBookTourAPI } from "../../../services/bookTourService";
import { handleSendMailBookTourAPI } from "../../../services/sendMailService";
export default function BaseCart(props) {
  const { tours, open, title, setOpen, heart, deleteTour } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const handleCancellationBookTour = async (bookTourId, tourId) => {

    await handleCancellationBookTourAPI({ id: bookTourId });
    deleteTour(tourId);
  }
  const handleToTourDetail = (id) => {
    window.location.replace(`/tour-country/tour-detail/${id}`);
  };
  const handleSendMailHoaDon = async (bookTourId) => {

    await handleSendMailBookTourAPI({
      bookTourId: bookTourId,
      customerId: localStorage.getItem("userId")
    }).then((dataBill) => {
      if (dataBill.errCode == 0) {

        window.location.replace("/Invoice/" + dataBill.billId);
      }


    }
    );

  };
  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleClose}
      className="base-cart"
      style={{ display: "flex", position: "relative" }}
    >
      <div className="header">
        {heart ? (
          <Heart
            style={{
              width: "35px",
              height: "35px",
              marginRight: "15px",
            }}
          />
        ) : (
          <CartIcon
            style={{
              width: "30px",
              height: "30px",
              marginRight: "15px",
            }}
          />
        )}
        {title}
      </div>

      <Cancel
        style={{
          width: "25px",
          height: "25px",
          cursor: "pointer",
          position: "absolute",
          right: "15px",
          top: "35px",
        }}
        onClick={handleClose}
      />
      <div className="content">
        {tours.map((tour, index) => (
          <div key={`tour-select-${index}`}>
            <div className="item">
              <Cancel
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  right: "10px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => deleteTour(tour?.id)}
              />
              <div className="item-prop">
                <img className="item-img" src={tour?.img} alt="" />
                <div className="title-img">
                  <div style={{ width: "100%" }}>{tour?.tourName}</div>
                  <div>Ngày khởi hành: {tour?.dateStart}</div>
                  {heart ? (<>
                    <div>Số chỗ còn lại: {tour?.totalSlot}</div>
                    <div className="price">
                      Tổng tiền: {formatCurrency(tour?.price)}
                    </div>
                  </>) :
                    (tour.stateBookTour !== 'S3'
                      ? (<>
                        <div>Mã đặt tour: {tour?.bookTourId}</div>
                        <div>Chỗ người lớn: {tour?.adultSlot ? tour?.adultSlot : 0}</div>
                        <div>Chỗ trẻ em: {tour?.childSlot ? tour?.childSlot : 0}</div>
                        <div>Chỗ trẻ sơ sinh: {tour?.babySlot ? tour?.babySlot : 0}</div>
                        <div className="price">
                          Tổng tiền: {formatCurrency(tour?.adultPrice * tour?.adultSlot + tour?.childPrice * tour?.childSlot + tour?.babyPrice * tour?.babySlot)}
                        </div>
                      </>)
                      : (
                        <>

                          <div>Chỗ người lớn: {tour?.adultSlot ? tour?.adultSlot : 0}</div>
                          <div>Chỗ trẻ em: {tour?.childSlot ? tour?.childSlot : 0}</div>
                          <div>Chỗ trẻ sơ sinh: {tour?.babySlot ? tour?.babySlot : 0}</div>
                          <div className="price">
                            Tổng tiền: {formatCurrency(tour?.adultPrice * tour?.adultSlot + tour?.childPrice * tour?.childSlot + tour?.babyPrice * tour?.babySlot)}
                          </div>
                        </>))
                  }


                </div>
              </div>
              {heart ? (

                <div
                  className="book-button"
                  onClick={() => handleToTourDetail(tour?.id)}
                >
                  ĐẶT TOUR
                </div>

              ) : (tour.stateBookTour !== 'S3' ?
                (<div
                  className="book-button"
                  style={{
                    backgroundColor: "#dc3545",
                  }}
                  onClick={() => handleCancellationBookTour(tour?.bookTourId, tour?.id)}
                >
                  HUỶ ĐẶT TOUR
                </div>) : (<div
                  className="book-button"
                  onClick={() => handleSendMailHoaDon(tour?.bookTourId)}

                >
                  XEM HÓA ĐƠN
                </div>))

              }
            </div>
            <div
              style={{
                height: "1px",
                width: "450px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            ></div>
          </div>
        ))}
      </div>
    </Drawer >
  );
}
