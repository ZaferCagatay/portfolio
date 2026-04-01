import { lazy, Suspense, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
// import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import { scheduleBelowFoldPreloads } from './utils/deferredPreload';

const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));

const SectionFallback = () => (
  <div
    className="c-space my-20 min-h-[24vh] w-full rounded-lg bg-black-200/30"
    aria-hidden
  />
);

const App = () => {
  useEffect(() => {
    scheduleBelowFoldPreloads();
  }, []);

  return (
    <LanguageProvider>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        {/* Add this part later */}
        {/* <Clients /> */}
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
