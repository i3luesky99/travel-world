import React, { useEffect, useState } from "react";
import { TotalTour } from "../../../components";
import { destinationNorth } from "../../../theme/data";
import { handleGetTourByRegion } from "../../../services/tourService";
import { handleLoadDataImageFromData } from "../../../theme/functions"
function TourNorth() {
  useEffect(() => {
    destinationData();
  }, []);
  const [destinations, setDestinations] = useState([]);

  const destinationData = async () => {
    const tourNorth = await fetchTour();
    const data = [];
    for (let index = 0; index < tourNorth.length; index++) {
      const dataTransfer = {
        id: 1,
        img: [
          require("../../../assets/picture/pic1.jpg"),
          require("../../../assets/picture/pic2.jpg")
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
      dataTransfer.id = element.id;
      dataTransfer.title = element.nameTour;
      dataTransfer.location = element.placeDest;
      dataTransfer.totalDays = 3;//dateBack-dateGo
      dataTransfer.dateStart = new Date().toLocaleString();//dateGo
      if (element.image) {
        dataTransfer.img = [handleLoadDataImageFromData(element.image.data)]
      }

      dataTransfer.dateGo = element.dateGo;//desc = note
      dataTransfer.desc = element.note;
      dataTransfer.slots = element.adultSlot + element.childrenSlot;
      dataTransfer.prices = element.adultPrice;
      data.push(dataTransfer);

    }
    setDestinations((destinations) =>
      ([...destinations, data])

    );

  }
  const fetchTour = async () => {
    try {
      const data = await handleGetTourByRegion("Mien Bac");
      const dataTour = data.tour;
      // setDestinations(dataTour);
      return dataTour;


    } catch (error) {
      return error
    }
  }



  return <TotalTour title="miền Bắc" destinations={destinations[0]} />;
}

export default TourNorth;
