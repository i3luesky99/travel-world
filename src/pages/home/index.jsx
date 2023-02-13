import React from "react";
import HomeBase from "./components/HomeBase";
import {
  About,
  Blog,
  Footer,
  Navbar,
  Hotels,
  Country,
  Foreign,
} from "../../components/index";
export default function Home() {
  return (
    <div>
      <Navbar />
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
