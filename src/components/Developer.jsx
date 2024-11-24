import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const IsFixedModel = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/developer.glb');

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: dancingAnimation } = useFBX(
    '/models/animations/dancing.fbx'
  );
  const { animations: hiphopAnimation } = useFBX(
    '/models/animations/hiphop.fbx'
  );
  const { animations: sillyDanceAnimation } = useFBX(
    '/models/animations/sillydance.fbx'
  );

  idleAnimation[0].name = 'idle';
  dancingAnimation[0].name = 'dance';
  hiphopAnimation[0].name = 'hiphop';
  sillyDanceAnimation[0].name = 'silly-dance';

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      dancingAnimation[0],
      hiphopAnimation[0],
      sillyDanceAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();

    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);
  return (
    <group {...props} dispose={null} ref={group}>
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials['Wolf3D_Eye.023']}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials['Wolf3D_Eye.023']}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials['Wolf3D_Beard.015']}
        skeleton={nodes.Wolf3D_Beard.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials['Wolf3D_Body.015']}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials['Wolf3D_Glasses.015']}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials['Wolf3D_Skin.015']}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials['Wolf3D_Outfit_Bottom.015']}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials['Wolf3D_Outfit_Footwear.015']}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials['Wolf3D_Outfit_Top.015']}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials['Wolf3D_Teeth.008']}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <primitive object={nodes.mixamorigHips} />
    </group>
  );
};

useGLTF.preload('/models/developer.glb');

export default IsFixedModel;
