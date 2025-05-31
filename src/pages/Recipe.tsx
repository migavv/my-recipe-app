import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import StepViewer from "../components/StepViewer";

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200 flex flex-col items-center justify-center text-center p-6 sm:p-10">
            <h2 className="text-4xl sm:text-5xl font-lilita text-red-400 mb-4 sm:mb-6">🥺 ¡Ups!</h2>
            <p className="text-lg sm:text-2xl font-fredoka text-purple-500">Receta no encontrada</p>
            <Link to="/" className="mt-6 sm:mt-8">
                <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xl sm:text-2xl px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transition-transform hover:scale-110">
                    🏠 Volver al inicio
                </button>
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200 px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-block mb-6 sm:mb-8">
                    <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-2xl sm:text-3xl px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transition-transform hover:scale-110">
                        🏠
                    </button>
                </Link>

                <h1 className="text-4xl sm:text-6xl font-lilita text-center text-pink-500 mb-8 sm:mb-10 drop-shadow-md leading-tight">
                    🍽️ {recipe.title}
                </h1>

                <StepViewer recipe={recipe} />
            </div>
        </div>
    );
}
