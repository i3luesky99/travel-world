import "./assets/scss/index.scss";
import { Login, Register, Admin } from "./pages/indexInit";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer, ScrollToTop } from "./components";
import HomeBase from "./pages/Home/components/HomeBase";
import { clientWeb } from "./theme/linkWeb";
import TourAdmin from "./pages/Admin/pages/TourAdmin";
import DashboardAdmin from "./pages/Admin/Components/DashboardAdmin";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const child = <Outlet />;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
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
            {clientWeb.map((web, index) => (
              <Route
                key={`${index}-client`}
                path={web.link}
                element={web.component}
              />
            ))}
          </Route>
          <Route
            element={
              <>
                <DashboardAdmin child={child} />
              </>
            }
          >
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/tour" element={<TourAdmin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>{" "}
    </Provider>
  );
}

export default App;
