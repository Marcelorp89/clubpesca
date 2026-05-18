"use client"

import Image from "next/image";
import { motion } from "framer-motion";


interface Props{
    nombre: string;
    cargo: string;
    foto: string;
    index: number;
}

export default function DirectorioCard({ nombre, cargo, foto, index }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300 bg-surface border border-border">
      
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

      
    </motion.div>
  );
}