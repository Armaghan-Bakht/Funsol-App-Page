import Girl1 from "../assets/Girl1.png";
import Girl2 from "../assets/Car.jpg";
import Girl3 from "../assets/Sea-Girl.jpg";
import stars from "../assets/stars.png";
import contact from "../assets/CONTACTS.png";

import { Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";

const OneCardPage = () => {
  const promptImageData = [
    { text: "Create an image of a Beautiful Girl", image: Girl1 },
    { text: "Create an image of a realistic Car", image: Girl2 },
    {
      text: "A girl is lying on a skateboard, skating in the ocean.",
      image: Girl3,
    },
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tapEffect, setTapEffect] = useState(false); // New state for tap effect

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100;
    const currentText = promptImageData[placeholderIndex].text;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((placeholderIndex + 1) % promptImageData.length);
        }
      } else {
        setPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // When text is fully typed
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => {
            setTapEffect(true); // Trigger tap effect
            setCurrentImageIndex(placeholderIndex); // Update image
            setIsDeleting(true);
            // Reset tap effect after animation
            setTimeout(() => setTapEffect(false), 300);
          }, 800);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-4 sm:p-8 h-screen">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-pink-400 to-[#C74EC8] rounded-full blur-[80px] sm:blur-[130px] opacity-60 z-0 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#8181FF] rounded-full blur-[80px] sm:blur-[120px] opacity-50 z-0 animate-blob"></div>

      <div className="text-center relative z-10 w-full max-w-4xl">
        <div className="relative mx-auto">
          {/* Dynamic Image */}
          <div className="bg-gradient-to-r p-1 rounded-xl h-[400px] sm:h-[380px] w-full max-w-[650px] mx-auto overflow-hidden">
            <img
              src={promptImageData[currentImageIndex].image}
              alt="Generated Prompt"
              className="w-full h-full object-cover object-center rounded-xl transition-opacity duration-700"
            />
          </div>

          {/* Search Bar */}
          <div className="absolute bottom-4 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px]">
            <div className="relative flex items-center">
              <input
                className="w-full h-12 sm:h-14 pl-4 pr-4 text-base bg-white rounded-full border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                type="text"
                placeholder={placeholder}
              />
              <button
                className={`cursor-pointer absolute right-1.5 h-9 sm:h-11 px-5 rounded-full bg-gradient-to-r from-violet-800 to-violet-500 hover:from-violet-600 hover:to-violet-700 text-white font-medium flex items-center transition-all duration-300 group ${
                  tapEffect ? "scale-95 opacity-80" : ""
                }`}
              >
                <Sparkles className="mr-2 h-4 w-4 animate-pulse-scale group-hover:animate-none group-hover:scale-110 transition-transform" />
                Create
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="z-20 text-white mx-auto py-1 sm:py-5">
          <div className="flex items-center justify-center py-6">
            <div className="w-1/2 flex justify-end pr-6">
              <div className="flex flex-col items-center text-center space-y-1">
                <img src={stars} alt="Unlimited" className="w-6 h-6" />
                <span className="text-[12px] text-[#CECED1]">
                  Unlimited Generation
                </span>
              </div>
            </div>
            <div className="w-px h-6 bg-[#3B3B3D]"></div>
            <div className="w-1/2 flex justify-start pl-8">
              <div className="flex flex-col items-center text-center space-y-1">
                <img src={contact} alt="Quick Response" className="w-6 h-6" />
                <span className="text-[12px] text-[#CECED1]">
                  Quick Response
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text + Button */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white sm:mt-8">
            Text To Image
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 max-w-[600px] mx-auto text-sm sm:text-base px-4">
            Effortlessly transform your words into stunning AI-generated art,
            unique illustrations, & creative visuals within seconds!
          </p>
          <button className="mt-4 sm:mt-6 bg-gradient-to-r from-[#C74EC8] to-[#8181FF] text-white font-light py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:from-[#D15FD1] hover:to-[#9191FF] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C74EC8] focus:ring-opacity-50 text-sm sm:text-base">
            Generate Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneCardPage;