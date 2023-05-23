import React, { useState, useEffect } from "react";
import { iconHeart } from "../../../theme/icon";
import BaseCart from "./BaseCart";
import { handleGetFavoriteTour } from "../../../services/favoriteTourServise";
import { handleGetTourById } from "../../../services/tourService";
import { handleLoadDataImageFromData } from "../../../theme/functions";
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
  // const tempTour = [
  //   {
  //     id: 1,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     img: require("../../../assets/picture/pic1.jpg"),
  //     dateStart: "30/04/2022",
  //     totalSlot: 30,
  //     price: 3000000,
  //   },
  //   {
  //     id: 2,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     dateStart: "30/04/2022",
  //     img: require("../../../assets/picture/pic2.jpg"),
  //     totalSlot: 44,
  //     price: 4000000,
  //   },
  //   {
  //     id: 3,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     dateStart: "30/04/2022",
  //     img: require("../../../assets/picture/pic3.jpg"),
  //     totalSlot: 10,
  //     price: 5500000,
  //   },
  // ];

  const fetchFavoriteTour = async () => {

    try {
      setTours([]);
      const dataApi = await handleGetFavoriteTour(localStorage.getItem("userId"));
      const favoriteTour = dataApi.favoriteTour;
      for (let index = 0; index < favoriteTour.length; index++) {
        let dataTransfer = {
          id: 1,
          tourName:
            "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
          img: require("../../../assets/picture/pic1.jpg"),
          dateStart: "30/04/2022",
          totalSlot: 30,
          price: 3000000,
        };
        let element = favoriteTour[index];
        let dataTourApi = await handleGetTourById(element.tourId);
        dataTransfer.id = dataTourApi.tour.id;
        dataTransfer.tourName = dataTourApi.tour.nameTour;
        if (dataTourApi.tour.image) {
          if (dataTourApi.tour.image.data) {
            dataTransfer.img = handleLoadDataImageFromData(dataTourApi.tour.image.data);
          }
        }
        dataTransfer.dateStart = dataTourApi.tour.dateGo;
        dataTransfer.totalSlot = dataTourApi.tour.adultSlot + dataTourApi.tour.childrenSlot;
        dataTransfer.price = dataTourApi.tour.adultPrice;
        setTours((tours) =>
          ([...tours, dataTransfer])
        );

      }

      // setTourCentral((tourCentral) =>
      //   ([...tourCentral, dataCentral])

      // );

      // setDestinations(dataTour);



    } catch (error) {
      console.log(error);
    }
    //setTours(tempTour);
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
    <div onFocus={() => { fetchFavoriteTour() }}>
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
