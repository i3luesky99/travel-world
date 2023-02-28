import React from "react";
import { About, Blog, Hotels } from "../../components/index";
import TourCountry from "../TourCountry";
import TourForeign from "../TourForeign";
export default function Home(props) {
  return (
    <>
      <TourCountry />
      <TourForeign />
      <Hotels />
      <About />
      <Blog />
    </>
  );
}
