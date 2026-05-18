"use client"

import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

export default function Galery(){
    return(

        <motion.section
            id="galeria" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 py-6">
                <h2 className="text-primary">Nuestra Galería</h2>
                <p className="text-foreground">Desde emocionantes campeonatos hasta los paisajes más hermosos de Toltén.</p>
                <p className="text-foreground">Todo en un solo lugar.</p>

            <MotionLink 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href="/galeria" 
                    className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition duration-300">
                        Ir a la Galería
            </MotionLink>{/*link a la galeria*/}

        </motion.section>
    );
}