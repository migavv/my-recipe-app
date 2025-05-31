import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-10 sm:mb-12">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-lilita text-pink-500 drop-shadow-lg leading-tight">
                        🍓 ¡Preparemos una receta! 🧁
                    </h1>
                    <p className="mt-4 text-lg sm:text-2xl text-purple-500 font-fredoka leading-relaxed">
                        Elige tu favorita y cocina jugando 🎈🍳
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {recipes.map((r) => (
                        <RecipeCard key={r.id} recipe={r} />
                    ))}
                </div>
            </div>
        </div>
    );
}
