
import { useState } from "react";
import PropertyCard, { Property } from "@/components/angebote/PropertyCard";

const Angebote = () => {
  // Sample property data
  const allProperties: Property[] = [
    {
      id: 1,
      title: "Moderne Wohnung im Herzen von Zürich",
      address: "Musterstrasse 123, 8001 Zürich",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 1'250'000",
      type: "Wohnung",
      area: "120 m²",
      rooms: "4.5",
    },
    {
      id: 2,
      title: "Exklusives Penthouse mit Seeblick",
      address: "Seestrasse 45, 8700 Küsnacht",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 2'950'000",
      type: "Penthouse",
      area: "220 m²",
      rooms: "5.5",
    },
    {
      id: 3,
      title: "Charmantes Einfamilienhaus mit Garten",
      address: "Gartenweg 7, 8910 Affoltern am Albis",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 1'850'000",
      type: "Haus",
      area: "180 m²",
      rooms: "6",
    },
    {
      id: 4,
      title: "Bürofläche in bester Lage",
      address: "Bahnhofstrasse 90, 8001 Zürich",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 450 / m² / Jahr",
      type: "Gewerbe",
      area: "350 m²",
      rooms: "-",
    },
    {
      id: 5,
      title: "Renovierte Altbauwohnung mit Balkon",
      address: "Kirchgasse 15, 8001 Zürich",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 1'580'000",
      type: "Wohnung",
      area: "110 m²",
      rooms: "3.5",
    },
    {
      id: 6,
      title: "Landhaus mit grossem Grundstück",
      address: "Dorfstrasse 8, 8915 Hausen am Albis",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 2'200'000",
      type: "Haus",
      area: "210 m²",
      rooms: "7.5",
    },
  ];

  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredProperties = selectedType === "all"
    ? allProperties
    : allProperties.filter(property => property.type === selectedType);

  const propertyTypes = ["all", ...new Set(allProperties.map(property => property.type))];

  return (
    <div>
      <div className="bg-brand-cream py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-center">
            Unsere Angebote
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Entdecken Sie unser aktuelles Portfolio an Immobilien zum Kauf und zur Miete
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-colors ${selectedType === type
                  ? "bg-brand-red text-white border border-brand-red"
                  : "bg-white border border-gray-300 text-brand-charcoal hover:border-brand-red"
                }`}
            >
              {type === "all" ? "Alle Objekte" : type}
            </button>
          ))}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                linkPath={`/angebote/${property.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium mb-4">Keine Objekte gefunden</h3>
            <p>Derzeit sind keine Objekte in dieser Kategorie verfügbar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Angebote;
