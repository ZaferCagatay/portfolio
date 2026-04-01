import { Suspense, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { myProjects } from '../constants';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import ViewportCanvas from '../components/ViewportCanvas';
import { useMediaQuery } from 'react-responsive';
import DemoComputer from '../components/DemoComputer';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInUp,
  getInitialHidden,
  motionViewport,
  useMotionReduced,
} from '../utils/motion';

const projectCount = myProjects.length;

const slideTransition = { duration: 0.38, ease: [0.22, 1, 0.36, 1] };

const Projects = () => {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      if (direction === 'previous') {
        return prev === 0 ? projectCount - 1 : prev - 1;
      } else {
        return prev === projectCount - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <motion.p
        className="head-text"
        variants={fadeInUp}
        initial={getInitialHidden(reduceMotion)}
        whileInView="visible"
        viewport={motionViewport}
      >
        {t('My Work', 'Projelerim')}
      </motion.p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 min-h-[28rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedProjectIndex}
              className="flex flex-col gap-5 w-full"
              initial={
                reduceMotion ? false : { opacity: 0, x: 28, filter: 'blur(6px)' }
              }
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={
                reduceMotion ? undefined : { opacity: 0, x: -24, filter: 'blur(4px)' }
              }
              transition={reduceMotion ? { duration: 0 } : slideTransition}
            >
              <div className="absolute top-0 right-0 pointer-events-none">
                <img
                  src={currentProject.spotlight}
                  alt=""
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div
                className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg relative z-[1]"
                style={currentProject.logoStyle}
              >
                <img
                  src={currentProject.logo}
                  alt="logo"
                  className="w-10 h-10 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-5 text-white-600 my-5 relative z-[1]">
                <p className="text-white text-2xl font-semibold animatedText">
                  {t(currentProject.title, currentProject.titleTR)}
                </p>
                <p className="animatedText">
                  {t(currentProject.desc, currentProject.descTR)}
                </p>
                <p className="animatedText">
                  {t(currentProject.subdesc, currentProject.subdescTR)}
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-5 relative z-[1]">
                <div className="flex items-center gap-3">
                  {currentProject.tags.map((tag, i) => (
                    <div key={i} className="tech-logo">
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white-700 transition-colors"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>{t('Check Live Site', 'Canlı Siteyi Git')}</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="w-3 h-3"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center mt-7 relative z-[1]">
                <button
                  type="button"
                  className="arrow-btn"
                  onClick={() => handleNavigation('previous')}
                >
                  <img
                    src="/assets/left-arrow.png"
                    alt="left arrow"
                    className="w-4 h-4"
                  />
                </button>
                <button
                  type="button"
                  className="arrow-btn"
                  onClick={() => handleNavigation('next')}
                >
                  <img
                    src="/assets/right-arrow.png"
                    alt="right arrow"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full min-h-[24rem]"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          initial={getInitialHidden(reduceMotion)}
          whileInView="visible"
          viewport={motionViewport}
        >
          <ViewportCanvas
            isMobile={isMobile}
            className="w-full h-full min-h-[24rem]"
          >
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </ViewportCanvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
