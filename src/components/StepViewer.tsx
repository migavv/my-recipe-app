import { useRef, useState } from "react";
import { Recipe } from "../data/recipes";
import { AnimatePresence, motion } from "framer-motion";

export default function StepViewer({ recipe }: { recipe: Recipe }) {
  const [index, setIndex] = useState(0);
  const step = recipe.steps[index];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const progressPercent = ((index + 1) / recipe.steps.length) * 100;

  return (
    <div className="relative bg-gradient-to-b from-pink-100 via-yellow-50 to-blue-100 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col items-center gap-6 sm:gap-8 max-w-full sm:max-w-xl mx-auto border-8 border-pink-200">
      {/* Background Decorations */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-3xl sm:text-4xl">🍓</div>
      <div className="absolute top-6 right-4 text-3xl sm:text-5xl">🌈</div>
      <div className="absolute bottom-6 left-4 text-3xl sm:text-4xl">🍳</div>
      <div className="absolute bottom-4 right-4 text-3xl sm:text-4xl">🍔</div>

      {/* Progress Bar */}
      <div className="w-full z-10">
        <div className="h-3 sm:h-4 w-full bg-white rounded-full overflow-hidden shadow-inner mb-4 sm:mb-6 border-2 border-yellow-300">
          <div
            className="h-full bg-gradient-to-r from-green-300 to-green-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Animated Step Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center gap-4 sm:gap-6 z-10"
        >
          {/* Imagen SUPER RESPONSIVE */}
          <div className="w-full max-w-[320px] sm:max-w-[400px] aspect-square overflow-hidden rounded-full border-[8px] sm:border-[10px] border-yellow-300 shadow-lg bg-white p-2">
            <img
              src={step.image}
              alt={step.text}
              className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Texto RESPONSIVO */}
          <p className="text-2xl sm:text-3xl font-bold text-center text-pink-600 font-comic px-4">
            ✨ {step.text}
          </p>

          {/* Botón Escuchar RESPONSIVO */}
          {step.audio && (
            <>
              <audio ref={audioRef}>
                <source src={step.audio} type="audio/mpeg" />
              </audio>
              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                  }
                }}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-lg sm:text-2xl px-6 py-3 sm:px-7 sm:py-4 rounded-full shadow-xl transition-transform hover:scale-110"
              >
                🔊 Escuchar
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botones navegación RESPONSIVOS */}
      <div className="flex gap-4 sm:gap-6 mt-6 z-10">
        {/* Back */}
        <button
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          aria-label="Previous step"
          className="bg-gradient-to-r from-purple-300 to-purple-400 hover:from-purple-400 hover:to-purple-500 disabled:from-purple-100 disabled:to-purple-200 text-white text-2xl sm:text-4xl px-5 py-3 sm:px-7 sm:py-4 rounded-full shadow-xl transition-all hover:scale-110 disabled:opacity-50"
        >
          ←
        </button>

        {/* Next */}
        <button
          disabled={index === recipe.steps.length - 1}
          onClick={() => setIndex(index + 1)}
          aria-label="Next step"
          className="bg-gradient-to-r from-green-300 to-green-400 hover:from-green-400 hover:to-green-500 disabled:from-green-100 disabled:to-green-200 text-white text-2xl sm:text-4xl px-5 py-3 sm:px-7 sm:py-4 rounded-full shadow-xl transition-all hover:scale-110 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}
