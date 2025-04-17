import React, { useEffect, useRef } from 'react';
import videoFile1 from '../assets/image-enhancer.mp4';
import videoFile2 from '../assets/text-to-image.mp4';
import videoFile3 from '../assets/Backgournd-remover.mp4';
import videoFile4 from '../assets/Object-Remover.mp4';
import videoFile5 from '../assets/AI-replacement.mp4';

// Reusable VideoCard component
const VideoCard = ({ title, description, videoSrc }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Adjust video size for responsiveness
  const adjustVideoSize = () => {
    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;
    if (!video || !video.videoWidth || !video.videoHeight || !videoContainer) return;

    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const containerWidth = videoContainer.clientWidth;
    const calculatedHeight = containerWidth / videoAspectRatio;

    videoContainer.style.height = `${calculatedHeight}px`;
    video.style.width = '100%';
    video.style.height = '100%';
  };

  // Set up event listeners
  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('loadedmetadata', adjustVideoSize);
    window.addEventListener('resize', adjustVideoSize);

    adjustVideoSize();

    return () => {
      video.removeEventListener('loadedmetadata', adjustVideoSize);
      window.removeEventListener('resize', adjustVideoSize);
    };
  }, []);

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
      </div>

      {/* Description */}
      <div className="p-4 pt-0">
        <h3 className="text-2xl font-bold mb-2 font-montserrat">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 font-poppins">{description}</p>

        {/* Download Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.example.app"
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

// Parent component to render five cards
const VideoCardSection = () => {
  const cards = [
    {
      title: 'AI Image Quality Enhancer',
      description: 'Transform blurry photos into crystal clear images with our advanced AI technology.',
      videoSrc: videoFile1,
    },
    {
      title: 'Text-to-Image Generator',
      description: 'Create stunning visuals from simple text descriptions with our powerful AI.',
      videoSrc: videoFile2,
    },
    {
      title: 'Instant Background Remover',
      description: 'Remove backgrounds from any image in seconds with our AI-powered tool.',
      videoSrc: videoFile3,
    },
    {
      title: 'AI Object Remover',
      description: 'Erase unwanted objects, people, or defects from photos like magic.',
      videoSrc: videoFile4,
    },
    {
      title: 'AI Object Replacer',
      description: 'Swap anything in your photos instantly! Change backgrounds, replace objects.',
      videoSrc: videoFile5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-purple-900 to-red-900">
      <div className="flex flex-row flex-wrap justify-center gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div key={index} className="flex-1 min-w-[300px] max-w-[400px]">
            <VideoCard title={card.title} description={card.description} videoSrc={card.videoSrc} />
          </div>
        ))}
      </div>

      {/* Inline CSS for custom styles and animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400&display=swap');

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
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
          .flex-row {
            flex-direction: column;
            gap: 1.5rem;
          }

          .min-w-[300px] {
            min-width: 100%;
            max-width: 100%;
            margin: 0;
          }

          .max-w-md {
            width: 100%;
            border-radius: 0;
          }

          .min-h-screen {
            padding: 0;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .flex-1 {
            flex: 1 1 calc(50% - 1.5rem);
          }
        }

        @media (min-width: 1025px) {
          .flex-1 {
            flex: 1 1 calc(20% - 1.5rem);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoCardSection;