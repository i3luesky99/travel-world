import React from "react";
import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatCurrency } from "../../theme/functions";

export default function Carousel(props) {
  const { destinationArr, page, title, link } = props;

  return (
    <div className="secContainer ">
      <div className="secHeader flex ">
        <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
          <h2 className="secTitle">{title}</h2>
          <p>
            Từ những di tích lịch sử, phong cảnh trữ tình cho đến những danh lam
            thắng cảnh được UNESCO công nhận .
          </p>
        </div>
        <Link to={link}>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <FaListAlt className="icon" />
            Xem tất cả
          </div>
        </Link>
      </div>

      <Swiper
        slidesPerView={page}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Pagination, Navigation]}
        className="mainContent grid"
        spaceBetween={30}
      >
        {destinationArr.map((destination, index) => (
          <SwiperSlide key={`key-${index}-destination`}>
            <div className="singleDestination" data-aos="fade-up">
              <div className="destImage">
                <img src={destination?.img[0]} alt="Img title" />

                <div className="overplayInfo">
                  <h3>{destination?.title}</h3>
                  <p>{destination?.desc}</p>

                  <BsArrowRightShort className="icon" />
                </div>
              </div>

              <div className="destFooter flex">
                {index < 9 ? (
                  <div className="number">0{index + 1}</div>
                ) : (
                  <div className="number">{index + 1}</div>
                )}
                <div className="destText flex">
                  <p className="destination">
                    Địa điểm: {destination?.location}
                  </p>
                  <h6>Ngày khởi hàng: {destination?.dateStart}</h6>
                  <h6>
                    Lịch trình: {destination?.totalDays} ngày&nbsp;
                    {destination?.totalDays - 1} đêm
                  </h6>
                  <h6>Chỗ đặt tour còn: {destination?.slots}</h6>
                  <span>{formatCurrency(destination?.prices)}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
