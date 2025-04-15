import Gif from "./assets/OurGif.gif";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4">
      {/* Enhanced Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 neon-text text-center">
        TEXT TO IMAGE GENERATOR
      </h2>

      <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center font-extrabold mb-8 drop-shadow-lg">
        <img src={Gif} alt="Deep Brand" className="w-64 md:w-96 rounded-lg shadow-xl mb-6" />
        <a
  href="https://github.com/Armaghan-Bakht" // 👈 replace with your GitHub URL
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl shadow-lg group hover:scale-105 hover:shadow-2xl">
    <span className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 transition-all duration-500 ease-in-out"></span>
    <span className="relative z-10 flex items-center gap-2 animate-pulse">
      Download
    </span>
  </button>
</a>

      </h1>

      {/* Neon Glow & Flicker Styles */}
      <style>{`
        .neon-text {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #ff00ff,
            0 0 20px #ff00ff,
            0 0 40px #ff00ff,
            0 0 80px #ff00ff;
          animation: flicker 2.5s infinite alternate;
        }

        @keyframes flicker {
          0%   { opacity: 1; text-shadow: 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff; }
          10%  { opacity: 0.9; }
          20%  { opacity: 1; }
          30%  { opacity: 0.8; text-shadow: 0 0 5px #fff, 0 0 15px #ff00ff, 0 0 30px #ff00ff; }
          40%  { opacity: 1; }
          50%  { opacity: 0.95; text-shadow: 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 25px #ff00ff; }
          60%  { opacity: 1; }
          70%  { opacity: 0.9; }
          80%  { opacity: 1; }
          90%  { opacity: 0.85; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
