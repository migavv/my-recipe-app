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
    },
    {
        id: "pasta",
        title: "Pasta",
        image: "/my-recipe-app/images/pasta/cover.png",
        steps: [
            {
                image: "/my-recipe-app/images/pasta/1.png",
                text: "Hierve agua en una olla",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/pasta/2.png",
                text: "Agrega la pasta",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/pasta/3.png",
                text: "Revuelve de vez en cuando",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/pasta/4.png",
                text: "Escurre el agua",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            },
            {
                image: "/my-recipe-app/images/pasta/5.png",
                text: "¡Sirve con salsa!",
                audio: "/my-recipe-app/audio/test_audio.mp3"
            }
        ]
    }
];