export default function Event(){
    return(
        <section id="event" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 gap-8">

                {/*columna izquierda: explicacion del calendario de eventos */}
                <div>
                    <h2 className="text-primary py-6">Calendario de eventos</h2>

                    <p className="text-foreground">El Club de Pesca y Caza Chinook Toltén organiza durante el año una serie de actividades para todos sus socios.
                        Aquí encontrás las fechas más importantes para no perderte nada
                    </p>

                    <p className=" text-foreground py-2">Te invitamos a participar y ser parte de nuestra comunidad. 
                       Para más información sobre cada evento puedes contactarnos directamente
                    </p>
                </div>

                <div>
                    <iframe src="https://calendar.google.com/calendar/embed?src=12d23d62384e867136428e707630fa3ed7a5acd27cf4907dd9372fff408d9cb5%40group.calendar.google.com&ctz=America%2FSantiago"
                        style={{ border: "none" }}
                        width="100%"
                        height="480"
                        frameBorder="0"
                        scrolling="no">
                    </iframe>
                </div>

            </div>

        </section>

    );
}