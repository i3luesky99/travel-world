import "./assets/scss/index.scss";
import { Home, Login, Register, Blog } from "./pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import TourCounty from "./pages/TourCountry";
import { Footer } from "./components";
import HomeBase from "./pages/Home/components/HomeBase";
import { useRef } from "react";
function App() {
  const countrySection = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <HomeBase countrySection={countrySection} />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home countrySection={countrySection} />} />
          <Route path="/tour-country" element={<TourCounty />} />
          <Route path="/tour-foreign" element={<TourCounty />} />
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
