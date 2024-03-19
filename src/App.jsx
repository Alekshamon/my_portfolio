import { useEffect } from "react";
import Aos from "aos";
import Services from "./UI/Services";
import "./App.css";
import Hero from "./UI/Hero";
import Portfolio from "./UI/Portfolio";
import Contact from "./UI/Contact";
import Stack from "./UI/Stack";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="flex flex-wrap justify-center ">
      <Hero />
      <Stack />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
