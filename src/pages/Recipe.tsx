import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import StepViewer from "../components/StepViewer";

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return <div>Recipe not found</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
            <StepViewer recipe={recipe} />
        </div>
    );
}
