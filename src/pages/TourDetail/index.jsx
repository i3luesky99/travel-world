import React from "react";
import { Link } from "react-router-dom";
import { destDesc } from "../../theme/data";
import { formatCurrency } from "../../theme/functions";

const TourDetail = () => {
  const price = formatCurrency(1000000);
  return (
    <div className="tour-detail">
      <div className="tour-image-container">
        <img
          className="tour-image"
          src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
          alt="Tour"
        />
        <div className="tour-image-text">
          <h1 className="tour-name">Đà Nẵng Tour</h1>
          <span className="tour-duration">3 ngày 2 đêm</span>
          <span className="tour-price">{price}</span>
        </div>
      </div>
      <div className="tour-details">
        <h2 className="tour-heading">Chi tiết tour</h2>
        <p className="tour-description">{destDesc}</p>
        <h2 className="tour-heading">Tour gồm những gì ?</h2>
        <ul className="tour-inclusions">
          <li>Khách sạn 5*</li>
          <li>Phương tiện đưa đón tới khách sạn</li>
          <li>Buffet</li>
        </ul>
        <div className="tour-cta">
          <Link to={"/payment"}>Book ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
