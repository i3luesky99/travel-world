import "./assets/scss/index.scss";
import {
  Home,
  Login,
  Register,
  Blog,
  TourSouthern,
  TourNorth,
  TourCentral,
  TourCountry,
  TourForeign,
  TourEurope,
  TourAmerica,
  TourAsia,
  TourDetail,
} from "./pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import HomeBase from "./pages/Home/components/HomeBase";
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

          <Route path="/tour-foreign" element={<TourForeign />} />
          <Route path="/tour-foreign/europe" element={<TourEurope />} />
          <Route path="/tour-foreign/america" element={<TourAmerica />} />
          <Route path="/tour-foreign/asia" element={<TourAsia />} />
          <Route path="/tour-detail" element={<TourDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Blog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
