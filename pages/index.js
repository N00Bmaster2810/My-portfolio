import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
