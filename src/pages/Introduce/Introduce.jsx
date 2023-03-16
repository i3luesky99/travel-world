import React from "react";
import { intro } from "../../theme/data";
export default function Introduce() {
  return (
    <div className="intro">
      <h1>Chúng tôi là :</h1>
      <p>{intro}</p>
      <div></div>
    </div>
  );
}
