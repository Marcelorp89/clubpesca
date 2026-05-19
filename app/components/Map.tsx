"use client"

import { motion } from "framer-motion";

export default function Map(){
    return(

        <motion.section 
            id="mapa" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 py-6"
        >
            <h2 className="text-primary py-6">Mapa de Toltén</h2>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wYC2pIXny1DT_KslHigH4xVYRgfLRjM&ehbc=2E312F&noprof=1" 
                    width="100%" 
                    height="500"
                    style={{border: "none"}}
                    loading="lazy">
            </iframe>
            
        </motion.section>
    );
}

