import React from "react";
import { TotalTour } from "../../../components";
import { destinationEurope } from "../../../theme/data";

function TourEurope() {
  const destinations = destinationEurope;

  return (
    <div>
      <TotalTour title="Châu Âu" destinations={destinations} foreign={true} />
    </div>
  );
}

export default TourEurope;
