import React, { useEffect, useState } from "react";
import { colors, globalStyles, sizes } from "../../../theme";
import { styled } from "@mui/system";
import ButtonGlobal from "../../../components/Button/ButtonGlobal";
import axios from "axios";
import moment from "moment";
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
  const temp = data?.main?.temp;
  const city = data?.name;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    long && fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);

  return (
    <Wrapper>
      <WeatherBox>
        <BoxLocale>
          <Title>Time</Title>
          <Time />
        </BoxLocale>
        <BoxLocale>
          <Title>Date</Title>
          <Text>
            {day}, {moment().format("Do/MM/YY")}
          </Text>
        </BoxLocale>
        <BoxLocale>
          <Title>Country</Title>
          <Text>Viet Nam</Text>
        </BoxLocale>
        <BoxLocale>
          <Title>City</Title>
          <Text> {city}</Text>
        </BoxLocale>
        <BoxLocale>
          <Title>Temperature</Title>
          <Text>{`${(temp - 273.15).toFixed(0)}`} &deg;C</Text>
        </BoxLocale>
      </WeatherBox>
      <ButtonGlobal
        styleButton={{ width: "140px", height: "50px" }}
        text="Booking Room"
      />
    </Wrapper>
  );
}
const Wrapper = styled("div")({
  marginTop: "5%",
  width: "58%",
  height: "80px",
  backgroundColor: colors.white,
  position: "absolute",
  ...globalStyles.flexCenterBetween,
  paddingRight: "20px",
  borderRadius: "13px",
});

const WeatherBox = styled("div")({
  width: "90%",
  height: "80px",
  // ...globalStyles.flexCenterEvenly,
  display: "flex",
  alignItems: "center",
});
const BoxLocale = styled("div")({
  width: "180px",
  height: "60px",
  ...globalStyles.flexColumnEvenly,
});

const Title = styled("p")({
  fontSize: sizes.font,
  color: colors.mediumGrey,
});

const Text = styled("p")({
  fontSize: sizes.medium,
  color: colors.blackest,
  fontWeight: "700",
});
