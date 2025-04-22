// src/data/recipes.ts
export interface RecipeStep {
    image: string;
    text: string;
    audio?: string;
}

export interface Recipe {
    id: string;
    title: string;
    image: string;
    steps: RecipeStep[];
}

export const recipes: Recipe[] = [
    {
        id: "sw",
        title: "Sánduche",
        image: "/my-recipe-app/images/sw/cover.png",
        steps: [
            {
                image: "/my-recipe-app/images/sw/1.png",
                text: "Coloca dos tajadas de pan sobre la mesa",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/sw/2.png",
                text: "Toma una loncha de queso del paquete",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/sw/3.png",
                text: "Pon el queso sobre una de las tajadas de pan",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/sw/4.png",
                text: "Pon la segunda tajada de pan sobre el queso",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/sw/5.png",
                text: "Presiona el sanduche entre tus manos",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/sw/6.png",
                text: "Lo lograste!",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            }
        ]
    }
];
