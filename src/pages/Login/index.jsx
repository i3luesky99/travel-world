// import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("http://localhost:3001/api/auths/login", {
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   });
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    //   res.data && window.location.replace("/");
    // } catch (error) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    // }
  };

  return (
    <div className="login">
      <img
        alt=""
        src={require("../../assets/picture/map.jpg")}
        // style={{ width: "100px", height: "100px" }}
      />
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="card">
          <span className="loginTitle">Đăng nhập</span>
          <label>Email</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your email..."
            ref={emailRef}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <div className="bottom">
            <button className="btn loginButton" type="submit">
              Đăng nhập
            </button>
            <button className="btn loginRegisterButton">
              <Link className="link" to="/register">
                Đăng ký
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
