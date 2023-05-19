import { ClickAwayListener } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { iconPersonWhite } from "../../../theme/icon";

export default function User() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const name = "Hieu Nguyen";
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = useCallback(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roleId");
    window.location.replace("/");
  }, []);

  const handleToLogin = () => {
    window.location.replace("/login");
  };
  const handleToRegister = () => {
    window.location.replace("/register");
  };
  useEffect(() => {}, [handleLogout]);
  return (
    <div style={{ position: "relative" }} className="navItem">
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        {token && <div className="name-space">Hi</div>}
        <img
          src={iconPersonWhite}
          alt=""
          className="icon"
          style={{ width: "25px", height: "25" }}
        />
      </div>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          {!token ? (
            <div className="tab-button">
              <div className="log-in" onClick={handleToLogin}>
                ĐĂNG NHẬP
              </div>
              <div className="sign-up" onClick={handleToRegister}>
                ĐĂNG KÝ
              </div>
            </div>
          ) : (
            <div className="tab-button">
              <div className="hello-name">
                <div>Xin chào {name}</div>
              </div>
              <div
                style={{
                  borderBottom: " 1px solid #cacaca",
                }}
              ></div>
              <div className="log-out" onClick={handleLogout}>
                Đăng xuất
              </div>
            </div>
          )}
        </ClickAwayListener>
      )}
    </div>
  );
}
