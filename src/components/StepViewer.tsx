import {useRef, useState} from "react";
import { Recipe } from "../data/recipes";
import {AnimatePresence, motion} from "framer-motion";

export default function StepViewer({ recipe }: { recipe: Recipe }) {
    const [index, setIndex] = useState(0);
    const step = recipe.steps[index];
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const progressPercent = ((index + 1) / recipe.steps.length) * 100;

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6">
            {/* Progress Bar */}
            <div className="w-full">
                <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div
                        className="h-full bg-green-400 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Animated Step Section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex flex-col items-center gap-4"
                >
                    <img
                        src={step.image}
                        alt={step.text}
                        className="rounded-xl w-full max-h-64 object-contain border-4 border-yellow-200"
                    />

                    <p className="text-2xl font-semibold text-center text-gray-800">
                        ✨ {step.text}
                    </p>

                    {/* Custom Audio Replay Button */}
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
                                className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-lg shadow"
                            >
                                🔊
                            </button>
                        </>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4 mt-4">
                {/* Back */}
                <button
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    aria-label="Previous step"
                    className="bg-purple-400 hover:bg-purple-500 disabled:bg-purple-200 text-white text-2xl px-6 py-3 rounded-full shadow"
                >
                    ←
                </button>

                {/* Next */}
                <button
                    disabled={index === recipe.steps.length - 1}
                    onClick={() => setIndex(index + 1)}
                    aria-label="Next step"
                    className="bg-green-400 hover:bg-green-500 disabled:bg-green-200 text-white text-2xl px-6 py-3 rounded-full shadow"
                >
                    →
                </button>
            </div>
        </div>
    );
}
