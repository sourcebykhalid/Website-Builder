import Articles from "./Components/Articles";
import "./App.css";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Cards score={9.8} text={"Exceptional"} />
      <Cards score={9.5} text={"Excellent"} />
      <Cards score={9.3} text={"Very Good"} />
      <Cards score={9.1} text={"Good"} />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
