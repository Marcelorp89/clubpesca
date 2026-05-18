import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DirectorioCard from "../components/DirectorioCards";

const directivos = [
  { nombre: "Cristian Ávila Carrasco", cargo: "Presidente", foto: "/directorio_imagenes/incognito.png" },
  { nombre: "Osvaldo Silva Cardenas", cargo: "Tesorero", foto: "/directorio_imagenes/incognito.png" },
  { nombre: "Myriam Rodríguez Caro", cargo: "Secretaria", foto: "/directorio_imagenes/secretaria.png" },
];

export default function Directorio() {
  return (
    <>
      <main className="flex-1">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
            <h2>Directorio</h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directivos.map((persona, index) => (
              <DirectorioCard key={persona.nombre}
                              {...persona}
                              index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
