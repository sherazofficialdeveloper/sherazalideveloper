import { Variants } from 'motion/react';

// Central Motion System respecting prefers-reduced-motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeUp: Variants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration || 0.45,
      delay: custom.delay || 0,
      ease: 'easeOut',
    },
  }),
};

export const slideLeft: Variants = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideRight: Variants = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const cardReveal: Variants = {
  hidden: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
