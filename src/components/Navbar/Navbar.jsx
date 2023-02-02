import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const menuBars = [
  //   { id: 0, text: "Home" },
  //   { id: 1, text: "Room & Suites" },
  //   { id: 2, text: "Restaurant & Bar" },
  //   { id: 3, text: "Blog" },
  // ];
  // const [selected, setSelected] = useState(0);
  // const onChangeSelected = () => {
  //   // setSelected(index);
  // };
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");
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

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <a href="#" className="logo">
          <img src={require("../../assets/picture/logo.png")} alt="" />
        </a>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Product
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
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
