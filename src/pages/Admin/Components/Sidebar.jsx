import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const adminPanel = [
    {
      message: "Admin",
      to: "/admin",
      iconPath: "",
    },
    {
      message: "Tour",
      to: "/admin/tour",
      iconPath: "",
      children: [
        { message: "Tạo tour", to: "/admin/tour/create", iconPath: "" },
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
          <div key={`${index}-panel`}>
            <div className="title-menu">{panel.message}</div>
            <div>
              {panel?.children?.map((child, index) => (
                <div className="child-menu" key={`${index}-child`}>
                  {child.message}
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
