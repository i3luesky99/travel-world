import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { handleLoginApi } from "../../services/loginService";
import localStorageService from "../../services/localStorageService";
export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    errMessage: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnChangeInput = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    try {
       const data = await handleLoginApi(loginInfo.email, loginInfo.password);
      const user = data.user;
      localStorageService.saveUser(data.accessToken);
      localStorage.setItem("roleId", user.roleId);
      localStorage.setItem("userId", user.id);
      setLoginInfo({ ...loginInfo, errMessage: "" });
      user.roleId === "R2"
        ? window.location.replace("/")
        : window.location.replace("/admin");
    } catch (error) {
      setLoginInfo({ ...loginInfo, errMessage: "Sai thông tin đăng nhập" });
    }
  };

  return (
    <div className="login">
      <img alt="" src={require("../../assets/picture/map.jpg")} />
      <div className="loginForm">
        <div className="card">
          <span className="loginTitle">Đăng nhập</span>
          <label>Email</label>
          <input
            type="text"
            className="loginInput"
            name="email"
            placeholder="Nhập email"
            onChange={(event) => {
              handleOnChangeInput(event);
            }}
            ref={emailRef}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            className="loginInput"
            name="password"
            placeholder="Nhập mật khẩu"
            onChange={(event) => {
              handleOnChangeInput(event);
            }}
            ref={passwordRef}
          />
          <span style={{ color: "red", marginTop: "15px" }}>
            {loginInfo.errMessage}
          </span>
          <div className="bottom">
            <button className="btn loginButton" onClick={handleLogin}>
              Đăng nhập
            </button>
            <button className="btn loginRegisterButton">
              <Link className="link" to="/register">
                Đăng ký
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
