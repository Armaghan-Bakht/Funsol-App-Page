import Girl from '../assets/Girl.png';
import divBackground from "../assets/Button-background.png";

const OneCardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden p-4 sm:p-8" >
      {/* 🔴 Pink Top-Left Blob - Responsive sizing */}
      <div className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-pink-400 to-[#C74EC8] rounded-full blur-[80px] sm:blur-[130px] opacity-60 z-0"></div>

      {/* 🔵 Blue Bottom-Right Blob - Responsive sizing */}
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#8181FF] rounded-full blur-[80px] sm:blur-[120px] opacity-50 z-0"></div>

      <div className="text-center relative z-10 w-full max-w-4xl">
        {/* Image and Prompt Section */}
        <div className="relative mx-auto">
          <div className="bg-gradient-to-r p-1 rounded-xl h-[200px] sm:h-[380px] w-full max-w-[650px] mx-auto overflow-hidden">
            <img
              src={Girl}
              alt="Generated Image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

            {/* Prompt button - Responsive positioning */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] ">
              <div
                style={{
                  backgroundImage: `url(${divBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="text-white text-xs sm:text-sm py-3 sm:py-5 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-md w-full sm:w-sm mx-auto"
              >
                Close Up On Beautiful Girl Portrait Near Tree
              </div>
            </div>
          </div>

        {/* Text Section - Responsive typography */}
        <h1 className="text-2xl sm:text-4xl font-bold text-white mt-6 sm:mt-8">Text To Image</h1>
        <p className="text-gray-400 mt-2 sm:mt-4 max-w-[600px] mx-auto text-sm sm:text-base px-4">
          Effortlessly transform your words into stunning AI-generated art, unique illustrations, & creative visuals within seconds!
        </p>

        {/* Generate Button - Responsive sizing */}
        <button className="mt-4 sm:mt-6 bg-gradient-to-r from-[#C74EC8] to-[#8181FF] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:from-[#D15FD1] hover:to-[#9191FF] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C74EC8] focus:ring-opacity-50 text-sm sm:text-base">
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default OneCardPage;