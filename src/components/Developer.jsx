import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const ANIM_PATH = {
  idle: '/models/animations/idle.fbx',
  dance: '/models/animations/dancing.fbx',
  hiphop: '/models/animations/hiphop.fbx',
  'silly-dance': '/models/animations/sillydance.fbx',
};

const FADE = 0.5;

const IsFixedModel = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/developer.glb');

  const { animations: idleAnimation } = useFBX(ANIM_PATH.idle);
  idleAnimation[0].name = 'idle';

  const { actions, mixer } = useAnimations([idleAnimation[0]], group);
  const clipCache = useRef({});
  const loaderRef = useRef(new FBXLoader());
  const dynamicActions = useRef({});

  useEffect(() => {
    const idleAction = actions?.idle;
    if (!mixer || !idleAction) return undefined;

    let cancelled = false;

    const fadeOutOthers = (activeName) => {
      if (activeName !== 'idle') idleAction.fadeOut(FADE);
      Object.entries(dynamicActions.current).forEach(([name, action]) => {
        if (name !== activeName && action) action.fadeOut(FADE);
      });
    };

    const playIdle = () => {
      Object.values(dynamicActions.current).forEach((a) => {
        if (a) a.fadeOut(FADE);
      });
      idleAction.reset().fadeIn(FADE).play();
    };

    const loadClip = (name) =>
      new Promise((resolve, reject) => {
        if (clipCache.current[name]) {
          resolve(clipCache.current[name]);
          return;
        }
        loaderRef.current.load(
          ANIM_PATH[name],
          (fbx) => {
            const clip = fbx.animations[0];
            clip.name = name;
            clipCache.current[name] = clip;
            resolve(clip);
          },
          undefined,
          reject
        );
      });

    const run = async () => {
      if (animationName === 'idle') {
        playIdle();
        return;
      }

      try {
        const clip = await loadClip(animationName);
        if (cancelled) return;

        fadeOutOthers(animationName);

        let action = dynamicActions.current[animationName];
        if (!action) {
          action = mixer.clipAction(clip);
          dynamicActions.current[animationName] = action;
        }
        action.reset().fadeIn(FADE).play();
      } catch (e) {
        console.error('Failed to load animation', animationName, e);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [animationName, actions?.idle, mixer]);

  useEffect(() => {
    return () => {
      mixer?.stopAllAction?.();
    };
  }, [mixer]);

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

export default IsFixedModel;
