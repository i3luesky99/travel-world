import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModel from "../../hook/useModel";
import DropList from "../DropDown/DropDown";
import User from "./User/User";
import Cart from "./User/Cart";
import FavoriteItem from "./User/FavoriteItem";

export default function Navbar() {
  const [transparent, setTransparent] = useState("header");
  const { isOpen: isOpenNavbar, openModel: openNavbar } = useModel("navBar");
  const params = useLocation().pathname;
  const tours = [
    {
      id: 0,
      text: "Trong nước",
      link: "/tour-country",
      regions: [
        { name: "Miền Nam", link: "/tour-country/southern" },
        { name: "Miền Trung", link: "/tour-country/central" },
        { name: "Miền Bắc", link: "/tour-country/north" },
      ],
    },
    {
      id: 1,
      text: "Ngoài nước",
      link: "/tour-foreign",
      regions: [
        { name: "Châu Âu", link: "/tour-foreign/europe" },
        { name: "Châu Mỹ", link: "/tour-foreign/america" },
        { name: "Châu Á", link: "/tour-foreign/asia" },
      ],
    },
  ];

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className={isOpenNavbar}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link
                to="/"
                className={params === "/" ? "onSelected" : "navLink"}
              >
                Trang chủ
              </Link>
            </li>
            <DropList tour={tours[0]} params={params} />
            <DropList tour={tours[1]} params={params} />
            <li className="navItem">
              <Link
                to="/introduce"
                className={params === "/introduce" ? "onSelected" : "navLink"}
              >
                Giới thiệu
              </Link>
            </li>
            <User />
            <li className="navItem">
              <FavoriteItem />
            </li>
            {/* <li className="navItem">
              <Cart />
            </li> */}
          </ul>
          <div className="closeNavBar" onClick={() => openNavbar("navBar")}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavBar">
          <TbGridDots
            className="icon"
            onClick={() => openNavbar("navBar activeNavBar")}
          />
        </div>
      </div>
    </section>
  );
}
