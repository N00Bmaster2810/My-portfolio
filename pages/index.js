import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { StylesProvider } from "@mui/styles";

export default function Home() {
  return (
    <StylesProvider injectFirst>
      <div>
        <Navbar />
        <Hero />
        <hr />
        <Projects />
        <hr />

        <AboutMe />
        <hr />

        <Contact />
        <hr />

        <Footer />
      </div>
    </StylesProvider>
  );
}
