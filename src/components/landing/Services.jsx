
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, Wrench, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]"
            >
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
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Home className="h-12 w-12 mx-auto text-[#FC0835] mb-4" />
              <CardTitle className="text-gray-900">
                Construcción de Casas
              </CardTitle>
              <CardDescription>
                Diseño y construcción de casas residenciales personalizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Diseño arquitectónico</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Construcción llave en mano</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Acabados de lujo</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Building2 className="h-12 w-12 mx-auto text-[#FC0835] mb-4" />
              <CardTitle className="text-gray-900">
                Edificios Comerciales
              </CardTitle>
              <CardDescription>
                Construcción de oficinas, locales comerciales y edificios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Proyectos comerciales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Edificios corporativos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Centros comerciales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Wrench className="h-12 w-12 mx-auto text-[#FC0835] mb-4" />
              <CardTitle className="text-gray-900">Refacciones</CardTitle>
              <CardDescription>
                Remodelaciones, ampliaciones y mantenimiento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Remodelaciones integrales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Ampliaciones</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Mantenimiento preventivo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
