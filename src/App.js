import "./assets/scss/index.scss";
import { Home } from "./pages";
import { Navbar, Offers, Popular } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Popular />
      <Offers />
    </div>
  );
}

export default App;
