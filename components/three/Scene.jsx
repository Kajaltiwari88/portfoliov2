"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { useRef } from "react";
import FloatingSphere from "./FloatingSphere";
import Lights from "./Lights";

function CameraRig() {
  const ref = useRef();

  useFrame((state) => {
    const { pointer } = state;

    ref.current.position.x = pointer.x * 2;
    ref.current.position.y = pointer.y * 2;
  });

  return (
    <group ref={ref}>
      <FloatingSphere />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 2]}>
      <Environment preset="night" />
      <Lights />
      <Stars radius={50} depth={50} count={3000} factor={4} fade />
      <CameraRig />
    </Canvas>
  );
}
