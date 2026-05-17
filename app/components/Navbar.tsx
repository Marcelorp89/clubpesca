
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-primary text-white border-b border-slate-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-pesca.png"
            alt="Club de pesca y caza chinook tolten"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>

        {/* Links desktop — se ocultan en móvil */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/#about">Nosotros</Link></li>
          <li><Link href="/directorio">Directorio</Link></li>
          <li><Link href="/#event">Calendario</Link></li>
          <li><Link href="/#mapa">Mapa</Link></li>
          <li><Link href="/galeria">Galería</Link></li>
          <li><Link href="/#form">Contacto</Link></li>
        </ul>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

      </nav>

      {/* Menú móvil — se muestra solo cuando está abierto */}
      {menuAbierto && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-primary-hover">
          <li><Link href="/#about" onClick={() => setMenuAbierto(false)}>Nosotros</Link></li>
          <li><Link href="/directorio" onClick={() => setMenuAbierto(false)}>Directorio</Link></li>
          <li><Link href="/#event" onClick={() => setMenuAbierto(false)}>Calendario</Link></li>
          <li><Link href="/#mapa" onClick={() => setMenuAbierto(false)}>Mapa</Link></li>
          <li><Link href="/galeria" onClick={() => setMenuAbierto(false)}>Galería</Link></li>
          <li><Link href="/#form" onClick={() => setMenuAbierto(false)}>Contacto</Link></li>
        </ul>
      )}

    </header>
  );}