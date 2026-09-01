import { useEffect, useRef, useState } from "react";
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
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;

    const startMusic = () => {
      if (!audio.paused) return;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          removeListeners();
        })
        .catch(() => {
          // Browser blocked autoplay.
          // The sound button remains available.
        });
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("keydown", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    // Attempt autoplay.
    startMusic();

    // Start after the first user interaction if autoplay is blocked.
    window.addEventListener("pointerdown", startMusic);
    window.addEventListener("keydown", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      removeListeners();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.12;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Browser refused playback.
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/spiderman_homecoming.mp3"
        preload="auto"
        loop
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

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 border border-white/15 bg-black/80 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md transition-all duration-300 hover:border-red-500/60 hover:text-white"
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isPlaying ? "bg-red-500" : "bg-white/30"
          }`}
        />

        <span>{isPlaying ? "Sound On" : "Sound Off"}</span>
      </button>
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
