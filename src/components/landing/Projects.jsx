
import { Badge } from "@/components/ui/badge";
import ModernHouse from "@/assets/modern_house.jpg";
import CommercialBuilding from "@/assets/commercial_building.jpg";

export default function Projects() {
  return (
    <section id="proyectos" className="py-10 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#FC0835] text-[#FC0835]"
            >
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
  );
}
