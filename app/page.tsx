"use client";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="main" className="justify-center bg-black"></div>
    </div>
  );
}
