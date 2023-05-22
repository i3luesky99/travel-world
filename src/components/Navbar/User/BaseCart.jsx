import { Drawer } from "@mui/material";
import React from "react";
import Cancel from "../../../assets/svg/cancel";
import CartIcon from "../../../assets/svg/cart";
import Heart from "../../../assets/svg/heart";
import { formatCurrency } from "../../../theme/functions";

export default function BaseCart(props) {
  const { tours, open, title, setOpen, heart, deleteTour } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const handleToTourDetail = (id) => {
    window.location.replace(`/tour-country/tour-detail/${id}`);
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
                  <div>Ngày khởi hành: 30/04/2022</div>
                  <div>Số lượng chỗ: {tour?.totalSlot}</div>
                  <div className="price">
                    Giá tour: {formatCurrency(10000000)}
                  </div>
                </div>
              </div>
              {heart ? (
                <div
                  className="book-button"
                  onClick={() => handleToTourDetail(tour?.id)}
                >
                  ĐẶT TOUR
                </div>
              ) : (
                <div
                  className="book-button"
                  style={{
                    backgroundColor: "#dc3545",
                  }}
                  onClick={() => deleteTour(tour?.id)}
                >
                  HUỶ ĐẶT TOUR
                </div>
              )}
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
    </Drawer>
  );
}
