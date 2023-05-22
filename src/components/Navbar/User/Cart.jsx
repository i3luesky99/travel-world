import React, { useEffect, useState } from "react";
import { iconCart } from "../../../theme/icon";
import BaseCart from "./BaseCart";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [tours, setTours] = useState([]);

  const handleOpenCart = () => {
    if (!token) {
      setOpen(!open);
    } else {
      window.location.replace("/login");
    }
  };
  const tempTour = [
    {
      id: 1,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      img: require("../../../assets/picture/pic4.jpg"),
      dateStart: "30/04/2022",
      totalSlot: 30,
      price: 4000000,
    },
    {
      id: 2,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      dateStart: "30/04/2022",
      img: require("../../../assets/picture/pic5.jpg"),
      totalSlot: 44,
      price: 4500000,
    },
    {
      id: 3,
      tourName:
        "Du lịch mùa Đông Du lịch Nhật Bản Tokyo - Hakone - Fuji - Odaiba từ Sài Gòn 2023",
      dateStart: "30/04/2022",
      img: require("../../../assets/picture/pic6.jpg"),
      totalSlot: 10,
      price: 5500000,
    },
  ];

  const fetchFavoriteTour = async () => {
    // const data =
    // setTour(data)
    setTours(tempTour);
  };

  const deleteTour = async (tourBookedID) => {
    fetchFavoriteTour();
  };

  const props = {
    open: open,
    setOpen: setOpen,
    title: "Các tour đã đặt",
    tours: tours,
    deleteTour: deleteTour,
  };

  useEffect(() => {
    fetchFavoriteTour();
  }, []);

  return (
    <div>
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
