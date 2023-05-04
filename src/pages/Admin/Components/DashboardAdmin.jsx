import React from "react";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";

export default function DashboardAdmin(prop) {
  const { child } = prop;

  return (
    <div className="admin">
      <Sidebar />
      <HeaderDashboard />
      {/* <div>{child}</div> */}
    </div>
  );
}
