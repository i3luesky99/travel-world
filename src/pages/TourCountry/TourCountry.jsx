import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { handleGetTourByRegion } from "../../services/tourService";
import "swiper/css/navigation";
import Carousel from "../../components/Carousel/Carousel";
import {
  destinationCentral,
  destinationNorth,
  destinationSouthern,
} from "../../theme/data";

export default function TourCountry() {
  useEffect(() => {
    fetchTourNorth();
    fetchTourSouthern();
    fetchTourCentral();
  }, []);
  const [tourNorth, setTourNorth] = useState([]);
  const [tourCentral, setTourCentral] = useState([]);
  const [page, setPage] = useState(3);
  const [tourSouthern, setTourSouthern] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  const fetchTourSouthern = async () => {
    try {
      const dataApi = await handleGetTourByRegion("Mien Nam");
      const tourSouth = dataApi.tour;
      const data = [];

      for (let index = 0; index < tourSouth.length; index++) {
        const dataTransferSouth = {
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
        dataTransferSouth.id = element.id;
        dataTransferSouth.title = element.nameTour;
        dataTransferSouth.location = element.placeDest;
        dataTransferSouth.totalDays = 3;//dateBack-dateGo
        dataTransferSouth.dateStart = element.dateGo;//dateGo
        //desc = note
        dataTransferSouth.desc = element.note;
        dataTransferSouth.slots = element.adultSlot + element.childrenSlot;
        dataTransferSouth.prices = element.adultPrice;
        await data.push(dataTransferSouth);

      }
      //console.log(data);
      setTourSouthern((tourSouthern) =>
        ([...tourSouthern, data])

      );

      // setDestinations(dataTour);



    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourNorth = async () => {
    try {
      const dataApi = await handleGetTourByRegion("Mien Bac");
      const tourNorth = dataApi.tour;
      const data = [];

      for (let index = 0; index < tourNorth.length; index++) {
        const dataTransferNorth = {
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
        const element = tourNorth[index];
        dataTransferNorth.id = element.id;
        dataTransferNorth.title = element.nameTour;
        dataTransferNorth.location = element.placeDest;
        dataTransferNorth.totalDays = 3;//dateBack-dateGo
        dataTransferNorth.dateStart = element.dateGo;//dateGo
        dataTransferNorth.dateGo = element.dateGo;
        //desc = note
        dataTransferNorth.desc = element.note;
        dataTransferNorth.slots = element.adultSlot + element.childrenSlot;
        dataTransferNorth.prices = element.adultPrice;
        await data.push(dataTransferNorth);

      }
      //console.log(data);
      setTourNorth((tourNorth) =>
        ([...tourNorth, data])

      );

      // setDestinations(dataTour);

    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourCentral = async () => {
    try {
      const dataApi = await handleGetTourByRegion("Mien Trung");

      let tourCentral = dataApi.tour;
      let dataCentral = [];


      for (let index = 0; index < tourCentral.length; index++) {
        let dataTransferCentral = {
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
        let element = tourCentral[index];
        dataTransferCentral.id = element.id;
        dataTransferCentral.title = element.nameTour;
        dataTransferCentral.location = element.placeDest;
        dataTransferCentral.totalDays = 3;//dateBack-dateGo
        dataTransferCentral.dateStart = element.dateGo;//dateGo
        dataTransferCentral.dateGo = element.dateGo;
        //desc = note
        dataTransferCentral.desc = element.note;
        dataTransferCentral.slots = element.adultSlot + element.childrenSlot;
        dataTransferCentral.prices = element.adultPrice;

        dataCentral.push(dataTransferCentral);

      }

      setTourCentral((tourCentral) =>
        ([...tourCentral, dataCentral])

      );

      // setDestinations(dataTour);



    } catch (error) {
      console.log(error);
    }
  }

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
  return (
    <section className="tour-country section container">
      <Carousel
        destinations={tourSouthern[0]}
        page={page}
        title="Tour miền Nam"
        link="/tour-country/southern"
      />
      <Carousel
        destinations={tourCentral[0]}
        page={page}
        title="Tour miền Trung"
        link="/tour-country/central"
      />
      <Carousel
        destinations={tourNorth[0]}
        page={page}
        title="Tour miền Bắc"
        link="/tour-country/north"
      />
    </section>
  );
}
