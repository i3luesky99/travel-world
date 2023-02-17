import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");
  const params = useLocation().pathname;
  const menuBars = [
    { id: 0, text: "Trong nước", link: "/tour-country" },
    { id: 1, text: "Ngoài nước", link: "/tour-foreign" },
    { id: 2, text: "Blog", link: "/blog" },
  ];

  const showNav = () => {
    setActive("navBar activeNavBar");
  };

  const closeNav = () => {
    setActive("navBar");
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem" onClick={scrollToTop}>
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
          <div className="closeNavBar" onClick={closeNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavBar" onClick={showNav}>
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
}
