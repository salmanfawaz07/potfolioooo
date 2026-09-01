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

function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        audio.volume = 0.12;
        audio.loop = true;

        await audio.play();

        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
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

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
        className="
          fixed
          bottom-6
          right-6
          z-[99999]
          flex
          items-center
          gap-3
          border
          border-red-500/30
          bg-black/80
          px-4
          py-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/80
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-red-500
          hover:text-white
        "
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isPlaying ? "bg-red-500 animate-pulse" : "bg-white/30"
          }`}
        />

        <span>
          {isPlaying ? "Sound On" : "Sound Off"}
        </span>
      </button>
    </>
  );
}

function HomePage() {
  return (
    <>
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
    <>
      {/* Global music — stays mounted across routes */}
      <GlobalAudio />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/work/:id"
          element={<ProjectCaseStudy />}
        />
      </Routes>
    </>
  );
}
