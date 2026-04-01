import { useReducedMotion } from 'framer-motion';

/** Viewport options for scroll-triggered sections (play once, start slightly before fully visible). */
export const motionViewport = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -48px 0px',
};

const easeOut = [0.22, 1, 0.36, 1];

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

/** Stagger with zero delay when `prefers-reduced-motion` is set. */
export function staggerContainerSafe(reduceMotion) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.09,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };
}

export const staggerItem = fadeInUp;

/** Use when you need to skip motion when `prefers-reduced-motion: reduce` is set. */
export function useMotionReduced() {
  return useReducedMotion();
}

/** Merge into motion props: `initial={getInitial(reduce)}` */
export function getInitialHidden(reduceMotion) {
  return reduceMotion ? false : 'hidden';
}
