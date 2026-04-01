import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { aboutTexts } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const GLOBE_SIZE = 326;
const EARTH_NIGHT = '/textures/globe/earth-night.jpg';
const EARTH_BUMP = '/textures/globe/earth-topology.png';

const About = () => {
  const { t } = useLanguage();
  const [hasCopied, setHasCopied] = useState(false);
  const globeWrapRef = useRef(null);
  const [globeInView, setGlobeInView] = useState(true);
  const prefersReducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  useEffect(() => {
    const el = globeWrapRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setGlobeInView(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showGlobeWebGL = globeInView && !prefersReducedMotion;

  const handleCopy = () => {
    navigator.clipboard.writeText('zafercagatayumut@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[278px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                {t(aboutTexts[0].headtext, aboutTexts[0].headtextTR)}
              </p>
              <p className="grid-subtext">
                {t(aboutTexts[0].subtext, aboutTexts[0].subtextTR)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[278px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                {t(aboutTexts[1].headtext, aboutTexts[1].headtextTR)}
              </p>
              <p className="grid-subtext">
                {t(aboutTexts[1].subtext, aboutTexts[1].subtextTR)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div
              ref={globeWrapRef}
              className="rounded-3xl w-full sm:h-[326px] min-h-[326px] h-fit flex justify-center items-center"
            >
              {showGlobeWebGL ? (
                <Globe
                  height={GLOBE_SIZE}
                  width={GLOBE_SIZE}
                  backgroundColor="rgba(0,0,0,0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl={EARTH_NIGHT}
                  bumpImageUrl={EARTH_BUMP}
                  labelsData={[
                    {
                      lat: 41.015137,
                      lng: 28.97953,
                      text: "I'm here!",
                      color: 'white',
                      size: 30,
                    },
                  ]}
                />
              ) : (
                <div
                  role="img"
                  aria-label="Earth"
                  className="rounded-3xl w-[326px] h-[326px] max-w-full aspect-square mx-auto bg-cover bg-center border border-black-300"
                  style={{
                    backgroundImage: `url(${EARTH_NIGHT})`,
                  }}
                />
              )}
            </div>
            <div>
              <p className="grid-headtext">
                {t(aboutTexts[2].headtext, aboutTexts[2].headtextTR)}
              </p>
              <p className="grid-subtext">
                {t(aboutTexts[2].subtext, aboutTexts[2].subtextTR)}
              </p>
              <a href="#contact" className="w-fit">
                <Button
                  name={t('Contact Me', 'İletişime geç')}
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                {t(aboutTexts[3].headtext, aboutTexts[3].headtextTR)}
              </p>
              <p className="grid-subtext">
                {t(aboutTexts[3].subtext, aboutTexts[3].subtextTR)}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[128px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">
                {t(aboutTexts[4].headtext, aboutTexts[4].headtextTR)}
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white cursor-pointer">
                  {aboutTexts[4].subtext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
