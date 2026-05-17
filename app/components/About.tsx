import Image from "next/image";



export default function About(){
    return(

        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 gap-8">
                {/*columna izquierda, informacion sobre el club de pesca */}
                <div>
                    <h2 className="text-primary py-6">Sobre el club</h2>
                    <p className="text-foreground">Somos el Club de Pesca  y Caza Chinook Toltén....</p>
                    <p className="text-foreground">Fundando el xxx de xxx</p> 
                </div>
                {/*columna derecha, imagen*/}
                <div>
                    <Image src="/barra-6.jpeg" alt="club-de-pesca" width={300} height={100} className="rounded-lg w-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
                {/*columna izquierda, imagen */}
                <div>
                    <Image src="/Nigue-7.jpeg" alt="club-de-pesca" width={500} height={400} className="rounded-lg w-full" />
                </div>
                
                <div >
                    {/*columna derecha, texto*/}
                    <p className="text-foreground py-6">Contamos con las siguientes actividades:</p>
                    <ul>
                        <li className="text-foreground">primera actividad</li>
                        <li className="text-foreground">segunda actividad</li>
                        <li className="text-foreground">tercera actividad</li>
                    </ul>
                    <a href="/directorio" className="inline-block w-full md:w-auto mt-4 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition duration-300">
                        Conoce a nuestro directorio
                    </a>{/*link a la directiva*/}
                </div>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-primary">Himno del Club</h3>
                <p className="text-foreground">Escucha la canción oficial de nuestro Club de Pesca y Caza Chinook Toltén</p>   
                <audio controls className="w-full mt-4">
                    <source src="/cancion.mpeg" type="audio/mpeg" />
                </audio>

            </div>
        </section>

    );
}