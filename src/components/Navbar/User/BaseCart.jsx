import { Drawer } from "@mui/material";
import React from "react";
import Cancel from "../../../assets/svg/cancel";
import Heart from "../../../assets/svg/heart";
import { formatCurrency } from "../../../theme/functions";

export default function BaseCart(props) {
  const { item, open, title, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const tours = [1, 2, 3, 4, 5];
  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleClose}
      className="base-cart"
      style={{ display: "flex", position: "relative" }}
    >
      <div className="header">
        <Heart
          style={{
            width: "35px",
            height: "35px",
            marginRight: "15px",
          }}
        />
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
        {tours.map((tour) => (
          <>
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
              />
              <div className="item-prop">
                <img
                  className="item-img"
                  src={require("../../../assets/picture/brazil.jpg")}
                  alt=""
                />
                <div className="title-img">
                  <div style={{ width: "100%" }}>
                    Mua 2 Tặng Bình Nước Áo Thun Organic Cotton Tay Ngắn Nam Cổ
                    Tròn Form Fitted - 10S23TSS003C
                  </div>
                  <div>Ngày khởi hành: 30/04/2022</div>
                  <div>Số lượng chỗ: 30</div>
                  <div className="price">
                    Giá tour: {formatCurrency(10000000)}
                  </div>
                </div>
              </div>
              <div className="book-button">ĐẶT TOUR</div>
            </div>
            <div
              style={{
                height: "1px",
                width: "450px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            ></div>
          </>
        ))}
      </div>
    </Drawer>
  );
}
