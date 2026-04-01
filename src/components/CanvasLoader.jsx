import { Html } from '@react-three/drei';
import React from 'react';

/**
 * Avoid `useProgress()` here: it updates while sibling components (e.g. useGLTF in HackerRoom)
 * are still rendering, which triggers React's "Cannot update a component while rendering
 * a different component" warning. A static label is fine for a Suspense fallback.
 */
const CanvasLoader = () => {
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading…
      </p>
    </Html>
  );
};

export default CanvasLoader;
