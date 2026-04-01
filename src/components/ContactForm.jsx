import { motion } from 'framer-motion';
import { contactTexts } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  staggerContainerSafe,
  staggerItem,
  getInitialHidden,
  motionViewport,
  useMotionReduced,
} from '../utils/motion.js';

const rowFields = [
  { name: 'name', type: 'text' },
  { name: 'email', type: 'email' },
];

export default function ContactForm({ form, loading, onChange, onSubmit }) {
  const { t } = useLanguage();
  const reduceMotion = useMotionReduced();
  const copy = contactTexts[0];

  return (
    <motion.form
      onSubmit={onSubmit}
      className="mt-6 flex flex-col gap-4 sm:mt-7 sm:gap-5"
      variants={staggerContainerSafe(reduceMotion)}
      initial={getInitialHidden(reduceMotion)}
      whileInView="visible"
      viewport={motionViewport}
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {rowFields.map((field, i) => {
          const fc = copy.formConstants[i];
          return (
            <motion.label
              key={field.name}
              variants={staggerItem}
              className="flex flex-col gap-1.5"
            >
              <span className="text-[0.7rem] font-medium text-white-600 sm:text-xs">
                {t(fc.label, fc.labelTR)}
              </span>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={onChange}
                required
                autoComplete={field.name === 'email' ? 'email' : 'name'}
                className="field-input !min-h-10 !px-4 !py-2 !text-xs !text-white-800 placeholder:!text-xs placeholder:!text-white-500"
                placeholder={t(fc.placeholder, fc.placeholderTR)}
              />
            </motion.label>
          );
        })}
      </div>

      <motion.label variants={staggerItem} className="flex flex-col gap-1.5">
        <span className="text-[0.7rem] font-medium text-white-600 sm:text-xs">
          {t(copy.formConstants[2].label, copy.formConstants[2].labelTR)}
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          rows={5}
          className="field-input !min-h-[6rem] resize-y !px-4 !py-2.5 !text-xs !leading-relaxed !text-white-800 placeholder:!text-xs placeholder:!text-white-500"
          placeholder={t(
            copy.formConstants[2].placeholder,
            copy.formConstants[2].placeholderTR,
          )}
        />
      </motion.label>

      <motion.button
        variants={staggerItem}
        className="field-btn mt-0.5 !min-h-10 w-full !gap-2 !px-4 !text-xs sm:w-auto sm:self-start"
        type="submit"
        disabled={loading}
        whileHover={reduceMotion || loading ? undefined : { scale: 1.01 }}
        whileTap={reduceMotion || loading ? undefined : { scale: 0.99 }}
      >
        {loading
          ? t(copy.buttonSendingText, copy.buttonSendingTextTR)
          : t(copy.buttonText, copy.buttonTextTR)}
        <img
          src="/assets/arrow-up.png"
          alt=""
          className="field-btn_arrow"
          aria-hidden
        />
      </motion.button>
    </motion.form>
  );
}
