import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
      </section>
    <Portfolio/>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
