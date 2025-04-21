import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
    return (
        <div className="min-h-screen bg-pink-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-pink-700">Pick a Recipe!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((r) => (
                    <RecipeCard key={r.id} recipe={r} />
                ))}
            </div>
        </div>
    );
}
