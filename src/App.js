import "./assets/scss/index.scss";
import { Home, Popular } from "./pages";
import { Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Popular />
    </div>
  );
}

export default App;
