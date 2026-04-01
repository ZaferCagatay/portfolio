import React, { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

const MONITOR_SCREEN_NAME = 'monitor-screen';

const DemoComputer = (props) => {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/computer.glb');

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  const videoSrc = props.texture ?? '/textures/project/project1.mp4';
  const txt = useVideoTexture(videoSrc);

  useEffect(() => {
    if (txt) txt.flipY = false;
  }, [txt]);

  useEffect(() => {
    let monitor;
    clonedScene.traverse((child) => {
      if (child.isMesh && child.name === MONITOR_SCREEN_NAME) {
        monitor = child;
      }
    });
    if (!monitor) return;

    const previous = monitor.material;
    monitor.material = new THREE.MeshBasicMaterial({
      map: txt,
      toneMapped: false,
    });
    if (previous) previous.dispose?.();
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
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
};

export default DemoComputer;
