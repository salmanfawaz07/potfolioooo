import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/sections/Hero";
import { Profile } from "@/sections/Profile";
import { Capabilities } from "@/sections/Capabilities";
import { SelectedWork } from "@/sections/SelectedWork";
import { Evidence } from "@/sections/Evidence";
import { BuildLog } from "@/sections/BuildLog";
import { Journey } from "@/sections/Journey";
import { Contact } from "@/sections/Contact";
import { ProjectCaseStudy } from "@/pages/ProjectCaseStudy";

function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.volume = 0.12;
  audio.loop = true;

  const startAudio = async () => {
    try {
      await audio.play();
      cleanup();
    } catch (error) {
      console.log("Audio could not start:", error);
    }
  };

  const cleanup = () => {
    window.removeEventListener("pointerdown", startAudio);
    window.removeEventListener("keydown", startAudio);
    window.removeEventListener("scroll", startAudio);
    window.removeEventListener("touchstart", startAudio);
  };

  // Try autoplay first
  startAudio();

  // If browser blocks it, first interaction starts it
  window.addEventListener("pointerdown", startAudio, { once: true });
  window.addEventListener("keydown", startAudio, { once: true });
  window.addEventListener("scroll", startAudio, { once: true });
  window.addEventListener("touchstart", startAudio, { once: true });

  return cleanup;
}, []);
  return (
    <>
      <audio
  ref={audioRef}
  src="/spiderman_homecoming.mp3"
  preload="auto"
/>
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Capabilities />
        <SelectedWork />
        <Evidence />
        <BuildLog />
        <Journey />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:id" element={<ProjectCaseStudy />} />
    </Routes>
  );
}
