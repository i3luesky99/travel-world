import React from "react";
import { TotalTour } from "../../../components";
import { destinationAsia } from "../../../theme/data";

function TourAsia() {
  const destinations = destinationAsia;

  return (
    <div>
      <TotalTour title="Châu Á" destinations={destinations} foreign={true} />
    </div>
  );
}

export default TourAsia;
