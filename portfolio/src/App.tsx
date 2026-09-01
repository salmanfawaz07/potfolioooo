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

  // Start music after the first real user interaction.
  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;

      if (!audio || !audio.paused) return;

      audio.volume = 0.12;
      audio.loop = true;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          removeListeners();
        })
        .catch(() => {
          // Browser may still block playback.
          // The SOUND button below can be used manually.
        });
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("keydown", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("pointerdown", startMusic, { passive: true });
    window.addEventListener("keydown", startMusic);
    window.addEventListener("touchstart", startMusic, { passive: true });

    return removeListeners;
  }, []);

  // Keep React state synchronized with the actual audio element.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.12;
      audio.loop = true;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to play audio:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Background music */}
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

      {/* Cinematic sound control */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          flex
          items-center
          gap-3
          border
          border-white/15
          bg-black/75
          px-4
          py-3
          text-[10px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-white/70
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-red-500/60
          hover:text-white
        "
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

      <Route
        path="/work/:id"
        element={<ProjectCaseStudy />}
      />
    </Routes>
  );
}
