import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "../../components/Carousel/Carousel";
import {
  destinationCentral,
  destinationNorth,
  destinationSouthern,
} from "../../theme/data";

export default function TourCountry() {
  const [page, setPage] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (screenWidth <= 500) {
      setPage(1);
    } else if (screenWidth <= 1200) {
      setPage(2);
    } else if (screenWidth <= 1500) {
      setPage(3);
    } else {
      setPage(4);
    }
    window.addEventListener("resize", handleResize);
    Aos.init({ duration: 2000 });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <section className="tour-country section container">
      <Carousel
        destinations={destinationSouthern}
        page={page}
        title="Tour miền Nam"
        link="/tour-country/southern"
      />
      <Carousel
        destinations={destinationCentral}
        page={page}
        title="Tour miền Trung"
        link="/tour-country/central"
      />
      <Carousel
        destinations={destinationNorth}
        page={page}
        title="Tour miền Bắc"
        link="/tour-country/north"
      />
    </section>
  );
}
