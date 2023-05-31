import React, { useEffect, useState } from "react";
import { TotalTour } from "../../components";
import { useSelector } from "react-redux";

export default function Search() {
  const tours = useSelector((state) => state.tours);
  console.log(tours);
  return (
    <div>
      {/* <TotalTour title="Tìm kiếm" destinations={tours} foreign={true} /> */}
    </div>
  );
}
