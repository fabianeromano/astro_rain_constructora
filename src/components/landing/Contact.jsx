
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-10 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]"
            >
              Contacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Comencemos tu proyecto
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contáctanos para una cotización gratuita y sin compromiso.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 pt-5">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+54 (9) 381-6368889</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">
                    contacto@rainconstructora.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-gray-600">
                    Chiclana 132, San Miguel de Tucumán, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="text-gray-900">
                Solicita tu cotización
              </CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Nombre
                  </label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Teléfono
                  </label>
                  <Input placeholder="Tu teléfono" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Email
                </label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Tipo de proyecto
                </label>
                <Input placeholder="Casa, edificio, refacción..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Mensaje
                </label>
                <Textarea placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
              <Button className="w-full bg-[#FC0835] hover:opacity-90">
                Enviar Solicitud
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
