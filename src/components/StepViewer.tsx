import { useState } from "react";
import { Recipe } from "../data/recipes";

export default function StepViewer({ recipe }: { recipe: Recipe }) {
    const [index, setIndex] = useState(0);
    const step = recipe.steps[index];

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6">
            <img
                src={step.image}
                alt={step.text}
                className="rounded-xl w-full max-h-64 object-contain border-4 border-yellow-200"
            />

            <p className="text-2xl font-semibold text-center text-gray-800">
                ✨ {step.text}
            </p>

            {step.audio && (
                <audio controls className="w-full mt-2">
                    <source src={step.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}

            <div className="flex gap-4 mt-4">
                <button
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    className="bg-purple-300 hover:bg-purple-400 disabled:bg-purple-100 text-white text-lg px-6 py-2 rounded-full shadow"
                >
                    ⬅ Back
                </button>
                <button
                    disabled={index === recipe.steps.length - 1}
                    onClick={() => setIndex(index + 1)}
                    className="bg-green-400 hover:bg-green-500 disabled:bg-green-200 text-white text-lg px-6 py-2 rounded-full shadow"
                >
                    Next ➡
                </button>
            </div>

            <div className="text-sm text-gray-500 mt-2">
                Step {index + 1} of {recipe.steps.length}
            </div>
        </div>
    );
}