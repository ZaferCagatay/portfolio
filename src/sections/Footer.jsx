import { motion } from 'framer-motion';
import { footerConstants } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInUp,
  getInitialHidden,
  motionViewport,
  useMotionReduced,
} from '../utils/motion';

const Footer = () => {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  return (
    <motion.section
      className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
      variants={fadeInUp}
      initial={getInitialHidden(reduceMotion)}
      whileInView="visible"
      viewport={motionViewport}
    >
      <div className="text-white-500 flex gap-2">
        <p>{t(footerConstants[0].text1, footerConstants[0].text1TR)} </p>
        <p>|</p>
        <p>{t(footerConstants[0].text2, footerConstants[0].text2TR)}</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/ZaferCagatay"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 cursor-pointer"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        {t(footerConstants[0].text3, footerConstants[0].text3TR)}
      </p>
    </motion.section>
  );
};

export default Footer;
