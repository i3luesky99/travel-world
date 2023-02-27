import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModel from "../../hook/useModel";
import DropList from "../DropDown/DropDown";

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
        { name: "Châu Âu", link: "/tour-country/europe" },
        { name: "Châu Mỹ", link: "/tour-country/america" },
        { name: "Châu Á", link: "/tour-country/asia" },
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

            {/* <DropList /> */}
            {/* {menuBars.map((menu, index) => (
              <li className="navItem" key={`${index}-menuBar`}>
                <Link
                  to={menu.link}
                  className={params === menu.link ? "onSelected" : "navLink"}
                >
                  {menu.text}
                </Link>
              </li>
            ))} */}

            <li className="navItem">
              <Link
                to="/contact"
                className={params === "/contact" ? "onSelected" : "navLink"}
              >
                Liên hệ
              </Link>
            </li>

            <div className="headerBtn flex">
              <button className="btn loginBtn">
                <Link className="link" to="/login">
                  Đăng nhập
                </Link>
              </button>

              <button className="btn">
                <Link className="link" to="/register">
                  Đăng ký
                </Link>
              </button>
            </div>
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
