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
        title: "Sandwich",
        image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-8a78-61f7-a443-ba4418615cc4/raw?se=2025-04-21T22%3A37%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=93e550c7-0abe-55aa-84ac-b05f45255e6c&skoid=0abefe37-d2bd-4fcb-bc88-32bccbef6f7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-21T17%3A11%3A00Z&ske=2025-04-22T17%3A11%3A00Z&sks=b&skv=2024-08-04&sig=EJt6cj7zRUpy2Zz9w9Mt6IZabk9K1Y%2BXX4stKKv00vs%3D",
        steps: [
            {
                image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7bd0-61f7-b14b-fecb000b5a92/raw?se=2025-04-21T21%3A51%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=7b09ae12-a53d-5edc-875c-e608cfba8c2f&skoid=0abefe37-d2bd-4fcb-bc88-32bccbef6f7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-21T16%3A40%3A39Z&ske=2025-04-22T16%3A40%3A39Z&sks=b&skv=2024-08-04&sig=oQRw6h8w0nESthkzP8lX3RGwpmRuWUeZNzWCOHkT/Mo%3D",
                text: "Coloca dos tajadas de pan sobre la mesa",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-2cb8-61f7-a849-ffcd49664f33/raw?se=2025-04-21T21%3A59%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=94db3b37-d9dd-5532-b98f-cc577d9356b7&skoid=0abefe37-d2bd-4fcb-bc88-32bccbef6f7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-21T01%3A43%3A17Z&ske=2025-04-22T01%3A43%3A17Z&sks=b&skv=2024-08-04&sig=LYgg0QXFW1hP1ybww5bNcYhVUHV/ZCgHuLftYXVT8Yk%3D",
                text: "Toma una loncha de queso del paquete",
                audio: "/audio/test_audio.mp3"
            },
            {
                image: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-48cc-61f7-af5d-ec9d95837e73/raw?se=2025-04-21T22%3A06%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=c12d3959-eca8-50fb-b266-71deecce51eb&skoid=0abefe37-d2bd-4fcb-bc88-32bccbef6f7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-21T11%3A53%3A54Z&ske=2025-04-22T11%3A53%3A54Z&sks=b&skv=2024-08-04&sig=QpeSyP72xzOsRgaA5L3r4iOBTtsnJt%2B67nwx85%2B16TU%3D",
                text: "Pon el queso sobre una de las tajadas de pan",
                audio: "/audio/step3.mp3"
            },
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Pon la segunda tajada de pan sobre el queso",
                audio: "/audio/step3.mp3"
            },
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Presiona el sanduche entre tus manos",
                audio: "/audio/step3.mp3"
            },
            {
                image: "https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg",
                text: "Lo lograste!",
                audio: "/audio/step3.mp3"
            }
        ]
    }
];
