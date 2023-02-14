import React from "react";
import HomeBase from "./components/HomeBase";
import {
  About,
  Blog,
  Footer,
  Hotels,
  Country,
  Foreign,
} from "../../components/index";
export default function Home() {
  return (
    <div>
      <HomeBase />
      <Country />
      <Foreign />
      <Hotels />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}
