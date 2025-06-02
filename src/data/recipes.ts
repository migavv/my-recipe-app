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
                audio: "/my-recipe-app/audio/sw/1.m4a"
            },
            {
                image: "/my-recipe-app/images/sw/2.png",
                text: "Toma una loncha de queso del paquete",
                audio: "/my-recipe-app/audio/sw/2.m4a"
            },
            {
                image: "/my-recipe-app/images/sw/3.png",
                text: "Pon el queso sobre una de las tajadas de pan",
                audio: "/my-recipe-app/audio/sw/3.m4a"
            },
            {
                image: "/my-recipe-app/images/sw/4.png",
                text: "Pon la segunda tajada de pan sobre el queso",
                audio: "/my-recipe-app/audio/sw/4.m4a"
            },
            {
                image: "/my-recipe-app/images/sw/5.png",
                text: "Presiona el sanduche entre tus manos",
                audio: "/my-recipe-app/audio/sw/5.m4a"
            },
            {
                image: "/my-recipe-app/images/sw/6.png",
                text: "Lo lograste!",
                audio: "/my-recipe-app/audio/sw/6.m4a"
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
                audio: "/my-recipe-app/audio/pasta/1.m4a"
            },
            {
                image: "/my-recipe-app/images/pasta/2.png",
                text: "Agrega la pasta",
                audio: "/my-recipe-app/audio/pasta/2.m4a"
            },
            {
                image: "/my-recipe-app/images/pasta/3.png",
                text: "Revuelve de vez en cuando",
                audio: "/my-recipe-app/audio/pasta/3.m4a"
            },
            {
                image: "/my-recipe-app/images/pasta/4.png",
                text: "Escurre el agua",
                audio: "/my-recipe-app/audio/pasta/4.m4a"
            },
            {
                image: "/my-recipe-app/images/pasta/5.png",
                text: "¡Sirve con salsa!",
                audio: "/my-recipe-app/audio/pasta/5.m4a"
            }
        ]
    },
    {
    id: "jugo",
    title: "Jugo de Frutas",
    image: "/my-recipe-app/images/jugo/6.png",
    steps: [
        {
            image: "/my-recipe-app/images/jugo/1.png",
            text: "Lava y corta la fruta en trozos pequeños",
            audio: "/my-recipe-app/audio/jugo/1.mp3"
        },
        {
            image: "/my-recipe-app/images/jugo/2.png",
            text: "Coloca la fruta en la licuadora",
            audio: "/my-recipe-app/audio/jugo/2.mp3"
        },
        {
            image: "/my-recipe-app/images/jugo/3.png",
            text: "Agrega agua o leche",
            audio: "/my-recipe-app/audio/jugo/3.mp3"
        },
        {
            image: "/my-recipe-app/images/jugo/4.png",
            text: "Añade azúcar si deseas",
            audio: "/my-recipe-app/audio/jugo/4.mp3"
        },
        {
            image: "/my-recipe-app/images/jugo/5.png",
            text: "Licúa hasta obtener una mezcla homogénea",
            audio: "/my-recipe-app/audio/jugo/5.mp3"
        },
        {
            image: "/my-recipe-app/images/jugo/6.png",
            text: "Sirve el jugo.",
            audio: "/my-recipe-app/audio/jugo/6.mp3"
        }
    ]
},
{
    id: "ensalada",
    title: "Ensalada",
    image: "/my-recipe-app/images/ensalada/cover.png",
    steps: [
        {
            image: "/my-recipe-app/images/ensalada/4.png",
            text: "Lava bien todos los vegetales",
            audio: "/my-recipe-app/audio/ensalada/1.mp3"
        },
        {
            image: "/my-recipe-app/images/ensalada/1.png",
            text: "Corta el tomate y el pepino en rodajas",
            audio: "/my-recipe-app/audio/ensalada/2.mp3"
        },
        {
            image: "/my-recipe-app/images/ensalada/2.png",
            text: "Ralla la zanahoria",
            audio: "/my-recipe-app/audio/ensalada/3.mp3"
        },
        {
            image: "/my-recipe-app/images/ensalada/3.png",
            text: "Mezcla todo en un bol",
            audio: "/my-recipe-app/audio/ensalada/4.mp3"
        },
        {
            image: "/my-recipe-app/images/ensalada/5.png",
            text: "Añade el aderezo y sirve",
            audio: "/my-recipe-app/audio/ensalada/5.mp3"
        }
    ]
},
{
    id: "pancake",
    title: "Pancake",
    image: "/my-recipe-app/images/pancake/cover.png",
    steps: [
        {
            image: "/my-recipe-app/images/pancake/1.png",
            text: "Mezcla la harina, el polvo de hornear y el azúcar",
            audio: "/my-recipe-app/audio/pancake/1.mp3"
        },
        {
            image: "/my-recipe-app/images/pancake/2.png",
            text: "Agrega el huevo y la leche",
            audio: "/my-recipe-app/audio/pancake/2.mp3"
        },
        {
            image: "/my-recipe-app/images/pancake/3.png",
            text: "Bate hasta obtener una mezcla suave",
            audio: "/my-recipe-app/audio/pancake/3.mp3"
        },
        {
            image: "/my-recipe-app/images/pancake/4.png",
            text: "Vierte en la sartén y cocina hasta que haga burbujas",
            audio: "/my-recipe-app/audio/pancake/4.mp3"
        },
        {
            image: "/my-recipe-app/images/pancake/5.png",
            text: "Voltea y cocina por el otro lado",
            audio: "/my-recipe-app/audio/pancake/5.mp3"
        }
    ]
},
{
    id: "huevo",
    title: "Fritar un Huevo",
    image: "/my-recipe-app/images/huevo/cover.png",
    steps: [
        {
            image: "/my-recipe-app/images/huevo/1.png",
            text: "Calienta la sartén en la estufa",
            audio: "/my-recipe-app/audio/huevo/1.mp3"
        },
        {
            image: "/my-recipe-app/images/huevo/2.png",
            text: "Añade la mantequilla y deja que se derrita",
            audio: "/my-recipe-app/audio/huevo/2.mp3"
        },
        {
            image: "/my-recipe-app/images/huevo/3.png",
            text: "Rompe el huevo y colócalo en la sartén",
            audio: "/my-recipe-app/audio//huevo/3.mp3"
        },
        {
            image: "/my-recipe-app/images/huevo/4.png",
            text: "Cocina hasta que la clara esté firme",
            audio: "/my-recipe-app/audio//huevo/4.mp3"
        },
        {
            image: "/my-recipe-app/images/huevo/5.png",
            text: "Sirve caliente",
            audio: "/my-recipe-app/audio//huevo/5.mp3"
        }
    ]
},
{
    id: "te",
    title: "Preparar un Té",
    image: "/my-recipe-app/images/te/cover.png",
    steps: [
        {
            image: "/my-recipe-app/images/te/1.png",
            text: "Calienta agua hasta que hierva",
            audio: "/my-recipe-app/audio/te/1.mp3"
        },
        {
            image: "/my-recipe-app/images/te/2.png",
            text: "Coloca la bolsa de té en una taza",
            audio: "/my-recipe-app/audio/te/2.mp3"
        },
        {
            image: "/my-recipe-app/images/te/3.png",
            text: "Vierte el agua caliente sobre la bolsa",
            audio: "/my-recipe-app/audio/te/3.mp3"
        },
        {
            image: "/my-recipe-app/images/te/4.png",
            text: "Deja reposar 3-5 minutos",
            audio: "/my-recipe-app/audio/te/4.mp3"
        },
        {
            image: "/my-recipe-app/images/te/5.png",
            text: "Agrega azúcar, miel o limón al gusto",
            audio: "/my-recipe-app/audio/te/5.mp3"
        }
    ]
}
];