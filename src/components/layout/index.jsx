import "./index.scss"
import Contact from "../contact/Contact";
import Cursor from "../cursor/Cursor";
import Hero from "../hero/Hero";
import Work from "../lastest_work/Work";
import Navbar from "../navbar/Navbar";
import Parallax from "../parallax/Parallax";
import Portfolio from "../portfolio/Portfolio";
import Services from "../services/Services";

const Index = () => {
  return <div>
    
    <Cursor/>
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
    <section id="Contact">
      <Contact/>
    </section>
    <Work/>
  </div>;
};

export default Index;
