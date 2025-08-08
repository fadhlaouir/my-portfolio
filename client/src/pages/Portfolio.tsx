import Navigation from '../components/Navigation';
import HeroRedesigned from '../components/HeroRedesigned';
import About from '../components/About';
import ProjectsRedesigned from '../components/ProjectsRedesigned';
import SkillsRedesigned from '../components/SkillsRedesigned';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Volunteer from '../components/Volunteer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navigation />
        <HeroRedesigned />
        <About />
        <ProjectsRedesigned />
        <SkillsRedesigned />
        <Experience />
        <Education />
        <Volunteer />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
