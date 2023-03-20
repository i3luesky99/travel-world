import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "../../components/Carousel/Carousel";
import {
  destinationAmerica,
  destinationAsia,
  destinationEurope,
} from "../../theme/data";

export default function TourForeign() {
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
        destinations={destinationAmerica}
        page={page}
        foreign={true}
        title="Tour Châu Mỹ"
        link="/tour-foreign/america"
      />
      <Carousel
        destinations={destinationEurope}
        page={page}
        foreign={true}
        title="Tour Châu ÂU"
        link="/tour-foreign/europe"
      />
      <Carousel
        destinations={destinationAsia}
        page={page}
        foreign={true}
        title="Tour Châu Á"
        link="/tour-foreign/asia"
      />
    </section>
  );
}
