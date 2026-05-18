
"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import { useState } from "react";
import Link from "next/link";
import {motion} from "framer-motion";



const campeonatos = [
    {
        year:"2022",
        fotos: [
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643461/club-pesca/2022/4-2022_dkjdoj.jpg", titulo:"foto-1"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643457/club-pesca/2022/2-2022_k79ysj.jpg", titulo:"foto-2"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643463/club-pesca/2022/5-2022_pn4edu.jpg", titulo:"foto-3"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643465/club-pesca/2022/6-2022_qky6k3.jpg", titulo:"foto-4"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643456/club-pesca/2022/1-2022_gvse87.jpg", titulo:"foto-5"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778643459/club-pesca/2022/3-2022_mrw6k9.jpg", titulo:"foto-6"},
        ]
    },

    {
        year:"2021",
        fotos: [
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642923/club-pesca/2021/4-2021_u0vq2q.jpg", titulo:"foto-1"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642921/club-pesca/2021/3-2021_kmtdea.jpg", titulo:"foto-2"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642919/club-pesca/2021/2-2021_ks1tem.jpg", titulo:"foto-3"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642918/club-pesca/2021/1-2021_esixft.jpg", titulo:"foto-4"}, 
        ]
    },

    {
        year:"2019",
        fotos: [
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642493/club-pesca/2019/2-2019_myda4c.jpg", titulo:"foto-1"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642495/club-pesca/2019/3-2019_z6i1cj.jpg", titulo:"foto-2"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778642493/club-pesca/2019/1-2019_lvgq8m.jpg", titulo:"foto-3"},

      
        ]
    },

    {
        year:"2018",
        fotos: [
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641614/club-pesca/2018/13-2018_vhrpwz.jpg", titulo:"foto-1"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641611/club-pesca/2018/11-2018_t7wiqv.jpg", titulo:"foto-2"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641609/club-pesca/2018/10-2018_qvyxq4.jpg", titulo:"foto-3"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641604/club-pesca/2018/7-2018_bckpph.jpg", titulo:"foto-4"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641602/club-pesca/2018/6-2018_w3ckdl.jpg", titulo:"foto-5"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641598/club-pesca/2018/3.2018_c8hphg.jpg", titulo:"foto-6"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641606/club-pesca/2018/8-2018_kztwnm.jpg", titulo:"foto-7"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641601/club-pesca/2018/5-2018_tw4be4.jpg", titulo:"foto-8"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641612/club-pesca/2018/12-2018_wfzaw4.jpg", titulo:"foto-9"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778641599/club-pesca/2018/4-2018_jeagai.jpg", titulo:"foto-10"},
        ]
    },

        {
        year:"2016",
        fotos: [
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/4-2026_hotvq6.jpg", titulo:"foto-1"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/9-2026_wzca1j.jpg", titulo:"foto-2"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/8-2026_jikzti.jpg", titulo:"foto-4"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/7-2026_u7uupc.jpg", titulo:"foto-5"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/5-2026_p2hbrd.jpg", titulo:"foto-6"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629752/club-pesca/2016/6-2026_dlvnbz.jpg", titulo:"foto-7"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629751/club-pesca/2016/3-2026_zaqqgi.jpg", titulo:"foto-8"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629751/club-pesca/2016/1-2026_mdhm7o.jpg", titulo:"foto-9"},
            {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778629751/club-pesca/2016/2-2026_qkensg.jpg", titulo:"foto-10"},
        ]
    },

];

