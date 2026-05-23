import { lazy, Suspense, useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
// import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';

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
  const [loadDeferredSections, setLoadDeferredSections] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let frameId;
    let idleId;
    let timeoutId;

    const load = () => {
      setLoadDeferredSections(true);
      import('./utils/deferredPreload')
        .then(({ scheduleBelowFoldPreloads }) => {
          scheduleBelowFoldPreloads();
        })
        .catch((error) => {
          console.warn('Deferred model preload skipped.', error);
        });
    };

    frameId = window.requestAnimationFrame(() => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(load, { timeout: 2000 });
      } else {
        timeoutId = window.setTimeout(load, 800);
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <LanguageProvider>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        {loadDeferredSections ? (
          <>
            <Suspense fallback={<SectionFallback />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Experience />
            </Suspense>
          </>
        ) : (
          <>
            <SectionFallback />
            <SectionFallback />
            <SectionFallback />
          </>
        )}
        {/* Add this part later */}
        {/* <Clients /> */}
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
