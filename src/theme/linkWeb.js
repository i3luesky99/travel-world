import TourAdmin from "../pages/Admin/pages/TourAdmin";
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
    link: "/payment",
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
];

export const adminWeb = [
  {
    link: "/admin",
    component: <Admin />,
  },
  {
    link: "/admin/tour",
    component: <TourAdmin />,
  },
];
