import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "../../components/Carousel/Carousel";

export default function TourForeign() {
  const [page, setPage] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (screenWidth <= 500) {
      setPage(1);
    } else if (screenWidth <= 1200) {
      setPage(2);
    } else if (screenWidth <= 1500) {
      setPage(3);
    } else {
      setPage(4);
    }
    window.addEventListener("resize", handleResize);
    Aos.init({ duration: 2000 });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

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

  return (
    <section className="tour-country section container">
      <Carousel
        destinationArr={destinationArr}
        page={page}
        foreign={true}
        title="Tour Châu ÂU"
        link="/tour-foreign/europe"
      />
      <Carousel
        destinationArr={destinationArr}
        page={page}
        foreign={true}
        title="Tour Châu Á"
        link="/tour-foreign/asia"
      />
      <Carousel
        destinationArr={destinationArr}
        page={page}
        foreign={true}
        title="Tour Châu Mỹ"
        link="/tour-foreign/america"
      />
    </section>
  );
}
