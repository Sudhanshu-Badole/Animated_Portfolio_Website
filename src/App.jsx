import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section><a href="#">Hero</a></section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>contact</section>
  </div>;
};

export default App;
