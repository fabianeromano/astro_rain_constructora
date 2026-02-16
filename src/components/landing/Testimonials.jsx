
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-10 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]"
            >
              Testimonios
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="border-orange-100">
            <CardHeader>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <CardTitle className="text-gray-900">María González</CardTitle>
              <CardDescription>
                Propietaria - Casa Los Pinos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                "Excelente trabajo, cumplieron con todos los tiempos y la
                calidad superó nuestras expectativas. Recomiendo Constructora
                Rain sin dudarlo."
              </p>
            </CardContent>
          </Card>
          <Card className="border-orange-100">
            <CardHeader>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <CardTitle className="text-gray-900">Carlos Mendoza</CardTitle>
              <CardDescription>Director - Empresa XYZ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                "Profesionales en todo momento. La construcción de nuestras
                oficinas fue impecable y dentro del presupuesto acordado."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
