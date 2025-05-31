import { Recipe } from "../data/recipes";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div className="bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200 rounded-[2.5rem] border-[6px] border-pink-300 shadow-2xl p-4 sm:p-6 hover:scale-105 hover:rotate-2 hover:shadow-3xl transition-all duration-500 cursor-pointer text-center flex flex-col justify-between relative overflow-hidden max-w-full">
                
                {/* Fondo decorativo interno */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url('/pattern-doodles.svg')", backgroundSize: 'cover', backgroundRepeat: 'repeat' }}
                ></div>

                {/* Imagen con efecto burbuja */}
                <div className="relative w-full max-w-[320px] sm:max-w-none aspect-square mb-4 overflow-hidden rounded-3xl border-[8px] sm:border-[10px] border-yellow-400 shadow-inner bg-white p-2 mx-auto">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Nube de texto */}
                <div className="relative z-10 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md border-4 border-purple-300 inline-block">
                    <h2 className="text-2xl sm:text-3xl font-lilita text-purple-600 leading-tight">
                        ✨ {recipe.title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}
