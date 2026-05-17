import Link from "next/link";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";


export default function Footer (){
    return(
        <footer className="bg-primary-hover text-white border-t border-slate-50">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <a href="https://www.facebook.com/people/Club-de-Pesca-Chinook-Tolt%C3%A9n/100064262313546/"
                   target="_blank"
                   rel="noopener noreferrer"> 
                   <FaFacebook size={24} />
                </a>
                <p id="manotech" className="text-sm text-center">Elaborado por ManoTech (c)</p>
                <Link href="/politicaPrivacidad" className="text-white hover:text-accent">Política de Privacidad</Link>
            </div>
        </footer>
    );
}