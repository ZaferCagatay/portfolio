import React, { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

const MONITOR_SCREEN_NAME = 'monitor-screen';

const DemoComputer = ({ texture, ...groupProps }) => {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/computer.glb');

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  const videoSrc = texture ?? '/textures/project/project1.mp4';
  const txt = useVideoTexture(videoSrc);

  useEffect(() => {
    if (!txt) return;

    txt.flipY = false;
    txt.colorSpace = THREE.SRGBColorSpace;
    txt.minFilter = THREE.LinearFilter;
    txt.magFilter = THREE.LinearFilter;
    txt.generateMipmaps = false;
    txt.needsUpdate = true;
  }, [txt]);

  useEffect(() => {
    let monitor;
    clonedScene.traverse((child) => {
      if (child.isMesh && child.name === MONITOR_SCREEN_NAME) {
        monitor = child;
      }
    });
    if (!monitor) return;

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: txt,
      toneMapped: false,
    });
    monitor.material = screenMaterial;

    return () => {
      screenMaterial.dispose();
    };
  }, [clonedScene, txt]);

  useEffect(() => {
    return () => {
      clonedScene.traverse((obj) => {
        if (obj.isMesh) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose?.());
          } else {
            obj.material?.dispose?.();
          }
        }
        obj.geometry?.dispose?.();
      });
    };
  }, [clonedScene]);

  useGSAP(() => {
    gsap.from(groupRef.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [videoSrc, clonedScene]);

  return (
    <group ref={groupRef} {...groupProps} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
};

export default DemoComputer;
