
import { Button } from "@/components/ui/button";
import LogoNameV1 from "@/assets/logo_name_v1.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center pl-4 md:pl-6">
          <a href="/" aria-label="Recargar página de inicio">
            <img
              src={LogoNameV1.src}
              alt="Logo de la Constructora"
              className="w-auto h-10"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#servicios"
            className="text-sm font-medium hover:text-[#FC0835] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className="text-sm font-medium hover:text-[#FC0835] transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium hover:text-[#FC0835] transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium hover:text-[#FC0835] transition-colors"
          >
            Contacto
          </a>
        </nav>
        <Button className="bg-[#FC0835] hover:opacity-90 mr-4 lg:mr-0">
          <a href="#contacto">Cotizar Proyecto</a>
        </Button>
      </div>
    </header>
  );
}
