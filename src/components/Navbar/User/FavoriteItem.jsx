import React, { useState } from "react";
import { iconHeart } from "../../../theme/icon";
import BaseCart from "./BaseCart";

export default function FavoriteItem() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const handleOpenCart = () => {
    if (token) {
      setOpen(!open);
    } else {
      window.location.replace("/login");
    }
  };
  const props = {
    open: open,
    setOpen: setOpen,
    title: "Các tour yêu thích",
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
