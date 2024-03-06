import { useEffect } from "react";
import Aos from "aos";
import Services from "./UI/Services";
import "./App.css";
import Hero from "./UI/Hero";
import Portfolio from "./UI/Portfolio";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
