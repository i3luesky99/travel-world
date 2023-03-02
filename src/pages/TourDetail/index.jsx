import React from "react";
import { destDesc } from "../../theme/data";

const TourDetail = () => {
  return (
    <div className="tour-detail">
      <div className="tour-image-container">
        <img
          className="tour-image"
          src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
          alt="Tour"
        />
        <div className="tour-image-text">
          <h1 className="tour-name">Amazing Tour of London</h1>
          <span className="tour-duration">3 days</span>
          <span className="tour-price">$799 per person</span>
        </div>
      </div>
      <div className="tour-details">
        <h2 className="tour-heading">Tour Details</h2>
        <p className="tour-description">{destDesc}</p>
        <h2 className="tour-heading">What's Included</h2>
        <ul className="tour-inclusions">
          <li>Accommodation in a 5-star hotel</li>
          <li>Guided tour of London</li>
          <li>Transportation to and from airport</li>
          <li>All meals and snacks</li>
        </ul>
        <div className="tour-cta">
          <a href="#">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
