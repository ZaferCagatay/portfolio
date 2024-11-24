import { LanguageProvider } from './context/LanguageContext';
import About from './sections/About';
// import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';

const App = () => {
  return (
    <LanguageProvider>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* Add this part later */}
        {/* <Clients /> */}
        <Experience />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
