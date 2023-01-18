import "./assets/scss/index.scss";
import { Home } from "./pages";
import { About, Blog, Footer, Navbar, Offers, Popular } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
