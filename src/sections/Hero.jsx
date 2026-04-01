import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import ViewportCanvas from '../components/ViewportCanvas';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { calculateSizes, heroTexts, heroTextsTR } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Ring from '../components/Ring';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInUp,
  getInitialHidden,
  staggerContainerSafe,
  staggerItem,
  useMotionReduced,
} from '../utils/motion';

const Hero = () => {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <motion.div
        className="w-full mx-auto flex flex-col sm:mt-36  mt-20 c-space gap-3"
        variants={staggerContainerSafe(reduceMotion)}
        initial={getInitialHidden(reduceMotion)}
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"
        >
          {t(heroTexts[0], heroTextsTR[0])}{' '}
          <span className="waving-hand">👋</span>
        </motion.p>
        <motion.p variants={staggerItem} className="hero_tag text-gray_gradient">
          {t(heroTexts[1], heroTextsTR[1])}
        </motion.p>
      </motion.div>

      <div className="w-full h-full absolute inset-0">
        <ViewportCanvas
          defaultVisible
          isMobile={isMobile}
          className="w-full h-full"
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </ViewportCanvas>
      </div>
      <motion.div
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
        variants={fadeInUp}
        initial={getInitialHidden(reduceMotion)}
        animate="visible"
        transition={{ delay: reduceMotion ? 0 : 0.55 }}
      >
        <a href="#about" className="w-fit">
          <Button
            name={t("Let's work together", 'Hadi beraber çalışalım')}
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
