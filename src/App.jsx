import { BrowserRouter } from "react-router-dom";
import { Hero } from "src/components/Hero";
import { Overview } from "src/components/Overview";
import { Contagion } from "src/components/Contagion";
import { Symptoms } from "src/components/Symptoms";
import { Prevention } from "src/components/Prevention";
import { Contact } from "src/components/Contact";
import { Footer } from "src/components/Footer";
import { Navbar } from "src/components/Navbar";
import { ScrollToTop } from "src/components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-header bg-cover bg-no-repeat bg-center ">
        <Navbar />
        <Hero />
        <Overview />
        <Contagion />
        <Symptoms />
        <Prevention />
        <div className="relative z-0 bg-footer bg-cover bg-no-repeat bg-center">
          <ScrollToTop />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
