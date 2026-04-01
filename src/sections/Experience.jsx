import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { workExperiences } from '../constants';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';
import ViewportCanvas from '../components/ViewportCanvas';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInUp,
  getInitialHidden,
  motionViewport,
  staggerContainerSafe,
  staggerItem,
  useMotionReduced,
} from '../utils/motion';

const Experience = () => {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [animationName, setAnimationName] = useState('idle');

  const setAnim = (name) => setAnimationName(name.toLowerCase());
  const clearAnim = () => setAnimationName('idle');

  return (
    <section id="work" className="c-space my-12 sm:my-20">
      <div className="w-full text-white-600">
        <motion.h3
          className="head-text"
          variants={fadeInUp}
          initial={getInitialHidden(reduceMotion)}
          whileInView="visible"
          viewport={motionViewport}
        >
          {t('My Work Experience', 'İş Tecrübelerim')}
        </motion.h3>

        <div className="work-container">
          <motion.div
            className="work-canvas min-h-[200px] overflow-hidden rounded-lg sm:min-h-[280px] lg:min-h-[320px]"
            variants={fadeInUp}
            initial={getInitialHidden(reduceMotion)}
            whileInView="visible"
            viewport={motionViewport}
          >
            <ViewportCanvas
              isMobile={isMobile}
              className="h-full min-h-[200px] w-full sm:min-h-[280px] lg:min-h-[320px]"
            >
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penubra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </ViewportCanvas>
          </motion.div>

          <motion.div
            className="work-content overflow-hidden px-2 py-2 sm:px-2.5 sm:py-5 lg:px-5"
            variants={staggerContainerSafe(reduceMotion)}
            initial={getInitialHidden(reduceMotion)}
            whileInView="visible"
            viewport={motionViewport}
          >
            {workExperiences.map(
              ({
                id,
                name,
                nameTR,
                pos,
                posTR,
                duration,
                title,
                titleTR,
                icon,
                animation,
              }) => (
                <motion.div key={id} variants={staggerItem}>
                  {/* Mobile: stacked card — logo + meta row, then description */}
                  <div
                    className="group rounded-lg border border-black-300/40 bg-black-200/40 p-3 transition-colors hover:bg-black-300 sm:hidden"
                    onPointerOver={() => setAnim(animation)}
                    onPointerOut={clearAnim}
                    onTouchStart={isMobile ? () => setAnim(animation) : undefined}
                    onTouchEnd={isMobile ? clearAnim : undefined}
                  >
                    <div className="flex gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black-600 p-2">
                        <img
                          src={icon}
                          alt=""
                          className={
                            icon === '/assets/mivento.png'
                              ? 'h-auto w-full object-contain'
                              : 'h-full w-full object-contain'
                          }
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="break-words text-sm font-bold text-white-800">
                          {t(name, nameTR)}
                        </p>
                        <p className="mt-1 text-xs text-white-600">
                          {t(pos, posTR)} — {duration}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed break-words text-white-600">
                      {t(title, titleTR)}
                    </p>
                  </div>

                  {/* Tablet/desktop: original grid + vertical bar */}
                  <motion.div
                    className="work-content_container group hidden sm:grid"
                    onPointerOver={() => setAnim(animation)}
                    onPointerOut={clearAnim}
                    onTouchStart={isMobile ? () => setAnim(animation) : undefined}
                    onTouchEnd={isMobile ? clearAnim : undefined}
                  >
                    <div className="flex h-full flex-col items-center justify-start py-2">
                      <div className="work-content_logo">
                        <img
                          src={icon}
                          alt=""
                          className={`${
                            icon === '/assets/mivento.png'
                              ? 'h-auto w-full object-contain'
                              : 'h-full w-full object-contain'
                          }`}
                        />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="min-w-0 sm:p-5">
                      <p className="break-words font-bold text-white-800">
                        {t(name, nameTR)}
                      </p>
                      <p className="mb-4 text-sm text-white-600 sm:mb-5">
                        {t(pos, posTR)} -- {duration}
                      </p>
                      <p className="text-sm leading-relaxed break-words transition duration-500 ease-in-out group-hover:text-white sm:text-base">
                        {t(title, titleTR)}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
