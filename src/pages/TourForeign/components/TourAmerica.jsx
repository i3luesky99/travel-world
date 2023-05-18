import React, { useEffect, useState } from "react";
import { TotalTour } from "../../../components";
import { destinationAmerica } from "../../../theme/data";
import { handleGetTourByContinent } from "../../../services/tourService";
function TourAmerica() {
  const destinations = destinationAmerica;
  const [tourAmerica, setTourAmerica] = useState([]);
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
          const element = tourSouth[index];
          dataTransferAmerica.id = element.id;
          dataTransferAmerica.title = element.nameTour;
          dataTransferAmerica.location = element.placeDest;
          dataTransferAmerica.totalDays = 4;//dateBack-dateGo
          dataTransferAmerica.dateStart = element.dateGo;//dateGo
          dataTransferAmerica.dateGo = element.dateGo;
          //desc = note
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
  useEffect(() => { fetchTourAmerica(); }, [])
  return (
    <div>
      <TotalTour title="Châu Mỹ" destinations={tourAmerica.flat()} foreign={true} />
    </div>
  );
}

export default TourAmerica;
