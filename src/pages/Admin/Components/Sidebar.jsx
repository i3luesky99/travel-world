import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const params = useLocation().pathname;
  const adminPanel = [
    {
      message: "Admin",
      link: "/admin",
      iconPath: require("../../../assets/picture/icon/home.png"),
      children: [
        {
          message: "Trang chủ",
          link: "/admin",
          iconPath: require("../../../assets/picture/icon/list.png"),
        },
      ],
    },
    {
      message: "Tour",
      link: "/admin/tours",
      iconPath: require("../../../assets/picture/icon/note.png"),
      children: [
        {
          message: "Danh sách tour",
          link: "/admin/tours",
          iconPath: require("../../../assets/picture/icon/list.png"),
        },
        {
          message: "Thêm tour",
          link: "/admin/tour/create",
          iconPath: require("../../../assets/picture/icon/plus.png"),
        },
      ],
    },
    {
      message: "Khách hàng",
      // link: "/admin/clients",
      iconPath: require("../../../assets/picture/icon/person.png"),
      children: [],
    },
    {
      message: "Cài đặt",
      // link: "/admin/setting",
      iconPath: require("../../../assets/picture/icon/setting.png"),
      children: [],
    },
    {
      message: "Thống kê",
      // link: "/admin/chart",
      iconPath: require("../../../assets/picture/icon/chart.png"),
      children: [],
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
            <Link
              to={panel.link}
              className={"title-message"}
              style={{ marginTop: index === 0 && "10px" }}
            >
              <img src={panel.iconPath} alt="" className="icon" />
              <div>{panel.message}</div>
            </Link>
            <div>
              {panel?.children?.map((child, index) => (
                <Link
                  to={child.link}
                  className={
                    params === child.link
                      ? "children-message active-link"
                      : "children-message"
                  }
                  key={`${index}-child`}
                >
                  <img src={child.iconPath} alt="" className="icon" />
                  <div>{child.message}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
