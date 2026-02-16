
import { Instagram, Facebook } from "lucide-react";
import LogoNameV2 from "@/assets/logo_name_v2.png";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center">
              <img
                src={LogoNameV2.src}
                alt="Logo de la Constructora"
                className="w-auto h-6"
              />
            </div>
            <p className="text-sm text-gray-400">
              Construyendo sueños con calidad y confianza desde hace más de 15
              años.
            </p>
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/rainconstructora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FC0835] hover:text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/rainconstructora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FC0835] hover:text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Layout responsive para móvil */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="space-y-4 flex-1 min-w-[140px]">
                <h4 className="text-sm font-semibold">Servicios</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Construcción de Casas</li>
                  <li>Edificios Comerciales</li>
                  <li>Refacciones</li>
                  <li>Diseño Arquitectónico</li>
                </ul>
              </div>
              <div className="space-y-4 flex-1 min-w-[140px]">
                <h4 className="text-sm font-semibold">Empresa</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#nosotros"
                      className="hover:text-[#FC0835] transition-colors"
                    >
                      Sobre Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#proyectos"
                      className="hover:text-[#FC0835] transition-colors"
                    >
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonios"
                      className="hover:text-[#FC0835] transition-colors"
                    >
                      Testimonios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      className="hover:text-[#FC0835] transition-colors"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 w-full lg:w-auto">
                <h4 className="text-sm font-semibold">Contacto</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>+54 (9) 381-6368889</li>
                  <li>contacto@rainconstructora.com</li>
                  <li>Chiclana 132, San Miguel de Tucumán</li>
                  <li>Argentina</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">Rain Constructora</span>. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
