import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Cube from '../components/Cube';
import HackerRoom from '../components/HackerRoom';
import HeroCamera from '../components/HeroCamera';
import ReactLogo from '../components/ReactLogo';
import Ring from '../components/Ring';
import Target from '../components/Target';
import ViewportCanvas from '../components/ViewportCanvas';

const HeroScene = ({ isMobile, sizes }) => {
  return (
    <ViewportCanvas
      defaultVisible
      isMobile={isMobile}
      className="h-full w-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <HeroCamera isMobile={isMobile}>
          <HackerRoom
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0, -Math.PI, 0]}
          />
        </HeroCamera>

        <group>
          <Target position={sizes.targetPosition} />
          <ReactLogo position={sizes.reactLogoPosition} />
          <Cube position={sizes.cubePosition} />
          <Ring position={sizes.ringPosition} />
        </group>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </ViewportCanvas>
  );
};

export default HeroScene;
