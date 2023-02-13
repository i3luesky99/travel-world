import React, { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";

export default function Foreign() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const destinationArr = [
    {
      id: 1,
      img: [
        require("../../assets/picture/pic1.jpg"),
        require("../../assets/picture/pic2.jpg"),
      ],
      title: "Tour du lịch Đà Nẵng ",
      location: "Đà Nẵng",
      totalDays: 3,
      dateStart: "22/03/2023",
      slots: 10,
      prices: 3000000,
      desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
      foreign: false,
    },
    {
      id: 2,
      img: [
        require("../../assets/picture/pic2.jpg"),
        require("../../assets/picture/pic3.jpg"),
      ],
      title: "Tour du lịch Đà Nẵng ",
      location: "Đà Nẵng",
      totalDays: 3,
      dateStart: "22/03/2023",
      slots: 10,
      prices: 4000000,
      desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
      foreign: false,
    },
    {
      id: 3,
      img: [
        require("../../assets/picture/pic4.jpg"),
        require("../../assets/picture/pic2.jpg"),
      ],
      title: "Tour du lịch Đà Nẵng ",
      location: "Đà Nẵng",
      totalDays: 3,
      dateStart: "22/03/2023",
      slots: 10,
      prices: 6000000,
      desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
      foreign: false,
    },
    {
      id: 4,
      img: [
        require("../../assets/picture/pic5.jpg"),
        require("../../assets/picture/pic2.jpg"),
      ],
      title: "Tour du lịch Đà Nẵng ",
      location: "Đà Nẵng",
      totalDays: 3,
      dateStart: "22/03/2023",
      slots: 10,
      prices: 1000000,
      desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
      foreign: false,
    },
    {
      id: 5,
      img: [
        require("../../assets/picture/pic7.jpg"),
        require("../../assets/picture/pic2.jpg"),
      ],
      title: "Tour du lịch Đà Nẵng ",
      location: "Đà Nẵng",
      totalDays: 3,
      dateStart: "22/03/2023",
      slots: 10,
      prices: 2000000,
      desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
      foreign: false,
    },
  ];

  const onNext = () => {};

  return (
    <section className="foreign section container">
      <div className="secContainer ">
        <div className="secHeader flex ">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Tour ngoài nước</h2>
            <p>
              Từ những di tích lịch sử, phong cảnh trữ tình cho đến những danh
              lam thắng cảnh được UNESCO công nhận .
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort onClick={onNext} className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {destinationArr.map((destination, index) => (
            <div key={`key-${index}-destination`}>
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
                    <h6>Lịch trình: {destination?.totalDays}</h6>
                    <h6>Chỗ đặt tour còn: {destination?.slots}</h6>
                    <span>{formatCurrency(destination?.prices)}</span>
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
