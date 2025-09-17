
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const properties = [
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
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center">Aktuelle Angebote</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Entdecken Sie unsere sorgfältig ausgewählten Immobilienangebote. Wir haben für jeden Bedarf die passende Lösung.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="property-card group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1 text-sm rounded">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2 truncate">
                  {property.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{property.address}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-brand-red">
                    {property.price}
                  </span>
                  <div className="text-sm text-muted-foreground">
                    {property.rooms} Zimmer | {property.area}
                  </div>
                </div>
                <Link
                  to={`/angebote/${property.id}`}
                  className="block text-center py-2 border border-brand-red text-brand-red rounded-md hover:bg-brand-red hover:text-white transition-colors"
                >
                  Details anzeigen
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/angebote" className="btn-primary">
            Alle Angebote anzeigen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
