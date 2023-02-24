import React from "react";
import { About, Blog, Hotels } from "../../components/index";
import { TourCountry, TourForeign } from "../../pages/index";
export default function Home(props) {
  return (
    <div>
      <TourCountry />
      <TourForeign />
      <Hotels />
      <About />
      <Blog />
    </div>
  );
}
