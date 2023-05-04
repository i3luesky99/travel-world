import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const params = useLocation().pathname;
  const adminPanel = [
    {
      message: "Admin",
      link: "/admin",
      iconPath: require("../../../assets/picture/icon/home.png"),
    },
    {
      message: "Tour",
      link: "/admin/tour",
      iconPath: require("../../../assets/picture/icon/note.png"),
      children: [
        {
          message: "Tạo tour mới",
          to: "/admin/tour/create",
          iconPath: require("../../../assets/picture/icon/pencil.png"),
        },
      ],
    },
    {
      message: "Khách hàng",
      link: "/admin/clients",
      iconPath: require("../../../assets/picture/icon/person.png"),
      children: [
        // { message: "Tạo tour", to: "/admin/tour/create", iconPath: "" },
        // { message: "Xóa tour", to: "/admin/delete", iconPath: "" },
      ],
    },
    {
      message: "Cài đặt",
      link: "/admin/setting",
      iconPath: require("../../../assets/picture/icon/setting.png"),
      children: [
        // { message: "Tạo tour", to: "/admin/tour/create", iconPath: "" },
        // { message: "Xóa tour", to: "/admin/delete", iconPath: "" },
      ],
    },
    {
      message: "Thống kê",
      link: "/admin/chart",
      iconPath: require("../../../assets/picture/icon/chart.png"),
      children: [
        // { message: "Tạo tour", to: "/admin/tour/create", iconPath: "" },
        // { message: "Xóa tour", to: "/admin/delete", iconPath: "" },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <Link to={"/admin"}>
          <p>LEVART</p>
        </Link>
      </div>
      <div className="base-menu">
        {adminPanel.map((panel, index) => (
          <div key={`${index}-panel`} className="title-menu">
            <div
              className={
                params === panel.link
                  ? "title-message active-link"
                  : "title-message"
              }
              style={{ marginTop: index === 0 && "30px" }}
            >
              <img src={panel.iconPath} alt="" className="icon" />
              <Link to={panel.link}>{panel.message}</Link>
            </div>
            <div>
              {panel?.children?.map((child, index) => (
                <div className="children-message" key={`${index}-child`}>
                  <img src={child.iconPath} alt="" className="icon" />
                  <div>{child.message}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
