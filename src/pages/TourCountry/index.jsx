import React, { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatCurrency } from "../../theme/functions";

export default function TourCountry() {
  const [isSelected, setIsSelected] = useState("");
  const filterTexts = [
    { text: "Sắp xếp: Ngày khởi hành", icon: true },
    { text: "Giá cả" },
    { text: "Phổ biến" },
  ];
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

  const onHandleFilter = (text) => {
    setIsSelected(text);
  };
  return (
    <section className="tour-country section container">
      <div className="secContainer ">
        <div className="secHeader flex ">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv flex"
          >
            <h2 className="secTitle">Danh sách các tour trong nước</h2>
            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              className="iconsDiv flex"
            >
              {filterTexts.map((filterText, index) => (
                <div
                  key={index}
                  className={
                    isSelected === filterText.text
                      ? "textSelected flex"
                      : "iconText flex"
                  }
                  onClick={() => onHandleFilter(filterText.text)}
                >
                  {filterText.icon && <FaListAlt className="icon" />}
                  <p>{filterText.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content grid">
          {destinationArr.map((destination, index) => (
            <div
              key={`key-${index}-destination`}
              className="singleDestination"
              data-aos="fade-up"
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
                  <h6>Chỗ đặt tour còn: {destination?.slots}</h6>
                  <span>{formatCurrency(destination?.prices)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
