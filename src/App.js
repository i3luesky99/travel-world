import "./assets/scss/index.scss";
import { Home, Login, Register } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourCounty from "./pages/TourCountry";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour-country" element={<TourCounty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
