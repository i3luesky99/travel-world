import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const video = require("../../assets/video/video1.mp4");

  const items = [
    {
      id: 1,
      title: "1000+ Mountains",
      desc: "Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being",
      img: require("../../assets/picture/mountain.jpg"),
    },
    {
      id: 1,
      title: "1023+ Hiking",
      desc: "Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being",
      img: require("../../assets/picture/hiking.jpg"),
    },
    {
      id: 1,
      title: "1100+ Customers",
      desc: "Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being",
      img: require("../../assets/picture/customer.jpg"),
    },
  ];
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Why Hiking ?</h3>

        <div className="mainContent container grid">
          {items.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={2000 + 500 * index}
              key={`index-${index}`}
              className="singleItem"
            >
              <img src={item.img} alt="Img New" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              className="cardText"
              data-aos="fade-right"
              data-aos-duration={2000}
            >
              <h2>Wonderful House experience in there</h2>
              <p>
                The Adventure sub ranking is based on an equally weighted
                average of scores from five country.
              </p>
            </div>

            <div
              className="cardVideo"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <video src={video} autoPlay loop muted type="video/mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
