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

  audio.loop = true;
  audio.volume = 0.12;

  const playMusic = async () => {
    try {
      await audio.play();

      // Music successfully started
      document.removeEventListener("click", playMusic);
      document.removeEventListener("scroll", playMusic);
      document.removeEventListener("keydown", playMusic);
      document.removeEventListener("touchstart", playMusic);
    } catch (error) {
      console.log("Waiting for user interaction to start music...");
    }
  };

  // Try immediately
  playMusic();

  // Browser fallback
  document.addEventListener("click", playMusic);
  document.addEventListener("scroll", playMusic);
  document.addEventListener("keydown", playMusic);
  document.addEventListener("touchstart", playMusic);

  return () => {
    document.removeEventListener("click", playMusic);
    document.removeEventListener("scroll", playMusic);
    document.removeEventListener("keydown", playMusic);
    document.removeEventListener("touchstart", playMusic);
  };
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
