import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { handleGetTourByContinent } from "../../services/tourService";
import { handleLoadDataImageFromData } from "../../theme/functions";
import { handleScheduleDay } from "../../theme/functions";
import Carousel from "../../components/Carousel/Carousel";

import {
  destinationAmerica,
  destinationAsia,
  destinationEurope,
} from "../../theme/data";

export default function TourForeign() {
  const [page, setPage] = useState(3);

  const [tourEurope, setTourEurope] = useState([]);
  const [tourAmerica, setTourAmerica] = useState([]);
  const [tourAsia, setTourAsia] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const fetchTourAsia = async () => {
    try {
      setTourAsia([]);
      const dataApi = await handleGetTourByContinent("Chau A");
      const data2 = [];
      for (let index = 0; index < dataApi.tour.length; index++) {
        const tourSouth = dataApi.tour[index];
        const data = [];

        for (let index = 0; index < tourSouth.length; index++) {
          const dataTransferAmerica = {
            id: 1,
            img: [
              require("../../assets/picture/pic1.jpg"),
              require("../../assets/picture/pic2.jpg")
            ],
            title: "Tour du lịch Đà Nẵng ",
            location: "Đà Nẵng",
            totalDays: 3,
            dateStart: "22/03/2023",
            dateGo: "",
            slots: 10,
            prices: 3000000,
            desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
            foreign: false,
          };
          const element = tourSouth[index];
          dataTransferAmerica.id = element.id;
          dataTransferAmerica.title = element.nameTour;
          dataTransferAmerica.location = element.placeDest;
          dataTransferAmerica.totalDays = handleScheduleDay(element.dateGo, element.dateBack);//dateBack-dateGo
          dataTransferAmerica.dateStart = element.dateGo;//dateGo
          dataTransferAmerica.dateGo = element.dateGo;
          //desc = note
          if (element.image) {
            if (element.image.data) {
              dataTransferAmerica.img = [handleLoadDataImageFromData(element.image.data)]
            }

          }
          dataTransferAmerica.desc = element.note;
          dataTransferAmerica.slots = element.adultSlot + element.childrenSlot;
          dataTransferAmerica.prices = element.adultPrice;
          data.push(dataTransferAmerica);

        }
        setTourAsia((tourAsia) =>
          ([...tourAsia, data])

        );
        // data2.push(data);
      }

      //console.log(data);

      // setTourAsia((tourAsia) =>
      //   ([...tourAsia, data2.flat()]));
      // setDestinations(dataTour);
      //console.log(tourAsia);


    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourAmerica = async () => {
    try {
      setTourAmerica([]);
      const dataApi = await handleGetTourByContinent("Chau My");
      const data2 = [];
      for (let index = 0; index < dataApi.tour.length; index++) {
        const tourSouth = dataApi.tour[index];
        const data = [];

        for (let index = 0; index < tourSouth.length; index++) {
          const dataTransferAmerica = {
            id: 1,
            img: [
              require("../../assets/picture/pic1.jpg"),
              require("../../assets/picture/pic2.jpg")
            ],
            title: "Tour du lịch Đà Nẵng ",
            location: "Đà Nẵng",
            totalDays: 3,
            dateStart: "22/03/2023",
            dateGo: "",
            slots: 10,
            prices: 3000000,
            desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
            foreign: false,
          };
          const element = tourSouth[index];
          dataTransferAmerica.id = element.id;
          dataTransferAmerica.title = element.nameTour;
          dataTransferAmerica.location = element.placeDest;
          dataTransferAmerica.totalDays = handleScheduleDay(element.dateGo, element.dateBack);//dateBack-dateGo
          dataTransferAmerica.dateGo = element.dateGo;//dateGo
          dataTransferAmerica.dateStart = element.dateGo;
          //desc = note
          if (element.image) {
            if (element.image.data) {
              dataTransferAmerica.img = [handleLoadDataImageFromData(element.image.data)]
            }

          }
          dataTransferAmerica.desc = element.note;
          dataTransferAmerica.slots = element.adultSlot + element.childrenSlot;
          dataTransferAmerica.prices = element.adultPrice;
          data.push(dataTransferAmerica);

        }
        setTourAmerica((tourAmerica) =>
          ([...tourAmerica, data])

        );

      }




    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourEurope = async () => {
    try {
      setTourEurope([]);
      const dataApi = await handleGetTourByContinent("Chau Au");
      const data2 = [];
      for (let index = 0; index < dataApi.tour.length; index++) {
        const tourSouth = dataApi.tour[index];
        const data = [];

        for (let index = 0; index < tourSouth.length; index++) {
          const dataTransferAmerica = {
            id: 1,
            img: [
              require("../../assets/picture/pic1.jpg"),
              require("../../assets/picture/pic2.jpg")
            ],
            title: "Tour du lịch Đà Nẵng ",
            location: "Đà Nẵng",
            totalDays: 3,
            dateStart: "22/03/2023",
            dateGo: "",
            slots: 10,
            prices: 3000000,
            desc: "Du lịch Đà Nẵng - Huế - Thánh Địa La Vang - Động Phong Phong Nha từ Sài Gòn 2023. Du lịch Miền Trung - Tour Du lịch Đà Nẵng được thiên nhiên đặc biệt ưu đãi, mảnh đất miền Trung đẹp với nhiều dãy núi hùng vỹ xanh rì, những bờ biển cát trắng mịn thoai thoải và những dòng sông trong vắt thơ mộng. Không những vậy, trên con đường di sản miền Trung cùng Du Lịch Việt, du khách còn được thưởng ngoạn những di sản thế giới cuả Việt Nam đó là Phố cổ Hội An – nơi bến cảng một thời sầm uất nhất Đông Dương, quần thể di tích Cố Đô Huế với hệ thống đền đài lăng tẩm nguy nga tráng lệ và Động Phong Nha với nhiều hang động kì bí của tạo hóa.",
            foreign: false,
          };
          const element = tourSouth[index];
          dataTransferAmerica.id = element.id;
          dataTransferAmerica.title = element.nameTour;
          dataTransferAmerica.location = element.placeDest;
          dataTransferAmerica.totalDays = handleScheduleDay(element.dateGo, element.dateBack);//dateBack-dateGo
          dataTransferAmerica.dateStart = element.dateGo;//dateGo
          dataTransferAmerica.dateGo = element.dateGo;
          //desc = note
          if (element.image) {
            if (element.image.data) {
              dataTransferAmerica.img = [handleLoadDataImageFromData(element.image.data)]
            }

          }
          dataTransferAmerica.desc = element.note;
          dataTransferAmerica.slots = element.adultSlot + element.childrenSlot;
          dataTransferAmerica.prices = element.adultPrice;
          data.push(dataTransferAmerica);

        }
        setTourEurope((tourEurope) =>
          ([...tourEurope, data])

        );

      }




    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTourEurope();
    fetchTourAmerica();
    fetchTourAsia();
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

  return (
    <section className="tour-country section container">
      <Carousel
        destinations={tourAmerica.flat()}
        page={page}
        foreign={true}
        title="Tour Châu Mỹ"
        link="/tour-foreign/america"
      />
      <Carousel
        destinations={tourEurope.flat()}
        page={page}
        foreign={true}
        title="Tour Châu ÂU"
        link="/tour-foreign/europe"
      />
      <Carousel
        destinations={tourAsia.flat()}
        page={page}
        foreign={true}
        title="Tour Châu Á"
        link="/tour-foreign/asia"
      />
    </section>
  );
}
