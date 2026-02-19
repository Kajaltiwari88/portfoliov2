"use client";

import { Float } from "@react-three/drei";

export default function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshPhysicalMaterial
          color="#a855f7"
          roughness={0}
          metalness={0.5}
          transmission={1}
          thickness={1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  );
}
