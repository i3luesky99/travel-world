import React, { useCallback, useEffect } from "react";

export default function HeaderDashboard() {
  const handleLogout = useCallback(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roleId");
    window.location.replace("/");
  }, []);

  useEffect(() => {}, [handleLogout]);

  return (
    <div className="header" onClick={handleLogout}>
      <div>Đăng xuất</div>
      <img src={require("../../../assets/picture/icon/logout.png")} alt="" />
    </div>
  );
}
