
import PropertyCard, { Property } from "@/components/angebote/PropertyCard";

const Erfolge = () => {
  // Sample sold properties data
  const soldProperties: Property[] = [
    {
      id: 101,
      title: "Luxuriöse Villa mit Seesicht",
      address: "Seestrasse 78, 8702 Zollikon",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 4'200'000",
      type: "Villa",
      area: "280 m²",
      rooms: "8.5",
      isSold: true,
    },
    {
      id: 102,
      title: "Maisonette-Wohnung mit Garten",
      address: "Kirchweg 15, 8802 Kilchberg",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 2'350'000",
      type: "Wohnung",
      area: "160 m²",
      rooms: "5.5",
      isSold: true,
    },
    {
      id: 103,
      title: "Moderne Stadtvilla im Grünen",
      address: "Birkenweg 22, 8134 Adliswil",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 3'180'000",
      type: "Haus",
      area: "220 m²",
      rooms: "6.5",
      isSold: true,
    },
    {
      id: 104,
      title: "Attraktive Gewerbeliegenschaft",
      address: "Industriestrasse 45, 8304 Wallisellen",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 3'850'000",
      type: "Gewerbe",
      area: "450 m²",
      rooms: "-",
      isSold: true,
    },
    {
      id: 105,
      title: "Stadthaus mit eigenem Garten",
      address: "Freiestrasse 12, 8003 Zürich",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 2'680'000",
      type: "Haus",
      area: "180 m²",
      rooms: "5.5",
      isSold: true,
    },
    {
      id: 106,
      title: "Exklusive Attikawohnung",
      address: "Sonnenbergstrasse 32, 8610 Uster",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      price: "CHF 1'690'000",
      type: "Wohnung",
      area: "135 m²",
      rooms: "4.5",
      isSold: true,
    },
  ];

  return (
    <div>
      <div className="bg-brand-cream py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-center">
            Unsere Erfolge
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Eine Auswahl unserer erfolgreich vermittelten Immobilien
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soldProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              linkPath={`/erfolge/${property.id}`}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">
            Möchten Sie Ihre Immobilie erfolgreich verkaufen?
          </h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Wir helfen Ihnen, den optimalen Preis für Ihre Immobilie zu erzielen. Profitieren Sie von unserer Erfahrung und unserem Netzwerk.
          </p>
          <div className="flex justify-center">
            <a href="mailto:info@antonella-antonio.immo?subject=Immobilienverkauf" className="btn-primary">
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erfolge;
