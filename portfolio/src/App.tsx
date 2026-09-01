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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.12;

    const startMusic = async () => {
      try {
        await audio.play();

        setIsPlaying(true);
        setHasInteracted(true);

        removeInteractionListeners();
      } catch {
        // Browser blocked autoplay.
        // Music will start after user interaction.
      }
    };

    const handleInteraction = () => {
      setHasInteracted(true);
      startMusic();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    // Try autoplay first.
    startMusic();

    // Fallback for browser autoplay restrictions.
    window.addEventListener("click", handleInteraction);
    window.addEventListener("pointerdown", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      removeInteractionListeners();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.log("Unable to start music:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Background Music */}
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

      {/* Sound Control */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          items-center
          gap-3
          border
          border-white/15
          bg-black/70
          px-4
          py-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/80
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-red-500/50
          hover:text-white
        "
      >
        {/* Sound indicator */}
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-red-500
                opacity-60
              "
            />
          )}

          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              isPlaying ? "bg-red-500" : "bg-white/30"
            }`}
          />
        </span>

        {/* Label */}
        <span>
          {isPlaying
            ? "Sound On"
            : hasInteracted
              ? "Sound Off"
              : "Enable Sound"}
        </span>
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
