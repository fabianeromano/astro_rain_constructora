import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Img_1 from "@/assets/img_1.jpg";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-700 to-slate-600 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={Img_1.src}
          width="1200"
          height="800"
          alt="Construcción en progreso"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-slate-800/20"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col justify-center items-start space-y-4 max-w-4xl">
            <div className="space-y-2">
              {/* <Badge
                variant="outline"
                className="w-fit text-black bg-orange-50 backdrop-blur-sm"
              >
                +15 años de experiencia
              </Badge> */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
                Construimos tus sueños con calidad y confianza
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl drop-shadow-md">
                Somos RAIN, diseñamos, administramos y construimos, de manera
                integral y eficiente, transformando tus ideas en realidad.
              </p>
            </div>
            <div>
              <Button
                size="lg"
                className="bg-[#FC0835] hover:opacity-90"
                asChild>
                <a href="#proyectos">Ver Proyectos</a>
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-orange-200 text-orange-600 bg-orange-50 backdrop-blur-sm">
                Solicitar Cotización
              </Button> */}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-200">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Profesionalismo</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Compromiso</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Calidad Humana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
