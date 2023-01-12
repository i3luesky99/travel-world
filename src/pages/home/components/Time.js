import React, { useState } from "react";
import moment from "moment";
import { styled } from "@mui/system";
import { colors, sizes } from "../../../theme";

export default function Time() {
  let time = moment().format("LTS");
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = moment().format("LTS");
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return <Text>{currentTime}</Text>;
}
const Text = styled("p")({
  fontSize: sizes.medium,
  color: colors.blackest,
  fontWeight: "700",
});
