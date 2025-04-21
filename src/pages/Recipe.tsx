import {Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import StepViewer from "../components/StepViewer";

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return <div className="text-center text-2xl p-10">Recipe not found 🥺</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 px-4 py-6">
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="inline-block mb-4">
                    <button className="bg-blue-400 hover:bg-blue-500 text-white text-2xl px-6 py-2 rounded-full shadow transition">
                        🏠
                    </button>
                </Link>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-orange-600 mb-6 drop-shadow">
                    🍽️ {recipe.title}
                </h1>
                <StepViewer recipe={recipe} />
            </div>
        </div>
    );
}

