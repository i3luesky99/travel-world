import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";
import Heart from "../../assets/svg/heart";
import {
  handleCreateFavoriteTourAPI,
  handleDeleteFavoriteTourAPI,
} from "../../services/favoriteTourServise";
import { handleScheduleDay } from "../../theme/functions";
import { handleLoadDataImageFromData } from "../../theme/functions";
export default function TotalTour(props) {
  const { title, destinations } = props;
  const [selectedHearts, setSelectedHearts] = useState([]);

  const handleOnClick = (id) => {
    window.location.replace("/tour-country/tour-detail/" + id);
  };
  const handleCreateFavoriteTour = async (id, index) => {
    // const data create favoriteTour
    const updatedHearts = [...selectedHearts];
    if (updatedHearts.includes(index)) {
      updatedHearts.splice(updatedHearts.indexOf(index), 1);
    } else {
      updatedHearts.push(index);
    }
    setSelectedHearts(updatedHearts);

    if (localStorage.getItem("userId") !== null) {
      try {
        let dataAPI = await handleCreateFavoriteTourAPI({
          tourId: id,
          customerId: localStorage.getItem("userId"),
        });
        if (dataAPI.errCode === 0) {
        } else {
          //cos thif xoas tim
          await handleDeleteFavoriteTourAPI({
            tourId: id,
            customerId: localStorage.getItem("userId"),
          });
        }
      } catch (error) {
        await handleDeleteFavoriteTourAPI({
          tourId: id,
          customerId: localStorage.getItem("userId"),
        });
      }
    } else {
      alert("Tính năng này chỉ dùng khi đã đăng nhập!");
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
                  <img src={destination.img ? destination?.img[0] : handleLoadDataImageFromData(destination?.image)} alt="Img title" />

                  <div className="overplayInfo">
                    <h3>{destination.title ? destination?.title : destination?.nameTour}</h3>
                    <p>{destination.desc ? destination?.desc : destination?.note}</p>

                    <BsArrowRightShort
                      className="icon"
                      onClick={() => handleOnClick("" + destination?.id)}
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
                  fillAll={selectedHearts.includes(index) ? true : false}
                  onClick={() =>
                    handleCreateFavoriteTour(destination?.id, index)
                  }
                />
                <div className="destFooter">
                  <div className="destText">
                    <p className="destination">
                      Địa điểm: {destination.location ? destination?.location : destination.placeDest}
                    </p>
                    <h6>Ngày khởi hàng: {destination?.dateGo}</h6>
                    <h6>
                      Lịch trình: {
                        destination.totalDays ? destination?.totalDays : handleScheduleDay(destination.dateGo, destination.dateBack)} ngày&nbsp;
                      {destination.totalDays ? destination?.totalDays : handleScheduleDay(destination.dateGo, destination.dateBack) - 1} đêm
                    </h6>
                  </div>
                </div>

                <div className="bottom flex">
                  <div className="bottomLeft flex">
                    <h6>
                      Chỗ đặt tour còn:
                      <span style={{ fontSize: 24, marginLeft: 10 }}>
                        {destination.slots ? destination?.slots : (destination.adultSlot + destination.childrenSlot)}
                      </span>
                    </h6>
                    <span>{formatCurrency(destination.prices ? destination?.prices : destination.adultPrice)}</span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => handleOnClick("" + destination.id)}
                  >
                    <p className="btn">ĐẶT NGAY</p>
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
