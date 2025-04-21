import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-6">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-600 drop-shadow-sm">
                        🍳 Let's Make Something Yummy!
                    </h1>
                    <p className="text-xl text-gray-700 mt-2">Choose a recipe to get started</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((r) => (
                        <RecipeCard key={r.id} recipe={r} />
                    ))}
                </div>
            </div>
        </div>
    );
}

