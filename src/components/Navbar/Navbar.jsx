import React, { useState } from "react";
import "./navbar.css";
import { Logo } from "../../assets/svg/logo";
export default function Navbar() {
  const menuBars = [
    { id: 0, text: "Home" },
    { id: 1, text: "Room & Suites" },
    { id: 2, text: "Restaurant & Bar" },
    { id: 3, text: "Blog" },
  ];
  const [selected, setSelected] = useState(0);
  const onChangeSelected = () => {
    // setSelected(index);
    console.log("123");
  };

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          {/* <a href="#" className="logo">
            <h1>123123</h1>
          </a> */}
          <div onClick={onChangeSelected}>
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
}
