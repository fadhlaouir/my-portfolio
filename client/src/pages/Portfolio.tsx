import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Volunteer from '../components/Volunteer';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ScrollIndicator from '../components/ScrollIndicator';
import ScrollProgress from '../components/ScrollProgress';
import CursorTrail from '../components/CursorTrail';
import SoundEffects from '../components/SoundEffects';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <ScrollIndicator />
      <CursorTrail />
      <SoundEffects />
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Volunteer />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
