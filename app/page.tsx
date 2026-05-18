import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Event from "./components/Event";
import Map from "./components/Map";
import Galery from "./components/Galery";
import Form from "./components/Form";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <main className="flex-1 pt-24">
        <Navbar />
        <Hero />
        <About />
        <Event />
        <Map />
        <Galery />
        <Form />
      </main>
      <Footer />
    </>

  );
}
