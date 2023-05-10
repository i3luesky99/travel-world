import React from "react";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";
import Content from "./Content";

export default function DashboardAdmin(prop) {
  const { child } = prop;

  return (
    <div className="admin">
      <Sidebar />
      <div className="right-content">
        <HeaderDashboard />
        <Content child={child} />
      </div>
    </div>
  );
}
