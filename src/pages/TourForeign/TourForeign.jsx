import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { handleGetTourByContinent } from "../../services/tourService";
import { handleLoadDataImageFromData } from "../../theme/functions";
import { handleScheduleDay } from "../../theme/functions";
import Carousel from "../../components/Carousel/Carousel";

import {
  destinationAmerica,
  destinationAsia,
  destinationEurope,
} from "../../theme/data";

export default function TourForeign() {
  const [page, setPage] = useState(3);

  const [tourEurope, setTourEurope] = useState([]);
  const [tourAmerica, setTourAmerica] = useState([]);
  const [tourAsia, setTourAsia] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const fetchTourAsia = async () => {
    try {
      setTourAsia([]);
      const dataApi = await handleGetTourByContinent("Chau A");
      setTourAsia(dataApi.tour);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourAmerica = async () => {
    try {
      setTourAmerica([]);
      const dataApi = await handleGetTourByContinent("Chau My");
      setTourAmerica(dataApi.tour)




    } catch (error) {
      console.log(error);
    }
  }
  const fetchTourEurope = async () => {
    try {
      setTourEurope([]);
      const dataApi = await handleGetTourByContinent("Chau Au");
      setTourEurope(dataApi.tour);


    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTourEurope();
    fetchTourAmerica();
    fetchTourAsia();
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
    <div >
      <section className="tour-country section container" >
        <Carousel
          destinations={tourAmerica.flat()}
          page={page}
          foreign={true}
          title="Tour Châu Mỹ"
          link="/tour-foreign/america"
        />
        <Carousel
          destinations={tourEurope.flat()}
          page={page}
          foreign={true}
          title="Tour Châu ÂU"
          link="/tour-foreign/europe"
        />
        <Carousel
          destinations={tourAsia.flat()}
          page={page}
          foreign={true}
          title="Tour Châu Á"
          link="/tour-foreign/asia"
        />
      </section>
    </div>
  );
}
