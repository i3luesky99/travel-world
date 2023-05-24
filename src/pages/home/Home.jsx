import React from "react";
import { About, Blog, Hotels } from "../../components/index";
import { TourCountry, TourForeign } from "../indexInit";
import BlogCountry from "./components/BlogCountry";
export default function Home() {
  return (
    <>
      <BlogCountry />
      <TourCountry />
      <TourForeign />
      <Hotels />
      <About />
      <Blog />
    </>
  );
}
