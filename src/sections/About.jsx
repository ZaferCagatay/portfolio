import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';
import { aboutTexts } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [hasCopied, setHasCopied] = useState(false);
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
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
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
                  name="Contact Me"
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
