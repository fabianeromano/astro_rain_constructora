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
import {
  Building2,
  Home,
  Wrench,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Instagram,
  Facebook,
} from "lucide-react";
import Img_1 from "@/assets/img_1.jpg";
import ModernHouse from "@/assets/modern_house.jpg";
import CommercialBuilding from "@/assets/commercial_building.jpg";
import socio_1 from "@/assets/socio_1.jpg";
import socio_2 from "@/assets/socio_2.jpg";
import LogoNameV1 from "@/assets/logo_name_v1.png";
import LogoNameV2 from "@/assets/logo_name_v2.png";

export default function ConstructoraLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center pl-4 md:pl-6">
            <img
              src={LogoNameV1.src}
              alt="Logo de la Constructora"
              className="w-auto h-10 cursor-pointer"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#servicios"
              className="text-sm font-medium hover:text-[#FC0835] transition-colors">
              Servicios
            </a>
            <a
              href="#proyectos"
              className="text-sm font-medium hover:text-[#FC0835] transition-colors">
              Proyectos
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium hover:text-[#FC0835] transition-colors">
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium hover:text-[#FC0835] transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-[#FC0835] hover:opacity-90 mr-4 lg:mr-0">
            <a href="#contacto">Cotizar Proyecto</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                  <Badge
                    variant="outline"
                    className="w-fit text-black bg-orange-50 backdrop-blur-sm">
                    +15 años de experiencia
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
                    Construimos tus sueños con calidad y confianza
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl drop-shadow-md">
                    Especialistas en construcción de casas, edificios y
                    refacciones. Transformamos tus ideas en realidad con los más
                    altos estándares de calidad.
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
                    <span>Garantía extendida</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Materiales premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
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

        {/* Proyectos */}
        <section id="proyectos" className="py-10 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-[#FC0835] text-[#FC0835]">
                  Nuestros Proyectos
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Proyectos que nos enorgullecen
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cada proyecto es único y refleja nuestro compromiso con la
                  excelencia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <img
                  src={ModernHouse.src}
                  width="600"
                  height="400"
                  alt="Casa moderna"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Residencia Los Pinos
                  </h3>
                  <p className="text-gray-600">
                    Casa moderna de 350m² con acabados de lujo y jardín
                    paisajístico.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Casa Residencial</Badge>
                    <Badge variant="secondary">350m²</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src={CommercialBuilding.src}
                  width="600"
                  height="400"
                  alt="Edificio comercial"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Torre Empresarial Centro
                  </h3>
                  <p className="text-gray-600">
                    Edificio corporativo de 12 pisos con tecnología sustentable.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Comercial</Badge>
                    <Badge variant="secondary">12 Pisos</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-10 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-[#FC0835] text-[#FC0835]">
                  Sobre Nosotros
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  15 años construyendo confianza
                </h2>
                <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos una empresa familiar con más de 15 años de experiencia
                  en el sector de la construcción. Nos especializamos en
                  proyectos residenciales y comerciales de alta calidad.
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
                      Especialista en estructuras y gestión de proyectos. Lidera
                      la planificación técnica y supervisión de todas las
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
                      Experto en diseño arquitectónico y planificación urbana.
                      Se encarga del diseño creativo y la conceptualización de
                      todos nuestros proyectos residenciales y comerciales.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-10 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-[#FC0835] text-[#FC0835]">
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
                  <CardTitle className="text-gray-900">
                    María González
                  </CardTitle>
                  <CardDescription>
                    Propietaria - Casa Los Pinos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Excelente trabajo, cumplieron con todos los tiempos y la
                    calidad superó nuestras expectativas. Recomiendo
                    Constructora Rain sin dudarlo."
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
                  <CardTitle className="text-gray-900">
                    Carlos Mendoza
                  </CardTitle>
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

        {/* Contacto */}
        <section id="contacto" className="py-10 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-[#FC0835] text-[#FC0835]">
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
      </main>

      {/* Footer */}
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
                  aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/rainconstructora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FC0835] hover:text-gray-400 transition-colors"
                  aria-label="Facebook">
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
                        className="hover:text-[#FC0835] transition-colors">
                        Sobre Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        href="#proyectos"
                        className="hover:text-[#FC0835] transition-colors">
                        Proyectos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonios"
                        className="hover:text-[#FC0835] transition-colors">
                        Testimonios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contacto"
                        className="hover:text-[#FC0835] transition-colors">
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

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center space-x-3">
          {/* Leyenda para desktop y mobile */}
          <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg border animate-pulse">
            <div className="text-sm font-medium whitespace-nowrap text-start">
              <div>¿Necesitas ayuda?</div>
              <div className="font-bold">Chatea con nosotros</div>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2">
              <div className="w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/5493816368889?text=Hola,%20soy%20de%20ConstructoraPro.%20Me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20de%20construcción%20y%20obtener%20una%20cotización%20para%20mi%20proyecto.%20¿Podrían%20ayudarme?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Contactar por WhatsApp">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
