"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Canvas>
        <OrbitControls maxDistance={1} />
        <OrbitControls minDistance={1} />
        <OrbitControls autoRotate={true} />
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.5} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
      </Canvas>
    </>
  );
}
