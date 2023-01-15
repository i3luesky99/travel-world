import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import { useState } from "react";

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
  //   console.log("123");
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
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              DOT
            </h1>
          </a>
        </div>
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
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">Sign Up</a>
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
