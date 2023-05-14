import React, { useCallback, useEffect, useState } from "react";
import { iconLogoutWhite, iconPersonWhite } from "../../../theme/icon";

export default function User() {
  const color = ` linear-gradient(
        90deg,
        rgb(209, 131, 131) 0%,
        rgb(223 204 70) 50%,
        #e08d21 100%
      )`;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLogout = useCallback(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roleId");
    window.location.replace("/");
  }, []);

  useEffect(() => {}, [handleLogout]);
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "45px",
          width: "45px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: color,
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "-25px",
          right: "-60px",
        }}
        onClick={handleOpen}
      >
        <img
          src={iconPersonWhite}
          alt=""
          className="icon"
          style={{ width: "25px", height: "25" }}
        />
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            color: "white",
            background: "#f67009",
            height: "50px",
            width: "200px",
            left: "-150px",
            top: "30px",
            borderRadius: "7px",
          }}
        >
          <div
            style={{ display: "flex", padding: "10px", cursor: "pointer" }}
            onClick={handleLogout}
          >
            <img
              src={iconLogoutWhite}
              alt=""
              style={{ width: "25px", height: "25", marginRight: "10px" }}
            />
            Đăng xuất
          </div>
        </div>
      )}
    </div>
  );
}
