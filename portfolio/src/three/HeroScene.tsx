import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function AbstractStructure() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame((state) => {
    if (reduced || !group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={group}>
        {/* Core octahedron */}
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <MeshDistortMaterial
            color="#1a1a1e"
            distort={0.25}
            speed={1.5}
            roughness={0.35}
            metalness={0.7}
            wireframe={false}
          />
        </mesh>
        {/* Wireframe shell */}
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#D51F35" wireframe transparent opacity={0.15} />
        </mesh>
        {/* Outer fragments */}
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 2.2, Math.sin(angle * 0.7) * 0.6, Math.sin(angle) * 2.2]}
              rotation={[angle, angle * 0.5, 0]}
            >
              <boxGeometry args={[0.35, 0.08, 0.55]} />
              <meshStandardMaterial color="#2a2a30" metalness={0.8} roughness={0.3} />
            </mesh>
          );
        })}
        {/* Subtle ring */}
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[2.4, 0.015, 8, 64]} />
          <meshBasicMaterial color="#4A9B8C" transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroScene() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="h-48 w-48 rounded-full border border-white/10" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 3]} intensity={0.9} color="#F1F0EC" />
        <pointLight position={[-3, -2, 2]} intensity={0.4} color="#D51F35" />
        <Suspense fallback={null}>
          <AbstractStructure />
        </Suspense>
      </Canvas>
    </div>
  );
}
