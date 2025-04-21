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
        id: "pbj",
        title: "Peanut Butter & Jelly Sandwich",
        image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
        steps: [
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Get two slices of bread",
                audio: "/assets/step1.mp3"
            },
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Spread peanut butter on one slice",
                audio: "/assets/step2.mp3"
            },
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Spread jelly on the other slice",
                audio: "/assets/step3.mp3"
            }
        ]
    }
];
