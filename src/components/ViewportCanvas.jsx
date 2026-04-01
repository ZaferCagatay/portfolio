import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import {
  getCanvasDpr,
  r3fGl,
  r3fPerformance,
} from '../config/r3fCanvas';

/**
 * Wraps R3F Canvas with intersection observer: pauses the render loop when off-screen.
 * @param {object} props
 * @param {boolean} [props.defaultVisible] — set true for above-the-fold (e.g. hero).
 * @param {boolean} [props.isMobile]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
const ViewportCanvas = ({
  defaultVisible = false,
  isMobile = false,
  className = 'w-full h-full',
  children,
  ...canvasProps
}) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(defaultVisible);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: '160px 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        dpr={getCanvasDpr(isMobile)}
        gl={r3fGl}
        performance={r3fPerformance}
        {...canvasProps}
      >
        {children}
      </Canvas>
    </div>
  );
};

export default ViewportCanvas;
