import Alert from '../components/Alert.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contactTexts } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useContactForm } from '../hooks/useContactForm.js';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  getInitialHidden,
  motionViewport,
  useMotionReduced,
} from '../utils/motion.js';

export default function Contact() {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const { alert, form, handleChange, handleSubmit, loading } = useContactForm();
  const intro = contactTexts[0];

  return (
    <section className="c-space my-8 sm:my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden py-6 sm:min-h-[min(88vh,50rem)] sm:py-14">
        {/* Mac frame: contained so the full device stays visible on narrow screens; wider on all breakpoints */}
        <img
          src="/assets/terminal.png"
          alt=""
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 w-[min(96vw,80rem)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.32] sm:top-1/2 sm:w-[min(94vw,80rem)] sm:opacity-[0.26]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#010103] via-[#010103]/40 to-[#010103] sm:via-transparent" />

        <div className="relative z-10 w-full">
          <div className="rounded-2xl border border-black-300/70 bg-black-200/60 p-5 shadow-2xl shadow-black-500/50 backdrop-blur-md sm:bg-black-200/55 sm:p-8">
            <motion.h3
              className="text-2xl font-semibold text-gray_gradient sm:text-3xl"
              variants={fadeInUp}
              initial={getInitialHidden(reduceMotion)}
              whileInView="visible"
              viewport={motionViewport}
            >
              {t(intro.headtext, intro.headtextTR)}
            </motion.h3>
            <motion.p
              className="mt-2 max-w-prose text-sm leading-relaxed text-white-600 sm:mt-3 sm:text-[0.9375rem]"
              variants={fadeInUp}
              initial={getInitialHidden(reduceMotion)}
              whileInView="visible"
              viewport={motionViewport}
              transition={{ delay: reduceMotion ? 0 : 0.05 }}
            >
              {t(intro.subtext, intro.subtextTR)}
            </motion.p>

            <ContactForm
              form={form}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
