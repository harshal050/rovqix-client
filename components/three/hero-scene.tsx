"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh, Group } from "three";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetX = pointer.y * 0.25;
    const targetY = pointer.x * 0.35;
    group.current.rotation.x += (targetX - group.current.rotation.x) * delta * 2;
    group.current.rotation.y += (targetY - group.current.rotation.y) * delta * 2;
  });

  return <group ref={group}>{children}</group>;
}

function CoreShape() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.05;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.7}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#e8e8e8"
          emissive="#0a0a0a"
          emissiveIntensity={0.2}
          roughness={0.12}
          metalness={0.9}
          distort={0.38}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function SatelliteShape() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.3;
    mesh.current.rotation.y -= delta * 0.2;
  });

  return (
    <Float speed={2.4} rotationIntensity={1.2} floatIntensity={2.2}>
      <mesh ref={mesh} position={[2.3, -1, -1]} scale={0.55}>
        <torusGeometry args={[1, 0.32, 32, 100]} />
        <MeshDistortMaterial
          color="#9a9a9a"
          roughness={0.18}
          metalness={0.9}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function SecondSatellite() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x -= delta * 0.22;
    mesh.current.rotation.y += delta * 0.18;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
      <mesh ref={mesh} position={[-2.1, 1.3, -0.6]} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#4a4a4a"
          roughness={0.1}
          metalness={0.95}
          distort={0.3}
          speed={2.4}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.6} color="#ffffff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#ffffff" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />
      <ParallaxRig>
        <CoreShape />
        <SatelliteShape />
        <SecondSatellite />
      </ParallaxRig>
      <Sparkles count={60} scale={7} size={2} speed={0.3} opacity={0.4} color="#ffffff" />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 42 }}
      className="!touch-auto"
    >
      <SceneContent />
    </Canvas>
  );
}
