import React, { useEffect, useState } from "react";
import { TotalTour } from "../../../components";
import { destinationEurope } from "../../../theme/data";
import { handleGetTourByContinent } from "../../../services/tourService";
import { handleScheduleDay } from "../../../theme/functions";
import { handleLoadDataImageFromData } from "../../../theme/functions";

function TourEurope() {
  const destinations = destinationEurope;
  const [tourEurope, setTourEurope] = useState([]);
  const fetchTourEurope = async () => {
    try {
      setTourEurope([]);
      const dataApi = await handleGetTourByContinent("Chau Au");
      setTourEurope(dataApi.tour);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTourEurope();
  }, []);
  return (
    <div>
      <TotalTour
        title="Châu Âu"
        destinations={tourEurope.flat()}
        foreign={true}
      />
    </div>
  );
}

export default TourEurope;
