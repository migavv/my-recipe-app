// src/components/Footer.jsx
export default function Footer() {
    return (
        <footer className="mt-10 py-6 flex flex-col items-center text-center bg-transparent">
            <img
                src="/my-recipe-app/images/aula_abierta.png"
                alt="Logo de la Empresa"
                className="h-16 mb-4"
            />
            <p className="text-sm sm:text-base text-purple-600 font-fredoka">
                Miguel Gaviria - Universidad EIA
            </p>
        </footer>
    );
}
