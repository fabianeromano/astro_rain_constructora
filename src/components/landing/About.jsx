
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award } from "lucide-react";
import socio_1 from "@/assets/socio_1.jpg";
import socio_2 from "@/assets/socio_2.jpg";

export default function About() {
  return (
    <section id="nosotros" className="py-10 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]"
            >
              Sobre Nosotros
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              15 años construyendo confianza
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Somos una empresa familiar con más de 15 años de experiencia en
              el sector de la construcción. Nos especializamos en proyectos
              residenciales y comerciales de alta calidad.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 lg:gap-16 mb-12">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-[#FC0835]" />
              <span className="font-semibold text-slate-700">500+</span>
            </div>
            <p className="text-sm text-gray-600">Proyectos completados</p>
          </div>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-[#FC0835]" />
              <span className="font-semibold text-slate-700">15+</span>
            </div>
            <p className="text-sm text-gray-600">Años de experiencia</p>
          </div>
        </div>

        {/* Equipo */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a los profesionales que lideran cada proyecto con
              experiencia y dedicación.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* María Inés Pisculichi */}
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-2 text-center">
                <div className="mb-4">
                  <img
                    src={socio_1.src}
                    alt="María Inés Pisculichi"
                    className="rounded-full w-[150px] h-[150px] mx-auto object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  María Inés Pisculichi
                </h4>
                <p className="text-[#FC0835] font-semibold mb-3">
                  Ingeniera Civil - Socia
                </p>
                <p className="text-gray-600 text-sm">
                  Especialista en estructuras y gestión de proyectos. Lidera la
                  planificación técnica y supervisión de todas las
                  construcciones con más de 15 años de experiencia.
                </p>
              </CardContent>
            </Card>

            {/* Rafael Rotger */}
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-2 text-center">
                <div className="mb-4">
                  <img
                    src={socio_2.src}
                    alt="Rafael Rotger"
                    className="rounded-full w-[150px] h-[150px] mx-auto object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Rafael Rotger
                </h4>
                <p className="text-[#FC0835] font-semibold mb-3">
                  Arquitecto - Socio
                </p>
                <p className="text-gray-600 text-sm">
                  Experto en diseño arquitectónico y planificación urbana. Se
                  encarga del diseño creativo y la conceptualización de todos
                  nuestros proyectos residenciales y comerciales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
