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
      title: "1000+ Ngọn núi",
      desc: "Nghiên cứu cho thấy rằng một cơ hội để thoát khỏi nhịp độ bình thường của cuộc sống hàng ngày giúp giảm căng thẳng và cải thiện sức khỏe và hạnh phúc",
      img: require("../../assets/picture/mountain.jpg"),
    },
    {
      id: 1,
      title: "1023+ Con đường",
      desc: "Nghiên cứu cho thấy rằng một cơ hội để thoát khỏi nhịp độ bình thường của cuộc sống hàng ngày giúp giảm căng thẳng và cải thiện sức khỏe và hạnh phúc",
      img: require("../../assets/picture/hiking.jpg"),
    },
    {
      id: 1,
      title: "1100+ Người tham gia",
      desc: "Nghiên cứu cho thấy rằng một cơ hội để thoát khỏi nhịp độ bình thường của cuộc sống hàng ngày giúp giảm căng thẳng và cải thiện sức khỏe và hạnh phúc",
      img: require("../../assets/picture/customer.jpg"),
    },
  ];
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Đi bộ, tại sao không ?</h3>

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
              <h2>Trải nghiệm những điều tuyệt vời nơi đây</h2>
              <p>
                Mức độ của cuộc phiêu lưu dựa trên những thang điểm đã có từ
                trước của các quốc gia
              </p>
            </div>

            <div
              className="cardVideo"
              data-aos="fade-right"
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
