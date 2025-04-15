import React, { useEffect, useRef, useState } from 'react';
import videoFile1 from '../assets/image-enhancer.mp4'; // First video
import videoFile2 from '../assets/text-to-image.mp4'; // Second video (replace with actual file)
import videoFile3 from '../assets/Backgournd-remover.mp4'; // Second video (replace with actual file)
import videoFile4 from '../assets/Object-Remover.mp4';
import videoFile5 from '../assets/AI-replacement.mp4';

import audioFile from '../assets/song.mp3'; // Shared audio file

// Reusable VideoCard component
const VideoCard = ({ title, description, videoSrc, audioSrc }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const clickableDivRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [steps, setSteps] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [hasAudioStarted, setHasAudioStarted] = useState(false);

  console.log(gameEnded);

  // Handle video progress and steps
  const handleProgress = () => {
    const video = videoRef.current;
    const playedSeconds = video.currentTime;

    if (steps === 0 && playedSeconds >= 6.9) {
      video.currentTime = 6.8;
      setIsButtonEnabled(true);
    } else if (steps === 1 && playedSeconds >= 12.5) {
      video.currentTime = 12.4;
      setIsButtonEnabled(true);
    } else if (steps >= 2 && playedSeconds >= 12.41) {
      setSteps(0);
      setIsButtonEnabled(false);
      video.currentTime = 0;
      video.muted = true;
      setGameEnded(true);
      handleCTA();
    }
  };

  // Handle user clicks on the video overlay
  const handleClick = () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!hasAudioStarted) {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          console.log("Audio started playing");
          setHasAudioStarted(true);
        })
        .catch((e) => {
          console.error("Audio playback failed:", e);
        });
    }

    if (steps === 0) {
      video.currentTime = 6.8;
      setSteps(1);
      setIsButtonEnabled(false);
    } else if (steps === 1) {
      video.currentTime = 12.4;
      setSteps(2);
      setIsButtonEnabled(false);
    } else if (steps === 2) {
      setSteps(3);
      setIsButtonEnabled(false);
      video.currentTime = 0;
      setGameEnded(true);
      handleCTA();
    }
  };

  // CTA function (MRAID or fallback)
  const handleCTA = () => {
    const appStoreUrl = "https://play.google.com/store/apps/details?id=com.example.app"; // Replace with your app URL
    if (typeof window.mraid !== "undefined" && window.mraid.open) {
      window.mraid.open(appStoreUrl);
      console.log("MRAID open called");
    } else {
      window.open(appStoreUrl, "_blank");
    }
  };

  // Adjust video size for responsiveness and remove gap
  const adjustVideoSize = () => {
    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;
    if (!video || !video.videoWidth || !video.videoHeight || !videoContainer) return;

    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const containerWidth = videoContainer.clientWidth;
    const calculatedHeight = containerWidth / videoAspectRatio;

    videoContainer.style.height = `${calculatedHeight}px`;
    video.style.width = "100%";
    video.style.height = "100%";
  };

  // Set up event listeners
  useEffect(() => {
    const video = videoRef.current;
    const clickableDiv = clickableDivRef.current;

    video.addEventListener("timeupdate", handleProgress);
    video.addEventListener("loadedmetadata", adjustVideoSize);
    clickableDiv.addEventListener("click", handleClick);
    window.addEventListener("resize", adjustVideoSize);

    adjustVideoSize();

    return () => {
      video.removeEventListener("timeupdate", handleProgress);
      video.removeEventListener("loadedmetadata", adjustVideoSize);
      clickableDiv.removeEventListener("click", handleClick);
      window.removeEventListener("resize", adjustVideoSize);
    };
  }, [steps]);

  return (
    <div className="relative bg-gray-900 text-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-purple-500/30 animate-fadeIn">
      {/* Video Container */}
      <div ref={videoContainerRef} className="relative w-full rounded-t-xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-t-lg border-b border-purple-600/50"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        ></video>
        <div
          ref={clickableDivRef}
          className={`absolute top-0 left-0 w-full h-full cursor-pointer z-10 ${
            isButtonEnabled ? "" : "hidden"
          }`}
        ></div>
      </div>

      {/* Audio (hidden, for background sound) */}
      <audio ref={audioRef} loop muted>
        <source src={audioSrc} type="audio/mp3" />
      </audio>

      {/* Description - No padding-top to remove gap */}
      <div className="p-4 pt-0">
        <h3 className="text-2xl font-bold mb-2 font-montserrat">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 font-poppins">{description}</p>

        {/* Download Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.example.app" // Replace with your app URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <button className="w-full py-3 px-6 text-white font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-lg hover:scale-105 transition-transform duration-300 animate-pulseGlow shadow-lg shadow-pink-500/30">
            Download
          </button>
        </a>
      </div>
    </div>
  );
};

// Parent component to render three cards
const VideoCardSection = () => {
  const cards = [
    {
        title: "AI Image Quality Enhancer",
        description: "Transform blurry photos into crystal clear images with our advanced AI technology.",
      videoSrc: videoFile1,
      audioSrc: audioFile,
    },
    {
        title: "Text-to-Image Generator",
        description: "Create stunning visuals from simple text descriptions with our powerful AI.",
      videoSrc: videoFile2,
      audioSrc: audioFile,
    },
    {
        title: "Instant Background Remover",  // Choose any title above
        description: "Remove backgrounds from any image in seconds with our AI-powered tool.",
      videoSrc: videoFile3,
      audioSrc: audioFile,
    },
    {
        title: "AI Object Remover",                   // Pick any title above
        description: "Erase unwanted objects, people, or defects from photos like magic.",
      videoSrc: videoFile4,
      audioSrc: audioFile,
    },
    {
        title: "AI Object Replacer",  
        description: "Swap anything in your photos instantly! Change backgrounds, replace objects.",
      videoSrc: videoFile5,
      audioSrc: audioFile,
    },
  
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-purple-900 to-red-900 space-y-6">
      {cards.map((card, index) => (
        <VideoCard
          key={index}
          title={card.title}
          description={card.description}
          videoSrc={card.videoSrc}
          audioSrc={card.audioSrc}
        />
      ))}

      {/* Inline CSS for custom styles and animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400&display=swap');

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .hidden {
          display: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-pulseGlow {
          animation: pulseGlow 2s infinite;
        }

        @media (max-width: 640px) {
          .max-w-md {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .min-h-screen {
            padding: 0;
          }

          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoCardSection;