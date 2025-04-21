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
        title: "Sanduche",
        image: "/images/sw/cover.png",
        steps: [
            {
                image: "/images/sw/1.png",
                text: "Coloca dos tajadas de pan sobre la mesa",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "/images/sw/2.png",
                text: "Toma una loncha de queso del paquete",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "/images/sw/3.png",
                text: "Pon el queso sobre una de las tajadas de pan",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "/images/sw/4.png",
                text: "Pon la segunda tajada de pan sobre el queso",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "/images/sw/5.png",
                text: "Presiona el sanduche entre tus manos",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "/images/sw/6.png",
                text: "Lo lograste!",
                audio: "/audio/test_audio.mp3"
            }
        ]
    }
];
