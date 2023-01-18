import React, { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Popular() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const destinationArr = [
    {
      id: 1,
      img: require("../../assets/picture/pic1.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
      description: "",
    },
    {
      id: 2,
      img: require("../../assets/picture/pic2.jpg"),
      title: "Meci Picchu",
      location: "Brazil",
      grade: "CULTURAL CHILLS",
    },
    {
      id: 3,
      img: require("../../assets/picture/pic3.jpg"),
      title: "Chill Picchu",
      location: "America",
      grade: "FANTASTIC",
    },
    {
      id: 4,
      img: require("../../assets/picture/pic4.jpg"),
      title: "Places Picchu",
      location: "England",
      grade: "CULTURAL RELAX",
    },
    {
      id: 5,
      img: require("../../assets/picture/pic5.jpg"),
      title: "Machu Picchu",
      location: "Peru",
      grade: "CULTURAL RELAX",
    },
  ];
  return (
    <section className="popular section container">
      <div className="secContainer ">
        <div className="secHeader flex ">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specular, come see the best of
              the world!
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {destinationArr.map((destination, index) => (
            <div className="singleDestination" data-aos="fade-up">
              <div className="destImage">
                <img src={destination?.img} alt="Img title" />

                <div className="overplayInfo">
                  <h3>{destination?.title}</h3>
                  <p>Lorem ipsum dolor sit amet .</p>

                  <BsArrowRightShort className="icon" />
                </div>
              </div>

              <div className="destFooter">
                {index > 10 ? (
                  <div className="number">{index + 1}</div>
                ) : (
                  <div className="number">0{index + 1}</div>
                )}

                <div className="destText flex">
                  <h6>{destination?.location}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon" />
                    </span>
                    Dot
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
