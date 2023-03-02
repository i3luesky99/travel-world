import React from "react";
import { TotalTour } from "../../../components";
import { destinationAmerica } from "../../../theme/data";

function TourAmerica() {
  const destinations = destinationAmerica;

  return (
    <div>
      <TotalTour title="Châu Mỹ" destinations={destinations} foreign={true}/>
    </div>
  );
}

export default TourAmerica;
