
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Home, Maximize, Bed, Bath, Calendar, Tag, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import ImageGallery from "@/components/common/ImageGallery";

const AngebotDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Sample property data (in a real app, fetch based on ID)
  const properties = [
    {
      id: 1,
      title: "Moderne Wohnung im Herzen von Zürich",
      address: "Musterstrasse 123, 8001 Zürich",
      description: "Diese wunderschöne, moderne Wohnung befindet sich in bester Lage im Herzen von Zürich. Mit ihren 4.5 Zimmern bietet sie genügend Platz für eine kleine Familie oder ist ideal für anspruchsvolle Paare. Die hochwertige Ausstattung, die offene Küche und der grosse Balkon machen diese Immobilie zu etwas ganz Besonderem. Die zentrale Lage ermöglicht einen einfachen Zugang zu öffentlichen Verkehrsmitteln, Geschäften und Restaurants.",
      images: [
        "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
      price: "CHF 1'250'000",
      type: "Wohnung",
      area: "120 m²",
      rooms: "4.5",
      bathrooms: "2",
      built: "2015",
      features: [
        "Moderne Einbauküche",
        "Balkon",
        "Lift",
        "Keller",
        "Parkett",
        "Zentrale Lage",
        "Nahe öffentliche Verkehrsmittel",
      ],
    },
    {
      id: 2,
      title: "Exklusives Penthouse mit Seeblick",
      address: "Seestrasse 45, 8700 Küsnacht",
      description: "Dieses atemberaubende Penthouse bietet einen spektakulären Blick auf den Zürichsee und die Alpen. Die grosszügige Raumaufteilung, die exklusive Ausstattung und die grosse Dachterrasse machen diese Immobilie zu einem wahren Juwel. Die Penthouse-Wohnung erstreckt sich über die gesamte oberste Etage des Gebäudes und bietet somit maximale Privatsphäre.",
      images: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-53c7cec4cb70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
      price: "CHF 2'950'000",
      type: "Penthouse",
      area: "220 m²",
      rooms: "5.5",
      bathrooms: "3",
      built: "2010",
      features: [
        "Panoramablick",
        "Private Dachterrasse",
        "Luxuriöse Ausstattung",
        "Fussbodenheizung",
        "Tiefgarage",
        "Smart Home System",
        "Concierge Service",
      ],
    },
    // Add other properties...
  ];

  const property = properties.find(p => p.id === Number(id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set document title
    if (property) {
      document.title = `${property.title} | Antonella & Antonio Immobilien`;
    }

    return () => {
      document.title = "Antonella & Antonio Immobilien";
    };
  }, [property]);

  if (!property) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-serif font-semibold mb-6">Immobilie nicht gefunden</h1>
        <p className="mb-8">Die gesuchte Immobilie ist leider nicht verfügbar.</p>
        <Link to="/angebote" className="btn-primary">
          Zurück zu allen Angeboten
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white border-b">
        <div className="container-custom py-6">
          <Link to="/angebote" className="inline-flex items-center text-brand-charcoal hover:text-brand-red transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu allen Angeboten
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={property.images} title={property.title} />

      {/* Property Info */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              {property.title}
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              {property.address}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-brand-beige/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Tag className="h-5 w-5 text-brand-red mr-2" />
                  <span className="text-sm text-muted-foreground">Preis</span>
                </div>
                <div className="font-medium">{property.price}</div>
              </div>
              <div className="bg-brand-beige/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Home className="h-5 w-5 text-brand-red mr-2" />
                  <span className="text-sm text-muted-foreground">Typ</span>
                </div>
                <div className="font-medium">{property.type}</div>
              </div>
              <div className="bg-brand-beige/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Maximize className="h-5 w-5 text-brand-red mr-2" />
                  <span className="text-sm text-muted-foreground">Fläche</span>
                </div>
                <div className="font-medium">{property.area}</div>
              </div>
              <div className="bg-brand-beige/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Bed className="h-5 w-5 text-brand-red mr-2" />
                  <span className="text-sm text-muted-foreground">Zimmer</span>
                </div>
                <div className="font-medium">{property.rooms}</div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Beschreibung</h2>
              <p className="text-lg leading-relaxed mb-6">{property.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Ausstattung</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-brand-red">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="text-xl font-serif font-medium mb-4">Kontaktieren Sie uns</h3>
              <p className="mb-6">
                Haben Sie Interesse an dieser Immobilie? Kontaktieren Sie uns für weitere Informationen oder um einen Besichtigungstermin zu vereinbaren.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-brand-red mr-3" />
                  <div>
                    Breitenerlistrasse 14<br />
                    8912 Obfelden
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-red mr-3" />
                  <a
                    href="mailto:info@antonella-antonio.immo"
                    className="hover:text-brand-red"
                  >
                    info@antonella-antonio.immo
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-red mr-3" />
                  <a href="tel:+41767666884" className="hover:text-brand-red">
                    076 766 68 84
                  </a>
                </div>
              </div>
              <a
                href={`mailto:info@antonella-antonio.immo?subject=Anfrage: Objekt-ID ${property.id}`}
                className="btn-primary w-full text-center block"
              >
                Anfrage senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngebotDetail;
