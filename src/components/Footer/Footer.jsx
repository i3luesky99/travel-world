import React, { useEffect } from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo flex">
            <Link className="logo" to={"/"}>
              <p className="textLogo">LEVART</p>
            </Link>
          </div>

          <div className="social flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Thông tin</span>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/tour-country">Trong nước</a>
          </li>
          <li>
            <a href="/tour-foreign">Ngoài nước</a>
          </li>
          <li>
            <a href="/">Giới thiệu</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Các liên kết</span>
          <li>
            <a href="/">Địa điểm</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Khám phá</a>
          </li>
          <li>
            <a href="/">Chính sách</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Liên hệ</span>
          <span className="phone">0906 624 069</span>
          <span className="email">nghieu18101999@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
