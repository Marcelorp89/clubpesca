import Link from "next/link";

export default function Galery(){
    return(
        <section id="galeria" className="max-w-6xl mx-auto px-6 py-6">
            <h2 className="text-primary">Nuestra Galería</h2>
            <p className="text-foreground">Desde emocionantes campeonatos hasta los paisajes más hermosos de Toltén.</p>
            <p className="text-foreground">Todo en un solo lugar.</p>

            <Link href="/galeria" className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition duration-300">
                        Fotos
            </Link>{/*link a la galeria*/}

        </section>
    );
}