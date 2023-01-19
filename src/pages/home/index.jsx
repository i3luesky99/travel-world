import React from "react";
import HomeBase from "./components/HomeBase";
import {
  About,
  Blog,
  Footer,
  Navbar,
  Offers,
  Popular,
} from "../../components/index";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBase />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}
