import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import VideoPresentation from './components/VideoPresentation.jsx';
import About from './components/About.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <Projects />
        <VideoPresentation />
         <SocialMedia />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
