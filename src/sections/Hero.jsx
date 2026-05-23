import { lazy, Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { calculateSizes, heroTexts, heroTextsTR } from '../constants';
import Button from '../components/Button';
import CanvasFallback from '../components/CanvasFallback';
import ErrorBoundary from '../components/ErrorBoundary';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInUp,
  getInitialHidden,
  staggerContainerSafe,
  staggerItem,
  useMotionReduced,
} from '../utils/motion';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isCompactDesktopWidth = useMediaQuery({
    minWidth: 1025,
    maxWidth: 1440,
  });
  const isShortDesktop = useMediaQuery({ minWidth: 1025, maxHeight: 900 });
  const isCompactDesktop = isCompactDesktopWidth || isShortDesktop;

  const sizes = calculateSizes({
    isSmall,
    isMobile,
    isTablet,
    isCompactDesktop,
  });

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
        <motion.p
          variants={staggerItem}
          className="hero_tag mx-auto max-w-[92vw] text-gray_gradient"
        >
          {t(heroTexts[1], heroTextsTR[1])}
        </motion.p>
      </motion.div>

      <div className="w-full h-full absolute inset-0">
        <ErrorBoundary
          fallback={<CanvasFallback className="h-full w-full" surface={false} />}
        >
          <Suspense
            fallback={
              <CanvasFallback
                className="h-full w-full"
                loading
                surface={false}
              />
            }
          >
            <HeroScene isMobile={isMobile} sizes={sizes} />
          </Suspense>
        </ErrorBoundary>
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
