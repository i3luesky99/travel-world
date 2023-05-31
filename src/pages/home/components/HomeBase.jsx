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
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFunctionFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Moment from "moment";
import { handleGetTourByPlaceDestAndPrice } from "../../../services/tourService";
import { useDispatch } from "react-redux";
import { setTours } from "../../../redux/Tours/tourAction";
moment.locale("vi");

export default function HomeBase(props) {
  const searchSection = useRef();
  const [tourSearch, setTourSearch] = useState([]);
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [calendar, setCalendar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen: isOpenSearchBar, openModel: openSearchBar } = useModel(false);
  const { isOpen: isOpenFloating, openModel: openFloating } = useModel(false);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSearchTour = async () => {
    let dataApi = await handleGetTourByPlaceDestAndPrice(location, price);
    let dataTourApi = dataApi.tour;
    const startDate = `${moment(`${date[0].startDate}`).format("L")}`;
    const endDate = `${moment(`${date[0].endDate}`).format("L")}`;
    const dateGoSelect = Moment(startDate, "DD/MM/YYYY");
    const dateBackSelect = Moment(endDate, "DD/MM/YYYY");

    const filteredArray = dataTourApi.filter((element) => {
      const dateGoApi = moment(element.dateGo, "DD/MM/YYYY");
      const dateBackApi = moment(element.dateBack, "DD/MM/YYYY");

      if (dateGoSelect.isSame(dateBackSelect)) {
        return dateGoSelect.isSameOrBefore(dateGoApi);
      } else {
        return (
          dateGoSelect.isSameOrBefore(dateGoApi) &&
          dateBackApi.isSameOrBefore(dateBackSelect)
        );
      }
    });
    navigate("/search/tours");
    dispatch(setTours(filteredArray));
    setTourSearch(filteredArray);
  };
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
  const handleInputChange = (event) => {
    if (event.target.name === "location") {
      setLocation(event.target.value);
    } else {
      if (event.target.name === "price") {
        setPrice(event.target.value);
      }
    }
  };
  const handleClickAway = () => {
    setCalendar(false);
  };

  const onScrollToSearchBar = () => {
    openSearchBar(true);
    window.scrollTo({
      top: searchSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onCloseSearchBar = () => {
    openSearchBar(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleToAdmin = () => {
    window.location.replace("/admin/tour/create");
  };
  return (
    <>
      <Navbar />
      <ClickAwayListener onClickAway={handleClickAway}>
        <section className="home">
          <div className="secContainer container flex">
            <div className="homeText flex">
              <Link to={"/"} className="logo" data-aos="fade-up">
                <p className="textLogo">LEVART</p>
              </Link>

              <p
                data-aos="fade-up"
                data-aos-duration="2500"
                className="subTitle"
              >
                Mang bạn đến những trải nghiệm khó quên ở những nơi tuyệt đẹp
              </p>
              <Calender />

              <button
                data-aos="fade-up"
                data-aos-duration="3000"
                className="btn flex"
                onClick={() => openSearchBar(!isOpenSearchBar)}
              >
                <FiSearch
                  className="iconSearch"
                  onClick={onScrollToSearchBar}
                />
                <p>TÌM TOUR</p>
              </button>
            </div>
            {isOpenSearchBar && (
              <div className={"grid homeCard active"}>
                <div
                  data-aos-duration="2000"
                  data-aos="fade-right"
                  className="locationDiv"
                  ref={searchSection}
                >
                  <label htmlFor="location">Địa điểm</label>
                  <input
                    type="text"
                    placeholder="Điểm đến mong ước"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                  />
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="priceDiv"
                >
                  <label htmlFor="price">Giá</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="1.000.000₫"
                    value={price}
                    onChange={handleInputChange}
                  />
                </div>

                <div
                  className="distDiv"
                  data-aos="fade-right"
                  data-aos-duration="2500"
                >
                  <label htmlFor="distance">Ngày đi</label>
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
                <button
                  className="btn"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  onClick={handleSearchTour}
                >
                  Tìm kiếm
                </button>

                <div className="closeSearchBar" onClick={onCloseSearchBar}>
                  <AiFillCloseCircle className="icon" />
                </div>
              </div>
            )}
          </div>
          <div className="floatingButton flex">
            {isOpenFloating && (
              <div className="activeFloating flex">
                {token && (
                  <Zoom
                    in={true}
                    timeout={{ enter: 500, exit: 500 }}
                    onClick={handleToAdmin}
                  >
                    <Fab
                      size="small"
                      sx={{
                        marginTop: "10px",
                        background: "#e08d21",
                        "&:hover": {
                          background: "#cb5e0b",
                        },
                        borderRadius: "5px",
                        width: "100px",
                        position: "absolute",
                        top: "-50px",
                        right: "0px",
                      }}
                      aria-label="add"
                    >
                      <AiOutlinePlusCircle
                        onClick={onScrollToSearchBar}
                        style={{ fontSize: "20px", color: "white" }}
                      />
                      <p
                        style={{
                          fontSize: "11px",
                          textTransform: "capitalize",
                          color: "white",
                          marginLeft: "3px",
                        }}
                      >
                        Thêm Tour
                      </p>
                    </Fab>
                  </Zoom>
                )}
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
                <RiFunctionFill className="icon" />
              </Fab>
            </Zoom>
          </div>
        </section>
      </ClickAwayListener>
    </>
  );
}
