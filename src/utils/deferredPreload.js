import { useGLTF } from '@react-three/drei';

/** Preload GLBs after first paint so hero assets decode first. */
export function scheduleBelowFoldPreloads() {
  const run = () => {
    useGLTF.preload('/models/react.glb');
    useGLTF.preload('/models/cube.glb');
    useGLTF.preload('/models/hacker-room.glb');
    useGLTF.preload('/models/computer.glb');
    useGLTF.preload('/models/developer.glb');
    useGLTF.preload('/models/astronaut.glb');
  };

  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, { timeout: 4000 });
  } else {
    setTimeout(run, 1500);
  }
}
