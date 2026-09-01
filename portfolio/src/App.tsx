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

    audio.volume = 0.2;
    audio.loop = true;
    audio.muted = false;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay may be blocked until the user interacts with the page.
      }
    };

    playAudio();
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/spiderman_homecoming.mp3" preload="auto" />
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
