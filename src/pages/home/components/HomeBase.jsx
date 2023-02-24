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
import useModel from "../../../hook/useModel";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

moment.locale("vi");

export default function HomeBase(props) {
  const searchSection = useRef();
  const [calendar, setCalendar] = useState(false);
  const { isOpen: isOpenSearchBar, openModel: openSearchBar } =
    useModel("grid homeCard");
  const { isOpen: isOpenFloating, openModel: openFloating } = useModel(false);

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

  const onScrollToSearchBar = () => {
    openSearchBar("grid homeCard active");
    window.scrollTo({
      top: searchSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onCloseSearchBar = () => {
    openSearchBar("grid homeCard");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <ClickAwayListener onClickAway={handleClickAway}>
        <section className="home">
          <div className="secContainer container flex">
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
                <p>Khám phá</p>
              </button>
            </div>

            <div className={isOpenSearchBar}>
              <div
                data-aos-duration="2000"
                data-aos="fade-right"
                className="locationDiv"
                ref={searchSection}
              >
                <label htmlFor="location">Địa điểm</label>
                <input type="text" placeholder="Điểm đến mong ước" />
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="priceDiv"
              >
                <label htmlFor="price">Giá</label>
                <input type="text" placeholder="1.000.000₫" />
              </div>

              <div className="distDiv">
                <label htmlFor="distance">Ngày</label>
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
              <button className="btn">Tìm kiếm</button>

              <div className="closeSearchBar" onClick={onCloseSearchBar}>
                <AiFillCloseCircle className="icon" />
              </div>
            </div>
          </div>
          <div className="floatingButton flex">
            {isOpenFloating && (
              <div className="activeFloating flex">
                <Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
                  <Fab
                    size="small"
                    sx={{
                      marginTop: "10px",
                      background: "#e08d21",
                      "&:hover": {
                        background: "#cb5e0b",
                      },
                    }}
                    aria-label="add"
                  >
                    <FiSearch className="icon" onClick={onScrollToSearchBar} />
                  </Fab>
                </Zoom>
                <Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
                  <Fab
                    size="small"
                    sx={{
                      marginTop: "10px",
                      background: "#e08d21",
                      "&:hover": {
                        background: "#cb5e0b",
                      },
                    }}
                    aria-label="add"
                  >
                    <IoIosArrowUp className="icon" onClick={scrollToTop} />
                  </Fab>
                </Zoom>
              </div>
            )}

            <Zoom
              in={true}
              timeout={{ enter: 500, exit: 500 }}
              onClick={() => openFloating(!isOpenFloating)}
            >
              <Fab
                size="medium"
                sx={{
                  marginTop: "10px",
                  background: "#f67009",
                  "&:hover": {
                    background: "#cb5e0b",
                  },
                }}
                aria-label="add"
              >
                <AiOutlinePlus className="icon" />
              </Fab>
            </Zoom>
          </div>
        </section>
      </ClickAwayListener>
    </>
  );
}
