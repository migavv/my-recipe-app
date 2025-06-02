import { useRef, useState } from "react";
import { Recipe } from "../data/recipes";
import { AnimatePresence, motion } from "framer-motion";

export default function StepViewer({ recipe }: { recipe: Recipe }) {
  const [index, setIndex] = useState(0);
  const step = recipe.steps[index];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const progressPercent = ((index + 1) / recipe.steps.length) * 100;

  return (
    <div className="relative bg-gradient-to-b from-pink-100 via-yellow-50 to-blue-100 rounded-3xl shadow-2xl p-4 flex flex-col items-center gap-4 max-w-full sm:max-w-sm mx-auto border-4 border-pink-200">
      
      {/* Background Decorations */}
      <div className="absolute top-2 left-2 text-2xl">🍓</div>
      <div className="absolute top-4 right-2 text-2xl">🌈</div>
      <div className="absolute bottom-4 left-2 text-2xl">🍳</div>
      <div className="absolute bottom-2 right-2 text-2xl">🍔</div>

      {/* Progress Bar */}
      <div className="w-full z-10">
        <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner mb-4 border border-yellow-300">
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
          className="w-full flex flex-col items-center gap-3 z-10"
        >
          {/* Imagen más pequeña */}
          <div className="w-full max-w-[200px] aspect-square overflow-hidden rounded-full border-[4px] border-yellow-300 shadow-lg bg-white p-2">
            <img
              src={step.image}
              alt={step.text}
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Texto más pequeño */}
          <p className="text-xl sm:text-2xl font-bold text-center text-pink-600 font-comic px-2">
            ✨ {step.text}
          </p>

          {/* Botón Escuchar */}
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
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-base sm:text-lg px-5 py-2 rounded-full shadow-md transition-transform hover:scale-105"
              >
                🔊 Escuchar
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botones navegación compactos */}
      <div className="flex gap-3 mt-4 z-10">
        <button
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          aria-label="Previous step"
          className="bg-gradient-to-r from-purple-300 to-purple-400 hover:from-purple-400 hover:to-purple-500 disabled:from-purple-100 disabled:to-purple-200 text-white text-lg sm:text-xl px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 disabled:opacity-50"
        >
          ←
        </button>

        <button
          disabled={index === recipe.steps.length - 1}
          onClick={() => setIndex(index + 1)}
          aria-label="Next step"
          className="bg-gradient-to-r from-green-300 to-green-400 hover:from-green-400 hover:to-green-500 disabled:from-green-100 disabled:to-green-200 text-white text-lg sm:text-xl px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}
