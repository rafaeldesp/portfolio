import { images } from "./assets/icons";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skills images={images}/>
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}