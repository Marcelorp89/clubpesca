export default function Map(){
    return(

        <section id="mapa" className="max-w-6xl mx-auto px-6 py-6">
            <h2 className="text-primary py-6">Mapa de Toltén</h2>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wYC2pIXny1DT_KslHigH4xVYRgfLRjM&ehbc=2E312F" 
                    width="100%" 
                    height="500"
                    style={{border: "none"}}
                    loading="lazy">
            </iframe>
            
        </section>
    );
}

