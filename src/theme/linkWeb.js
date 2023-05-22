import {
  TourCentral,
  TourNorth,
  TourSouthern,
} from "../pages/TourCountry/components";
import {
  TourAmerica,
  TourAsia,
  TourEurope,
} from "../pages/TourForeign/components";
import {
  Admin,
  BlogPage,
  Home,
  Introduce,
  Payment,
  TourCountry,
  TourDetail,
  TourForeign,
} from "../pages/indexInit";
import NewTour from "../pages/Admin/pages/Tour/NewTour/NewTour";
import TourDetailAdmin from "../pages/Admin/pages/Tour/TourDetailAdmin/TourDetailAdmin";
import TourAdmin from "../pages/Admin/pages/Tour/TourAdmin/TourAdmin";

export const clientWeb = [
  {
    link: "/",
    component: <Home />,
  },
  //country
  {
    link: "/tour-country",
    component: <TourCountry />,
  },
  {
    link: "/tour-country/southern",
    component: <TourSouthern />,
  },
  {
    link: "/tour-country/north",
    component: <TourNorth />,
  },
  {
    link: "/tour-country/central",
    component: <TourCentral />,
  },
  {
    link: "/tour-country/tour-detail/:tourId",
    component: <TourDetail />,
  },

  //foreign
  {
    link: "/tour-foreign",
    component: <TourForeign />,
  },
  {
    link: "/tour-foreign/europe",
    component: <TourEurope />,
  },
  {
    link: "/tour-foreign/asia",
    component: <TourAsia />,
  },
  {
    link: "/tour-foreign/america",
    component: <TourAmerica />,
  },
  {
    link: "/tour-foreign/tour-detail/:tourId",
    component: <TourDetail />,
  },
  {
    link: "/payment/:tourId",
    component: <Payment />,
  },
  {
    link: "/blog",
    component: <BlogPage />,
  },
  {
    link: "/introduce",
    component: <Introduce />,
  },
  {
    link: "/introduce",
    component: <Introduce />,
  },
];

export const adminWeb = [
  {
    link: "/admin",
    component: <Admin />,
  },
  {
    link: "/admin/tours",
    component: <TourAdmin />,
  },
  {
    link: "/admin/tour/create",
    component: <NewTour />,
  },
  {
    link: "/admin/tour-detail/:id",
    component: <TourDetailAdmin />,
  },
];
