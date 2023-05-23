import React from "react";
import { About, Blog, Hotels } from "../../components/index";
import { TourCountry, TourForeign } from "../indexInit";
import BlogCountry from "./components/BlogCountry";
export default function Home() {
  return (
    <>
      {/* <TourCountry /> */}
      {/* <TourForeign /> */}
      <BlogCountry />
      <Hotels />
      <About />
      <Blog />
    </>
  );
}
