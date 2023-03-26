import React from "react";
import { About, Blog, Hotels } from "../../components/index";
import { TourCountry, TourForeign } from "../indexInit";
export default function Home() {
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
