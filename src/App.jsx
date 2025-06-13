import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen text-white font-sans">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  );
}

export default App;
