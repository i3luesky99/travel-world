import "./assets/scss/index.scss";
import {
  Home,
  Login,
  Register,
  Blog,
  TourCountry,
  TourForeign,
  TourDetail,
  Payment,
  Contact,
} from "./pages/indexInit";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import HomeBase from "./pages/Home/components/HomeBase";
import {
  TourCentral,
  TourNorth,
  TourSouthern,
} from "./pages/TourCountry/components";
import {
  TourEurope,
  TourAmerica,
  TourAsia,
} from "./pages/TourForeign/components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <HomeBase />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/tour-country" element={<TourCountry />} />
          <Route path="/tour-country/southern" element={<TourSouthern />} />
          <Route path="/tour-country/north" element={<TourNorth />} />
          <Route path="/tour-country/central" element={<TourCentral />} />
          <Route
            path="/tour-country/tour-detail/:tourId"
            element={<TourDetail />}
          />

          <Route path="/tour-foreign" element={<TourForeign />} />
          <Route path="/tour-foreign/europe" element={<TourEurope />} />
          <Route path="/tour-foreign/america" element={<TourAmerica />} />
          <Route path="/tour-foreign/asia" element={<TourAsia />} />
          <Route
            path="/tour-foreign/tour-detail/:tourId"
            element={<TourDetail />}
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
