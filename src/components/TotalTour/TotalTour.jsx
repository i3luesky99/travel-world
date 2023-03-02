import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";
import { Link } from "react-router-dom";

export default function TotalTour(props) {
  const { title, destinations, foreign } = props;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="country section container">
      <div className="secContainer ">
        <div className="secHeader flex ">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Tất cả tour {title}</h2>
            <p>
              Từ những di tích lịch sử, phong cảnh trữ tình cho đến những danh
              lam thắng cảnh được UNESCO công nhận .
            </p>
          </div>
        </div>

        <div className="mainContent grid">
          {destinations?.map((destination, index) => (
            <div key={`key-${index}-destination`}>
              <div className="singleDestination" data-aos="fade-up">
                <Link
                  to={
                    foreign
                      ? `/tour-foreign/tour-detail/${destination.id}`
                      : `/tour-country/tour-detail/${destination.id}`
                  }
                  style={{ color: "black" }}
                >
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
                    </div>
                  </div>
                </Link>

                <div className="bottom flex">
                  <div className="bottomLeft flex">
                    <h6>
                      Chỗ đặt tour còn:
                      <span style={{ fontSize: 24, marginLeft: 10 }}>
                        {destination?.slots}
                      </span>
                    </h6>
                    <span>{formatCurrency(destination?.prices)}</span>
                  </div>
                  <p className="btn">BOOK NGAY</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
