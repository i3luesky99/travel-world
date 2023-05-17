import "./assets/scss/index.scss";
import { Error, Login, Register } from "./pages/indexInit";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Footer, ScrollToTop } from "./components";
import HomeBase from "./pages/Home/components/HomeBase";
import { adminWeb, clientWeb } from "./theme/linkWeb";
import DashboardAdmin from "./pages/Admin/Components/DashboardAdmin";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const child = <Outlet />;
  // const role = localStorage.getItem("roleId");
  const role = "R1";
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
          {role === "R1" && (
            <Route
              element={
                <>
                  <DashboardAdmin child={child} />
                </>
              }
            >
              {adminWeb.map((web, index) => (
                <Route
                  key={`${index}-admin`}
                  path={web.link}
                  element={web.component}
                />
              ))}
            </Route>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
