export default function Hero(){
    return(
        <section id="hero" className="relative h-[700px] pt-40">

            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                
                <source src="/hero-3.mp4" type="video/mp4"></source>

            </video>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-4xl font-extrabold text-white-600">Club de Pesca y Caza Chinook Toltén</h1>
                <p className="text-2xl font-bold text-white">Comunidad de pescadores de Toltén</p>
            </div>

        </section>


    );
}