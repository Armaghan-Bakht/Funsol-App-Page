import Girl1 from "../assets/Girl1.png";
import Girl2 from "../assets/Car.jpg";
import Girl3 from "../assets/Sea-Girl.jpg";
import stars from '../assets/stars.png'
import contact from "../assets/contacts.png"

import { Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";
// import divBackground from "../assets/Button-background.png";
const OneCardPage = () => {
  const promptImageData = [
    { text: "Create an image of a Beautiful Girl", image: Girl1 },
    { text: "Create an image of a realistic Car", image: Girl2 },
    { text: "A girl is lying on a skateboard, skating in the ocean.", image: Girl3 },
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [showImage, setShowImage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

        // Jab NEW text poora ho gaya, tab image index update karo
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => {
            setCurrentImageIndex(placeholderIndex); // Show image of current text
            setIsDeleting(true);
          }, 800);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-4 sm:p-8">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-pink-400 to-[#C74EC8] rounded-full blur-[80px] sm:blur-[130px] opacity-60 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#8181FF] rounded-full blur-[80px] sm:blur-[120px] opacity-50 z-0"></div>

      <div className="text-center relative z-10 w-full max-w-4xl">
        <div className="relative mx-auto">
          {/* 🔁 Dynamic Image based on placeholder */}
          <div className="bg-gradient-to-r p-1 rounded-xl h-[200px] sm:h-[380px] w-full max-w-[650px] mx-auto overflow-hidden">
          <img
  src={promptImageData[currentImageIndex].image}
  alt="Generated Prompt"
  className="w-full h-full object-cover object-center rounded-xl transition-opacity duration-700"
/>

          </div>

          {/* Search Bar */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px]">
            <div className="relative flex items-center">
              <input
                className="w-full h-14 pl-4 pr-4 text-base bg-white rounded-full border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                type="text"
                placeholder={placeholder}
              />
              <button className="cursor-pointer absolute right-1.5 h-11 px-5 rounded-full bg-gradient-to-r from-violet-800 to-violet-500 hover:from-violet-600 hover:to-violet-700 text-white font-medium flex items-center transition-all duration-300 group">
                <Sparkles className="mr-2 h-4 w-4 animate-pulse-scale group-hover:animate-none group-hover:scale-110 transition-transform" />
                Create
              </button>
            </div>
          </div>
        </div>


{/* ___________  */}
<div className=" z-20 text-white  mx-auto py-5">
  <div className="flex justify-around ">
    <div>
      <div><img src={stars} className="mx-auto" alt="" /></div>
      <div className="text-[12px] text-[#CECED1] mt-1">Unlimited Generation</div>
    </div>
    <div className="text-white text-2xl mt-2 font-extralight">|</div>
    <div>
    <div><img src={contact} className="mx-auto" alt="" /></div>
    <div className="text-[12px] text-[#CECED1] mt-1">Quick Response</div>
    </div>
  </div>
</div>


        {/* Text + Button */}
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
  );
};

export default OneCardPage;
