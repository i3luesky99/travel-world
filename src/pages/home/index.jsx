import React from "react";
import { About, Blog, Hotels, Country, Foreign } from "../../components/index";
export default function Home(props) {
  const { countrySection } = props;
  return (
    <div>
      <Country />
      <Foreign countrySection={countrySection} />
      <Hotels />
      <About />
      <Blog />
    </div>
  );
}
