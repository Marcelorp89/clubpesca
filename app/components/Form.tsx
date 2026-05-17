
"use client";

import { useState } from "react";

export default function Form(){

    const [formulario, setFormulario] = useState({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: ""
    });

    const [estadoEnvio, setEstadoEnvio] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormulario({...formulario, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch("https://formspree.io/f/mkoewrab", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formulario)
  });

  if (response.ok) {
    setEstadoEnvio("ok");
    setFormulario({ nombre: "", telefono: "", email: "", mensaje: "" });
  } else {
    setEstadoEnvio("error");
  }
};

    return(
        <section id="form" className="max-w-6xl mx-auto px-6 py-6">
            <h2 className="text-primary">Consultas</h2>
            <p className="text-foreground">¿Tienes alguna duda? Escríbenos</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-foreground">Tolten</p>
                    <p className="text-foreground">mail</p>
                    <p className="text-foreground">telefono</p>
                </div>

                <div className="flex flex-col gap-4">

                    <div>
                        <label htmlFor="nombre" className="text-foreground">Nombre</label>
                        <input 
                            type="text"
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            value={formulario.nombre}
                            onChange={handleChange}
                            className="border border-border rounded-lg px-4 py-2 w-full"
                     />

                    </div>

                    <div>
                        <label htmlFor="nombre" className="text-sm font-medium">Teléfono</label>
                        <input 
                            type="text"
                            name="telefono"
                            placeholder="Ingrese su teléfono"
                            value={formulario.telefono}
                            onChange={handleChange}
                            className="border border-border rounded-lg px-4 py-2 w-full"
                        />

                    </div>
                    
                    <div>
                        <label htmlFor="nombre" className="text-sm font-medium">Correo</label>
                         <input 
                            type="text"
                            name="email"
                            placeholder="Ingrese su correo"
                            value={formulario.email}
                            onChange={handleChange}
                            className="border border-border rounded-lg px-4 py-2 w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="nombre" className="text-foreground">Correo</label>
                        <textarea 
                            name="mensaje"
                            placeholder="Deje su mensaje"
                            value={formulario.mensaje}
                            onChange={handleChange}
                            rows={5}
                            className="border border-border rounded-lg px-4 py-2 w-full"
                        />
                    </div>
                    {estadoEnvio === "ok" && (
                        <p className="text-green-600 font-medium">
                            ✅ ¡Mensaje enviado correctamente! Te responderemos pronto.
                        </p>
                    )}

                    {estadoEnvio === "error" && (
                        <p className="text-red-600 font-medium">
                            ❌ Hubo un error al enviar. Por favor intenta nuevamente.
                        </p>
                    )}

                     <button onClick={handleSubmit} className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition duration-300">
                        Enviar mensaje 
                     </button>

                </div>

            </div>

        </section>
    );
}