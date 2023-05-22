import React, { useState, useEffect } from "react";
import { iconHeart } from "../../../theme/icon";
import BaseCart from "./BaseCart";

export default function FavoriteItem() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [tours, setTours] = useState([]);

  const handleOpenCart = () => {
    if (token) {
      setOpen(!open);
    } else {
      window.location.replace("/login");
    }
  };
  // Data mẫu get api thì xoá tempTour này đi
  const tempTour = [
    {
      id: 1,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      img: require("../../../assets/picture/pic1.jpg"),
      dateStart: "30/04/2022",
      totalSlot: 30,
      price: 3000000,
    },
    {
      id: 2,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      dateStart: "30/04/2022",
      img: require("../../../assets/picture/pic2.jpg"),
      totalSlot: 44,
      price: 4000000,
    },
    {
      id: 3,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      dateStart: "30/04/2022",
      img: require("../../../assets/picture/pic3.jpg"),
      totalSlot: 10,
      price: 5500000,
    },
  ];

  const fetchFavoriteTour = async () => {
    // const data =
    // setTour(data)
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
        dataTransferCentral.totalDays = handleScheduleDay(element.dateGo, element.dateBack);

        //dateBack-dateGo
        dataTransferCentral.dateStart = element.dateGo;//dateGo
        dataTransferCentral.dateGo = element.dateGo;
        //desc = note
        if (element.image) {
          if (element.image.data) {
            dataTransferCentral.img = [handleLoadDataImageFromData(element.image.data)];
          }
        }
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
    setTours(tempTour);
  };
  const deleteTour = async (tourFavoriteID) => {
    fetchFavoriteTour();
  };

  useEffect(() => {
    fetchFavoriteTour();
  }, []);

  const props = {
    open: open,
    setOpen: setOpen,
    title: "Các tour yêu thích",
    heart: true,
    deleteTour: deleteTour,
    tours: tours,
  };
  return (
    <div>
      <img
        src={iconHeart}
        alt=""
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={handleOpenCart}
      />
      <BaseCart {...props} />
    </div>
  );
}
