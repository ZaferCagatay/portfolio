import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import {
  getCanvasDpr,
  r3fGl,
  r3fPerformance,
} from '../config/r3fCanvas';
import CanvasFallback from './CanvasFallback';
import ErrorBoundary from './ErrorBoundary';

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
  dprOverride,
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
    <ErrorBoundary fallback={<CanvasFallback className={className} />}>
      <div ref={containerRef} className={className}>
        <Canvas
          fallback={<CanvasFallback className="h-full min-h-[16rem] w-full" />}
          frameloop={inView ? 'always' : 'never'}
          dpr={dprOverride ?? getCanvasDpr(isMobile)}
          gl={r3fGl}
          performance={r3fPerformance}
          {...canvasProps}
        >
          {children}
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default ViewportCanvas;
