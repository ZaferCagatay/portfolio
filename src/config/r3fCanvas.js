/** Shared R3F Canvas settings for performance (DPR cap, no MSAA by default). */

export const r3fGl = {
  powerPreference: 'high-performance',
  antialias: false,
};

export const r3fPerformance = {
  min: 0.5,
};

/** @param {boolean} [isMobile] */
export function getCanvasDpr(isMobile) {
  const max = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1.5;
  return isMobile ? [1, 1.25] : [1, Math.min(1.75, max)];
}
