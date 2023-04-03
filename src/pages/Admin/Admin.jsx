import React from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="content">
        <Header />
        <Content />
      </div>
    </div>
  );
}
