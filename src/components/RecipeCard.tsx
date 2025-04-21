import { Recipe } from "../data/recipes";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div className="rounded-2xl bg-white shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer">
                <img src={recipe.image} alt={recipe.title} className="rounded-xl mb-2 w-full object-cover h-40" />
                <h2 className="text-xl font-semibold text-center text-purple-700">{recipe.title}</h2>
            </div>
        </Link>
    );
}
