import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, Wrench, CheckCircle, UsersRound } from "lucide-react";
import Service1 from "@/assets/service1.avif";
import Service2 from "@/assets/service2.avif";
import Service3 from "@/assets/service3.avif";
import Img1 from "@/assets/img_1.jpg";

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Soluciones integrales de construcción
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos servicios completos desde el diseño hasta la entrega
              final de tu proyecto.
            </p>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Service 1: Vivienda */}
          <div className="flex flex-col items-center text-center">
            <Home className="h-12 w-12 text-[#FC0835] mb-4" />
            <h3 className="font-bold text-lg mb-2">Vivienda</h3>
            <p className="text-sm text-gray-600 mb-4 h-16">
              Diseño y construcción de casas residenciales personalizadas.
            </p>
          </div>
          {/* Service 2: Comercial/Industria */}
          <div className="flex flex-col items-center text-center">
            <Building2 className="h-12 w-12 text-[#FC0835] mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Instituciones e Industria
            </h3>
            <p className="text-sm text-gray-600 mb-4 h-16">
              Proyectos comerciales, oficinas, naves industriales y edificios.
            </p>
          </div>
          {/* Service 3: Refacciones */}
          <div className="flex flex-col items-center text-center">
            <Wrench className="h-12 w-12 text-[#FC0835] mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Refacciones y mantenimiento
            </h3>
            <p className="text-sm text-gray-600 mb-4 h-16">
              Remodelaciones, ampliaciones y mantenimiento general.
            </p>
          </div>
          {/* Service 4: Inversores */}
          <div className="flex flex-col items-center text-center">
            <UsersRound className="h-12 w-12 text-[#FC0835] mb-4" />
            <h3 className="font-bold text-lg mb-2">Inversores</h3>
            <p className="text-sm text-gray-600 mb-4 h-16">
              Asesoramiento y gestión de proyectos de inversión inmobiliaria.
            </p>
          </div>
        </div>

        {/* <div className="lg:px-40 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img
                  src={ModernHouse.src}
                  alt="Diseño arquitectónico"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <CardTitle className="mb-2 text-xl">Diseño</CardTitle>
                  <CardDescription>
                    Diseños eficientes, con criterio estético y racional. Nuestros
                    diseños se personalizan trabajando en conjunto con cada
                    cliente, para obtener una máxima experiencia y satisfacción de
                    cada usuario.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img
                  src={CommercialBuilding.src}
                  alt="Dirección de obra"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <CardTitle className="mb-2 text-xl">Dirección</CardTitle>
                  <CardDescription>
                    Nuestros profesionales dirigen y coordinan cada acción en
                    nuestras obras, respondiendo al diseño constructivo y a
                    criterio y experiencia desarrollados a lo largo de los años.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img
                  src={Img1.src}
                  alt="Construcción"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <CardTitle className="mb-2 text-xl">Construcción</CardTitle>
                  <CardDescription>
                    Llevamos nuestros proyectos a la realidad, con calidad en la
                    selección de materiales y mano de obra eficiente y
                    especializada.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div> */}

        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardContent>
              <img
                src={Service1.src}
                alt="Diseño arquitectónico"
                className="w-full h-48 object-cover"
              />
              <CardTitle className="text-gray-900 py-2 text-xl">
                Diseño
              </CardTitle>
              <CardDescription>
                Diseños eficientes, con criterio estético y racional. Nuestros
                diseños se personalizan trabajando en conjunto con cada cliente,
                para obtener una máxima experiencia y satisfacción de cada
                usuario.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardContent>
              <img
                src={Service2.src}
                alt="Diseño arquitectónico"
                className="w-full h-48 object-cover"
              />
              <CardTitle className="text-gray-900 py-2 text-xl">
                Dirección
              </CardTitle>
              <CardDescription>
                Nuestros profesionales dirigen y coordinan cada acción en
                nuestras obras, respondiendo al diseño constructivo y a criterio
                y experiencia desarrollados a lo largo de los años.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardContent>
              <img
                src={Service3.src}
                alt="Diseño arquitectónico"
                className="w-full h-48 object-cover"
              />
              <CardTitle className="text-gray-900 py-2 text-xl">
                Construcción
              </CardTitle>
              <CardDescription>
                Llevamos nuestros proyectos a la realidad, con calidad en la
                selección de materiales y mano de obra eficiente y
                especializada.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
