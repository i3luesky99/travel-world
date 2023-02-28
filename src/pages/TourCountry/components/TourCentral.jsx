import React from "react";
import { TotalTour } from "../../../components";
import { destinationCentral } from "../../../theme/data";
function TourCentral() {
  return (
    <div>
      <TotalTour title="miền Trung" destinations={destinationCentral} />
    </div>
  );
}

export default TourCentral;
