import React, { useEffect, useState } from "react";
import { TotalTour } from "../../../components";
import { destinationAmerica } from "../../../theme/data";
import { handleGetTourByContinent } from "../../../services/tourService";
import { handleScheduleDay } from "../../../theme/functions";
import { handleLoadDataImageFromData } from "../../../theme/functions";
function TourAmerica() {
  const destinations = destinationAmerica;
  const [tourAmerica, setTourAmerica] = useState([]);


  const fetchTourAmerica = async () => {
    setTourAmerica([]);
    const dataApi = await handleGetTourByContinent("Chau My");
    setTourAmerica(dataApi.tour);
  }
  useEffect(() => {
    fetchTourAmerica()
  }, [])
  return (
    <div>
      <TotalTour title="Châu Mỹ" destinations={tourAmerica.flat()} foreign={true} />
    </div >
  );
}

export default TourAmerica;
