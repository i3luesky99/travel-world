import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";
import Heart from "../../assets/svg/heart";
import {
  handleCreateFavoriteTourAPI, handleDeleteFavoriteTourAPI
} from "../../services/favoriteTourServise";
import { async } from "q";

export default function TotalTour(props) {
  const { title, destinations } = props;

  const handleOnClick = (id) => {
    window.location.replace("/tour-country/tour-detail/" + id);
  };

  const handleCreateFavoriteTour = async (id) => {
    // const data create favoriteTour
    if (localStorage.getItem("userId") !== null) {
      try {
        let dataAPI = await handleCreateFavoriteTourAPI({
          tourId: id,
          customerId: localStorage.getItem("userId")
        });
        if (dataAPI.errCode === 0) {
          //tim thanhf cong set tim
        } else {
          //cos thif xoas tim
          await handleDeleteFavoriteTourAPI({
            tourId: id,
            customerId: localStorage.getItem("userId")
          });
        }
      } catch (error) {
        await handleDeleteFavoriteTourAPI({
          tourId: id,
          customerId: localStorage.getItem("userId")
        });
      }

    } else {
      alert("Tính năng này chỉ dùng khi đã đăng nhập!")
    }
    // window.location.replace("/tour-country/tour-detail/" + id);
  };

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
                <div className="destImage">
                  <img src={destination?.img[0]} alt="Img title" />

                  <div className="overplayInfo">
                    <h3>{destination?.title}</h3>
                    <p>{destination?.desc}</p>

                    <BsArrowRightShort
                      className="icon"
                      onClick={() => handleOnClick("" + destination.id)}
                    />
                  </div>
                </div>
                <Heart
                  style={{
                    width: "45px",
                    height: "45px",
                    cursor: "pointer",
                    position: "absolute",
                    zIndex: "10",
                    top: "0px",
                  }}
                  fill="#f67009"
                  onClick={() => handleCreateFavoriteTour(destination?.id)}
                />
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
                    <h6>Ngày khởi hàng: {destination?.dateGo}</h6>
                    <h6>
                      Lịch trình: {destination?.totalDays} ngày&nbsp;
                      {destination?.totalDays - 1} đêm
                    </h6>
                  </div>
                </div>

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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p
                      className="btn"
                      onClick={() => handleOnClick("" + destination.id)}
                    >
                      ĐẶT NGAY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
