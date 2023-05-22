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
