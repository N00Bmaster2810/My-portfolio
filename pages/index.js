import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar id="navbar" />
      <Hero id="hero" />
      <hr />
      <Projects id="project" />
      <hr />

      <AboutMe id="about" />
      <hr />

      <Contact id="contact" />
      <hr />

      <Footer id="footer" />
    </div>
  );
}
