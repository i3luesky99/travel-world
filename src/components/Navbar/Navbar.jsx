import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSelected, setIsSelected] = useState("Trang chủ");
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");

  const menuBars = [
    { id: 0, text: "Trong nước", link: "/" },
    { id: 1, text: "Ngoài nước", link: "/" },
    { id: 2, text: "Blog", link: "/" },
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

  const scrollToBottom = (string) => {
    onChangeSelected(string);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = (string) => {
    onChangeSelected(string);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onChangeSelected = (string) => {
    setIsSelected(string);
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem" onClick={() => scrollToTop("Trang chủ")}>
              <Link
                to="/"
                className={
                  isSelected === "Trang chủ" ? "onSelected" : "navLink"
                }
              >
                Trang chủ
              </Link>
            </li>

            {menuBars.map((menu, index) => (
              <li className="navItem" key={`${index}-menuBar`}>
                <Link
                  to="/"
                  onClick={() => onChangeSelected(menu.text)}
                  className={
                    isSelected === menu.text ? "onSelected" : "navLink"
                  }
                >
                  {menu.text}
                </Link>
              </li>
            ))}

            <li className="navItem">
              <Link
                to="/"
                onClick={() => scrollToBottom("Liên hệ")}
                className={isSelected === "Liên hệ" ? "onSelected" : "navLink"}
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
