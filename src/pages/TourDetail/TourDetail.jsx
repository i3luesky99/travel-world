import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { destDesc } from "../../theme/data";
import { formatCurrency } from "../../theme/functions";
import { handleGetTourById } from "../../services/tourService";

const TourDetail = () => {
  useEffect(() => { fetchTour(); }, []);
  const [tour, setTour] = useState({});

  const { tourId } = useParams();
  const fetchTour = async () => {
    try {
      const data = await handleGetTourById(tourId);
      const tourData = data.tour;

      // /console.log(tourData);
      setTour(tourData);

    } catch (error) {
      console.log(error);
    }

  }
  const handleOnClickBookNow = async () => {
    await window.location.replace("/payment/" + tour.id);
  }

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
          <h1 className="tour-name">{tour.nameTour}</h1>
          <span className="tour-duration">3 ngày 2 đêm</span>
          <span className="tour-price">{tour.adultPrice}</span>
        </div>
      </div>
      <div className="tour-details">
        <h2 className="tour-heading">Chi tiết tour</h2>
        <p className="tour-description">{tour.note}</p>
        <h2 className="tour-heading">Tour gồm những gì ?</h2>
        <ul className="tour-inclusions">
          <li>Khách sạn 5*</li>
          <li>Phương tiện đưa đón tới khách sạn</li>
          <li>Buffet</li>
        </ul>
        <div className="tour-cta">
          <Link onClick={() => {
            handleOnClickBookNow();
          }} state={{ text: 'hello' }}>Book ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
