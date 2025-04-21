import { Recipe } from "../data/recipes";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-3xl shadow-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer text-center h-72 flex flex-col justify-between">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="rounded-xl w-full h-55 object-cover mb-3 border-4 border-yellow-200"
                />
                <h2 className="text-2xl font-bold text-purple-600">{recipe.title}</h2>
            </div>
        </Link>
    );
}
