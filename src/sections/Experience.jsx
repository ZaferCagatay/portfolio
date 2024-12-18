import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { workExperiences } from '../constants';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const [animationName, setAnimationName] = useState('idle');
  return (
    <section id="work" className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">
          {t('My Work Experience', 'İş Tecrübelerim')}
        </h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
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
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
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
                  <div
                    key={id}
                    className="work-content_container group"
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName('idle')}
                    onTouchStart={
                      window.innerWidth <= 768
                        ? () => setAnimationName(animation.toLowerCase())
                        : undefined
                    }
                    onTouchEnd={
                      window.innerWidth <= 768
                        ? () => setAnimationName('idle')
                        : undefined
                    }
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">
                        {t(name, nameTR)}
                      </p>
                      <p className="text-sm mb-5">
                        {t(pos, posTR)} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {t(title, titleTR)}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
