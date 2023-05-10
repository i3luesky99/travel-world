// import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { handleLoginApi } from "../../services/loginService";
import { color } from "@mui/system";
import localStorageService from "../../services/localStorageService";
export default function Login() {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    errMessage: ''
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnChangeInput = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value
    })


  }
  const handleLogin = async (req, res) => {
    setLoginInfo({ ...loginInfo, errMessage: '' })
    try {
      let data = await handleLoginApi(loginInfo.email, loginInfo.password);
      if (data && data.errCode !== 0) {
        setLoginInfo({ ...loginInfo, errMessage: data.errMessage })
      }
      if (data && data.errCode === 0) {
        // alert('Đăng nhập thành công');
        // Login in successfully
        localStorageService.saveUser(data.accessToken);
        window.location.replace("/");

      }

    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.data) {
          setLoginInfo(...loginInfo, {
            errMessage: error.response.data.errMessage
          })
        }
      }
    }
  }
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
            name="email"
            placeholder="Enter your email..."
            onChange={(event) => { handleOnChangeInput(event) }}
            ref={emailRef}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            className="loginInput"
            name="password"
            placeholder="Enter your password..."
            onChange={(event) => { handleOnChangeInput(event) }}
            ref={passwordRef}
          />
          <span style={{ color: "red", marginTop: "15px" }}>{loginInfo.errMessage}</span>
          <div className="bottom">
            <button className="btn loginButton"
              type="submit"
              onClick={() => { handleLogin() }}
            >
              Đăng nhập
            </button>
            <button className="btn loginRegisterButton">
              <Link className="link" to="/register">
                Đăng ký
              </Link>
            </button>
          </div>
        </div>
      </form >
    </div >
  );
}
