import React, { useState } from "react";
import moment from "moment";

export default function Time() {
  let time = moment().format("LTS");
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = moment().format("LTS");
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return <div className="time">{currentTime}</div>;
}
