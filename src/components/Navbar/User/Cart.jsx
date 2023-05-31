import React, { useEffect, useState } from "react";
import { iconCart } from "../../../theme/icon";
import BaseCart from "./BaseCart";
import { handleGetTourById } from "../../../services/tourService";
import { handleLoadDataImageFromData } from "../../../theme/functions";
import { handleGetBookTourByCustomerId } from "../../../services/bookTourService";
export default function Cart() {
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
  // const tempTour = [
  //   {
  //     id: 1,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     img: require("../../../assets/picture/pic4.jpg"),
  //     dateStart: "30/04/2022",
  //     totalSlot: 30,
  //     price: 4000000,
  //   },
  //   {
  //     id: 2,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     dateStart: "30/04/2022",
  //     img: require("../../../assets/picture/pic5.jpg"),
  //     totalSlot: 44,
  //     price: 4500000,
  //   },
  //   {
  //     id: 3,
  //     tourName:
  //       "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
  //     dateStart: "30/04/2022",
  //     img: require("../../../assets/picture/pic6.jpg"),
  //     totalSlot: 10,
  //     price: 5500000,
  //   },
  // ];

  const fetchFavoriteTour = async () => {
    try {
      setTours([]);
      const dataApi = await handleGetBookTourByCustomerId(localStorage.getItem("userId"));
      const bookTour = dataApi.bookTour;
      for (let index = 0; index < bookTour.length; index++) {

        let dataTransfer = {
          id: 1,
          tourName:
            "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
          img: require("../../../assets/picture/pic1.jpg"),
          dateStart: "30/04/2022",
          totalSlot: 30,
          price: 3000000,
          bookTourId: '',
          stateBookTour: '',
          adultSlot: 0,
          childSlot: 0,
          babySlot: 0,
          adultPrice: 0,
          childPrice: 0,
          babyPrice: 0
        };

        let element = bookTour[index];
        if (element.state !== 'S4') {
          dataTransfer.bookTourId = element.id;
          dataTransfer.stateBookTour = element.state;
          dataTransfer.adultSlot = element.adultSlot ? element.adultSlot : 0;
          dataTransfer.childSlot = element.childrenSlot ? element.childrenSlot : 0;
          dataTransfer.babySlot = element.babySlot ? element.babySlot : 0;
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
          dataTransfer.adultPrice = dataTourApi.tour.adultPrice;
          dataTransfer.childPrice = dataTourApi.tour.childPrice;
          dataTransfer.babyPrice = dataTourApi.tour.babyPrice;
          setTours((tours) =>
            ([...tours, dataTransfer])
          );

        }

      }

      // setTourCentral((tourCentral) =>
      //   ([...tourCentral, dataCentral])

      // );

      // setDestinations(dataTour);



    } catch (error) {
      console.log(error);
    }
  };

  const deleteTour = async (tourBookedID) => {
    // fetchFavoriteTour();
  };

  const props = {
    open: open,
    setOpen: setOpen,
    title: "Các tour đã đặt",
    tours: tours,
    deleteTour: deleteTour,

  };

  useEffect(() => {
    // fetchFavoriteTour();
  }, []);

  return (
    <div onFocus={() => { fetchFavoriteTour() }}>
      <img
        src={iconCart}
        alt=""
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={handleOpenCart}
      />
      <BaseCart {...props} />
    </div>
  );
}
