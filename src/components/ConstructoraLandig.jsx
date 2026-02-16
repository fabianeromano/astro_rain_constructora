
import Header from "./landing/Header";
import Hero from "./landing/Hero";
import Services from "./landing/Services";
import Projects from "./landing/Projects";
import About from "./landing/About";
import Testimonials from "./landing/Testimonials";
import Contact from "./landing/Contact";
import Footer from "./landing/Footer";
import WhatsAppFloat from "./landing/WhatsAppFloat";

export default function ConstructoraLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
