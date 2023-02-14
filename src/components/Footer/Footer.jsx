import React, { useEffect } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-right" data-aos-duration={2000} className="logoDiv">
          <div className="footerLogo flex">
            <div className="logo ">
              <p className="textLogo">LEVART</p>
            </div>
          </div>

          <div className="social flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration={2000}
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration={2000}
          className="footerLinks"
        >
          <span className="linkTitle">Helpful links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration={2000}
          className="footerLinks"
        >
          <span className="linkTitle">Contact</span>
          <span className="phone">0906 624 069</span>
          <span className="email">nghieu18101999@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
