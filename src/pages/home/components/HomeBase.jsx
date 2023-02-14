import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ClickAwayListener from "@mui/base/ClickAwayListener";
import * as locales from "react-date-range/dist/locale";
import moment from "moment";
import "moment/locale/vi";
import Calender from "./Calender";
import { Navbar } from "../../../components";
moment.locale("vi");

export default function HomeBase() {
  const [calendar, setCalendar] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const openCalendar = () => {
    setCalendar(!calendar);
  };

  const handleClickAway = () => {
    setCalendar(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <Navbar />
        <section className="home">
          <div className="secContainer container">
            <div className="homeText">
              <div className="logo" data-aos="fade-up">
                <p className="textLogo">LEVART</p>
              </div>

              <p
                data-aos="fade-up"
                data-aos-duration="2500"
                className="subTitle"
              >
                Travel to your favorite city with respectful of the environment
              </p>
              <Calender />

              <button
                data-aos="fade-up"
                data-aos-duration="3000"
                className="btn"
              >
                <a href="#">Explore Now</a>
              </button>
            </div>

            <div className="grid homeCard">
              <div data-aos-duration="2000" className="locationDiv">
                <label htmlFor="location">Location</label>
                <input type="text" placeholder="Dream Destination" />
              </div>

              <div data-aos-duration="3000" className="priceDiv">
                <label htmlFor="price">Price</label>
                <input type="text" placeholder="$149" />
              </div>

              <div data-aos-duration="2500" className="distDiv">
                <label htmlFor="distance">Date</label>
                <div className="datePicker" onClick={openCalendar}>
                  <p>
                    {`${moment(`${date[0].startDate}`).format("L")}`} -{` `}
                    {`${moment(`${date[0].endDate}`).format("L")}`}
                  </p>
                </div>

                <div className="date">
                  {calendar && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      locale={locales["vi"]}
                    />
                  )}
                </div>
              </div>
            </div>
            <button data-aos-duration="2000" className="btn">
              Search
            </button>
          </div>
        </section>
      </>
    </ClickAwayListener>
  );
}
