import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModel from "../../hook/useModel";

export default function Navbar() {
  const [transparent, setTransparent] = useState("header");
  const { isOpen: isOpenNavbar, openModel: openNavbar } = useModel("navBar");

  const params = useLocation().pathname;
  const menuBars = [
    { id: 0, text: "Trong nước", link: "/tour-country" },
    { id: 1, text: "Ngoài nước", link: "/tour-foreign" },
    { id: 2, text: "Blog", link: "/blog" },
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

            {menuBars.map((menu, index) => (
              <li className="navItem" key={`${index}-menuBar`}>
                <Link
                  to={menu.link}
                  className={params === menu.link ? "onSelected" : "navLink"}
                >
                  {menu.text}
                </Link>
              </li>
            ))}

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