const paisajes = [
  {
    localidad: "La barra",
    foto: [
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729216/tolten/caleta%20la%20barra/0barra-10_gdogfh.jpg", titulo:"foto-1"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729208/tolten/caleta%20la%20barra/1barra-3_gr10db.jpg", titulo:"foto-2"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729211/tolten/caleta%20la%20barra/barra-5_wrqge5.jpg", titulo:"foto-3"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729212/tolten/caleta%20la%20barra/barra-6_rx75kz.jpg", titulo:"foto-4"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729214/tolten/caleta%20la%20barra/barra-8_ckywvx.jpg", titulo:"foto-5"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729215/tolten/caleta%20la%20barra/barra-9_omkbfu.jpg", titulo:"foto-6"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729208/tolten/caleta%20la%20barra/barra-2_rthkg6.jpg", titulo:"foto-7"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729213/tolten/caleta%20la%20barra/barra-7_s8aowm.jpg", titulo:"foto-8"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729217/tolten/caleta%20la%20barra/barra-11_jqncvf.jpg", titulo:"foto-9"},
    ]
  },
  {
    localidad: "Nigue",
    foto:[
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729270/tolten/nigue%20norte/Nigue-7_wiho2g.jpg", titulo:"foto-1"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729269/tolten/nigue%20norte/Nigue-6_lyxakx.jpg", titulo:"foto-2"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729268/tolten/nigue%20norte/Nigue-5_auh4gk.jpg", titulo:"foto-3"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729266/tolten/nigue%20norte/Nigue-4_cpsubf.jpg", titulo:"foto-4"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729264/tolten/nigue%20norte/Nigue-2_uasywj.jpg", titulo:"foto-5"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729265/tolten/nigue%20norte/Nigue-3_iyhkyg.jpg", titulo:"foto-6"},
        {url:"https://res.cloudinary.com/dcnclxmwv/image/upload/v1778729263/tolten/nigue%20norte/Nigue-1_b3z7tr.jpg", titulo:"foto-"},
    ]
  },
];

export default function GaleryPage(){

    const[abierto, setAbierto] = useState<string | null>(null);
    const [tabActivo, setTabActivo] = useState("campeonatos");

    const toggleAcordeon = (year:string) => {
        setAbierto(abierto === year ? null : year);
    };

    return(
        <>
   <main className="flex-1">
        <Navbar />
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Galería de Fotos</h2>

          {/* Botones de tabs */}
          <div className="flex gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setTabActivo("campeonatos")}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                tabActivo === "campeonatos"
                  ? "bg-accent text-white hover:bg-accent-hover"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Campeonatos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setTabActivo("paisajes")}
              className={`px-6 py-2 rounded-lg transition duration-300 ${
                tabActivo === "paisajes"
                  ? "bg-accent hover:bg-accent-hover text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Paisajes de Toltén
            </motion.button>
          </div>

          {/*Tab campeonatos*/}
          {tabActivo === "campeonatos" && (
            <>
              {campeonatos.map((campeonato) => (
                <div key={campeonato.year} className="mb-4 border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAcordeon(campeonato.year)}
                    className="w-full flex justify-between items-center px-6 py-4 bg-primary text-white hover:bg-primary-hover transition duration-300"
                  >
                    <span className="font-semibold">Campeonato {campeonato.year}</span>
                    <span>{abierto === campeonato.year ? "▲" : "▼"}</span>
                  </button>

                  {abierto === campeonato.year && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                      {campeonato.fotos.map((foto) => (
                        <div key={foto.url} className="overflow-hidden rounded-lg">
                          <Image
                            src={foto.url}
                            alt={foto.titulo}
                            width={400}
                            height={300}
                            className="w-full object-cover hover:scale-105 transition duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/*Tab paisajes*/}
          {tabActivo === "paisajes" && (
  <>
    {paisajes.map((seccion) => (
      <div key={seccion.localidad} className="mb-12">
        
        {/* Título de la localidad */}
        <h3 className="text-xl font-bold mb-4">{seccion.localidad}</h3>
        
        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {seccion.foto.map((foto) => (
            <div key={foto.url} className="overflow-hidden rounded-lg">
              <Image
                src={foto.url}
                alt={foto.titulo}
                width={400}
                height={300}
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    ))}
  </>
)}

        </section>
      </main>
      <Footer />
        </>
    );
}