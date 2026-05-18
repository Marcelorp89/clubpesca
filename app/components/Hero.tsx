"use client"

import { motion } from "framer-motion";

export default function Hero(){
    return(
        <section id="hero" className="relative h-[700px] pt-40">

            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                
                <source src="/hero-3.mp4" type="video/mp4"></source>

            </video>

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">

                <motion.h1

                    initial={{opacity: 0, y:-30}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration:0.8}}
                    className="text-4xl font-bold"
                >
                    Club de Pesca y Caza Chinook Toltén
                </motion.h1>

                <motion.p
                    id="pescadores"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 text-2xl font-bold"
                >
                    Comunidad de pescadores de Toltén
                </motion.p>

            </div>

        </section>


    );
}