import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

export default function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer ">
        <div className="secHeader flex ">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specular, come see the best of
              the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img
                src={require("../../assets/picture/pic3.jpg")}
                alt="Img title"
              />

              <div className="overplayInfo">
                <h3>Some text</h3>
                <p>Lorem ipsum dolor sit amet .</p>

                <BsArrowRightShort className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>

              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
