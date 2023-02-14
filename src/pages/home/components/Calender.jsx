import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "aos/dist/aos.css";
import { RxCalendar } from "react-icons/rx";
import { CiTempHigh } from "react-icons/ci";
import { FaCity } from "react-icons/fa";

import "moment/locale/vi";
import Time from "./Time";
moment.locale("vi");

export default function Calender() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const apiKeyWeather = "83b9058c4fc72a6cf6f5bceaac657d6d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKeyWeather}`;
  const [data, setData] = useState();
  let day = new Date().getDay();
  switch (new Date().getDay()) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      break;
  }
  const fetchWeatherData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const temp = data?.main?.temp ? (data?.main?.temp - 273.15).toFixed(0) : 0;
  const city = data?.name ? data?.name : "Ho Chi Minh City";
  const date = `${day}, ${moment().format("Do/MM/YY")}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    long && fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);

  return (
    <div className="calendar flex " data-aos="fade-up">
      <div className="boxTop flex">
        <Time />
      </div>
      <div className="top flex">
        <div className="boxNumber flex">
          <CiTempHigh className="icon" />
          <div className="text flex">
            {temp}
            <p className="deg">&deg;C</p>
          </div>
        </div>
        <div className="boxNumber flex">
          <RxCalendar className="icon" />
          <div className="text flex">{date}</div>
        </div>
        <div className="boxNumber flex">
          <FaCity className="icon" />
          <div className="text flex">{city}</div>
        </div>
      </div>
    </div>
  );
}
