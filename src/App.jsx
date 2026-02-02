import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // duración de la animación
      easing: "ease-out",
      once: true, // se anima solo la primera vez
      offset: 120, // antes de entrar en pantalla
    });
  }, []);

  return (
    <div className="bg-homepage">
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
