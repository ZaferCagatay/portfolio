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
      className="c-space flex flex-col items-center gap-4 border-t border-black-300 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-7 text-center text-xs leading-snug text-white-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-5 sm:text-left sm:text-sm"
      variants={fadeInUp}
      initial={getInitialHidden(reduceMotion)}
      whileInView="visible"
      viewport={motionViewport}
    >
      <div className="flex max-w-full flex-wrap justify-center gap-x-2 gap-y-1 sm:justify-start">
        <p>{t(footerConstants[0].text1, footerConstants[0].text1TR)}</p>
        <span aria-hidden className="text-white-600">
          |
        </span>
        <p>{t(footerConstants[0].text2, footerConstants[0].text2TR)}</p>
      </div>

      <a
        href="https://github.com/ZaferCagatay"
        target="_blank"
        rel="noreferrer"
        className="social-icon inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-black-200 bg-black-300 transition-colors hover:border-white/20 hover:bg-black-500"
        aria-label="GitHub"
      >
        <img
          src="/assets/github.svg"
          alt=""
          className="h-5 w-5 cursor-pointer"
        />
      </a>

      <p className="w-full max-w-full break-words sm:w-auto">
        {t(footerConstants[0].text3, footerConstants[0].text3TR)}
      </p>
    </motion.section>
  );
};

export default Footer;
