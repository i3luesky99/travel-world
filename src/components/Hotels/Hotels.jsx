import React, { useEffect } from "react";
import { MdKingBed as BedIcon } from "react-icons/md";
import { MdBathtub as BathIcon } from "react-icons/md";
import { FaWifi as WifiIcon } from "react-icons/fa";
import { MdAirportShuttle as ShuttleIcon } from "react-icons/md";
import { MdFastfood as FoodIcon } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";

export default function Hotels() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const offerArr = [
    {
      id: 1,
      img: require("../../assets/picture/pic6.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      price: "300000",
      discount: "11%",
      amenities: {
        bed: 3,
        bath: 2,
        wifi: true,
        shuttle: true,
        buffet: true,
      },
    },
    {
      id: 2,
      img: require("../../assets/picture/pic7.jpg"),
      title: "Meci Picchu",
      location: "Brazil",
      grade: "CULTURAL CHILLS",
      price: "300000",
      discount: "32%",
      amenities: {
        bed: 4,
        bath: 3,
        wifi: true,
      },
    },
    {
      id: 3,
      img: require("../../assets/picture/pic8.jpg"),
      title: "Chill Picchu",
      location: "America",
      grade: "FANTASTIC",
      price: "300000",
      discount: "55%",
      amenities: {
        bed: 1,
        bath: 1,
      },
    },
    {
      id: 4,
      img: require("../../assets/picture/pic9.jpg"),
      title: "Places Picchu",
      location: "England",
      grade: "CULTURAL RELAX",
      price: "300000",
      discount: "4%",
      amenities: {
        bed: 4,
        bath: 2,
      },
    },
    {
      id: 5,
      img: require("../../assets/picture/pic10.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
      price: "300000",
      discount: "15%",
      amenities: {
        bed: 4,
        bath: 3,
        wifi: true,
        buffet: true,
      },
    },
  ];
  return (
    <section className="hotels container section">
      <div className="secContainer">
        <div
          className="secIntro"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <h2 className="secTitle">
            Những chỗ nghỉ nổi bật khuyến nghị cho bạn:
          </h2>
          <p>
            Tất cả khách sạn đẹp nhất, tuyệt vời nhất đang chờ bạn đến để trải
            nghiệm
          </p>
        </div>
        <div className="mainContent grid">
          {offerArr?.map((offer, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              key={`key-offer-${index}`}
              className="singleHotel"
            >
              <div className="destImage">
                <img src={offer?.img} alt={offer?.title} />
                <span className="discount">{offer?.discount} Off</span>
              </div>

              <div className="hotelBody flex">
                <div style={{ width: "100%" }}>
                  <div className="price flex">
                    <h4>{formatCurrency(offer?.price)}</h4>
                    <span className="status">Cho thuê</span>
                  </div>

                  <div className="amenities flex">
                    {offer?.amenities.bed && (
                      <div className="singleAmenity flex">
                        <BedIcon className="icon" />
                        <small>{offer?.amenities?.bed} Phòng ngủ</small>
                      </div>
                    )}

                    {offer?.amenities?.bath && (
                      <div className="singleAmenity flex">
                        <BathIcon className="icon" />
                        <small>{offer?.amenities?.bath} Nhà tắm</small>
                      </div>
                    )}

                    {offer?.amenities?.wifi && (
                      <div className="singleAmenity flex">
                        <WifiIcon className="icon" />
                        <small>Wifi</small>
                      </div>
                    )}
                    {offer?.amenities?.shuttle && (
                      <div className="singleAmenity flex">
                        <ShuttleIcon className="icon" />
                        <small>Xe đón</small>
                      </div>
                    )}

                    {offer?.amenities?.buffet && (
                      <div className="singleAmenity flex">
                        <FoodIcon className="icon" />
                        <small>Buffet</small>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bottomOffer" style={{ width: "100%" }}>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine 310, {offer?.location}</small>
                  </div>

                  <button className="btn flex">
                    Chi tiết
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
