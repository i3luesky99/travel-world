import React from "react";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

export default function Offers() {
  const offerArr = [
    {
      id: 1,
      img: require("../../assets/picture/pic6.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
      description: "",
    },
    {
      id: 2,
      img: require("../../assets/picture/pic7.jpg"),
      title: "Meci Picchu",
      location: "Brazil",
      grade: "CULTURAL CHILLS",
    },
    {
      id: 3,
      img: require("../../assets/picture/pic8.jpg"),
      title: "Chill Picchu",
      location: "America",
      grade: "FANTASTIC",
    },
    {
      id: 4,
      img: require("../../assets/picture/pic9.jpg"),
      title: "Places Picchu",
      location: "England",
      grade: "CULTURAL RELAX",
    },
    {
      id: 5,
      img: require("../../assets/picture/pic10.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
    },
  ];
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Form historical cities to natural spectaculars, come see the best of
            world!
          </p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img
                src={require("../../assets/picture/pic11.jpg")}
                alt="Img Name"
              />
              <span className="discount">30% Off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                  <MdBathtub className="icon" />
                  <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wifi</small>
                </div>

                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon" />
                  <small>Shuttle</small>
                </div>

                <div className="singleAmenity flex">
                  <MdFastfood className="icon" />
                  <small>Food</small>
                </div>


              </div>

              <div className="location flex">
                <MdLocationOn className="icon" />
                <small>450 Vine 310, London</small>
              </div>

              <button className="btn flex">
                View detail
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
