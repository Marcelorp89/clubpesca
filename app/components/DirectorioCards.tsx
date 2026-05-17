import Image from "next/image";

interface Props{
    nombre: string;
    cargo: string;
    foto: string;
}

export default function DirectorioCard({ nombre, cargo, foto }: Props) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300 bg-surface border border-border">
      
      {/* Foto */}
      <Image
        src={foto}
        alt={nombre}
        width={800}
        height={800}
        className="rounded-full object-cover mb-4"
      />

      {/* Nombre */}
      <h3 className="text-lg font-semibold text-primary">{nombre}</h3>

      {/* Cargo */}
      <p className="text-sm text-accent">{cargo}</p>

      
    </div>
  );
}