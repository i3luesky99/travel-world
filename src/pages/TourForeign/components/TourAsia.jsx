import React, { useEffect, useState } from "react";
import { TotalTour } from "../../../components";
import { destinationAsia } from "../../../theme/data";
import { handleScheduleDay } from "../../../theme/functions";
import { handleGetTourByContinent } from "../../../services/tourService";
import { handleLoadDataImageFromData } from "../../../theme/functions";
function TourAsia() {
  const [tourAsia, setTourAsia] = useState([]);
  const destinations = destinationAsia;
  const fetchTourAsia = async () => {
    try {
      setTourAsia([]);
      const dataApi = await handleGetTourByContinent("Chau A");
      setTourAsia(dataApi.tour);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchTourAsia();
  }, []);
  return (
    <div>
      <TotalTour title="Châu Á" destinations={tourAsia.flat()} foreign={true} />
    </div>
  );
}

export default TourAsia;
