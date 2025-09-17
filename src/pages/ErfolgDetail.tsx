
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Home, Maximize, Bed, Calendar, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import ImageGallery from "@/components/common/ImageGallery";

const ErfolgDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Sample property data (in a real app, fetch based on ID)
  const soldProperties = [
    {
      id: 101,
      title: "Luxuriöse Villa mit Seesicht",
      address: "Seestrasse 78, 8702 Zollikon",
      description: "Diese beeindruckende Villa mit atemberaubendem Blick auf den Zürichsee wurde erfolgreich an eine Familie verkauft, die den Luxus und die exklusive Lage zu schätzen weiß. Das Objekt verfügt über großzügige Wohnräume, einen gepflegten Garten und eine hochwertige Ausstattung.",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
      price: "CHF 4'200'000",
      type: "Villa",
      area: "280 m²",
      rooms: "8.5",
      built: "2005",
      soldDate: "Januar 2023",
      features: [
        "Panoramablick auf den Zürichsee",
        "Großer Garten mit Terrasse",
        "Eingangshalle mit Marmorboden",
        "Offene, hochwertige Küche",
        "Hauptschlafzimmer mit eigenem Bad",
        "Wellness-Bereich mit Sauna",
        "Doppelgarage",
      ],
      testimonial: {
        text: "Antonella und Antonio haben uns mit ihrer professionellen und persönlichen Betreuung überzeugt. Sie haben den Verkauf unserer Villa sehr kompetent und erfolgreich abgewickelt.",
        author: "Familie Müller, Verkäufer",
      },
    },
    {
      id: 102,
      title: "Maisonette-Wohnung mit Garten",
      description: "Diese charmante Maisonette-Wohnung mit eigenem Garten hat schnell einen neuen Besitzer gefunden. Die offene Raumgestaltung, die moderne Ausstattung und die ruhige, dennoch zentrale Lage haben überzeugt.",
      address: "Kirchweg 15, 8802 Kilchberg",
      images: [
        "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      ],
      price: "CHF 2'350'000",
      type: "Wohnung",
      area: "160 m²",
      rooms: "5.5",
      built: "2012",
      soldDate: "März 2023",
      features: [
        "Zwei Etagen mit separatem Eingang",
        "Eigener Garten mit 120 m²",
        "Offener Wohn-Essbereich",
        "Moderne Einbauküche",
        "Elternschlafzimmer mit Ankleide",
        "Fußbodenheizung",
        "Tiefgaragenstellplatz",
      ],
      testimonial: {
        text: "Der Verkaufsprozess war unkompliziert und schnell. Die realistische Preiseinschätzung und das professionelle Marketing haben zum schnellen Erfolg geführt.",
        author: "M. Schmidt, Käufer",
      },
    },
    // Add other properties...
  ];

  const property = soldProperties.find(p => p.id === Number(id));

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
        <h1 className="text-3xl font-serif font-semibold mb-6">Objekt nicht gefunden</h1>
        <p className="mb-8">Das gesuchte Objekt ist leider nicht verfügbar.</p>
        <Link to="/erfolge" className="btn-primary">
          Zurück zu allen Erfolgen
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white border-b">
        <div className="container-custom py-6">
          <Link to="/erfolge" className="inline-flex items-center text-brand-charcoal hover:text-brand-red transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu allen Erfolgen
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={property.images} title={property.title} />

      {/* Property Info */}
      <div className="container-custom py-8">
        <div className="mb-8">
          <div className="inline-block bg-brand-red text-white px-4 py-1 rounded mb-4">
            Erfolgreich verkauft: {property.soldDate}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            {property.title}
          </h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            {property.address}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-brand-beige/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-brand-red mr-2" />
                  <span className="text-sm text-muted-foreground">Verkauft</span>
                </div>
                <div className="font-medium">{property.soldDate}</div>
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
              <h2 className="text-2xl font-serif font-medium mb-4">Über dieses Objekt</h2>
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

            {property.testimonial && (
              <div className="bg-brand-beige/30 p-6 rounded-lg">
                <blockquote className="text-lg italic mb-4">
                  "{property.testimonial.text}"
                </blockquote>
                <cite className="block font-medium">— {property.testimonial.author}</cite>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="text-xl font-serif font-medium mb-4">Möchten Sie Ihre Immobilie verkaufen?</h3>
              <p className="mb-6">
                Profitieren Sie von unserer Erfahrung und unserem Netzwerk. Wir helfen Ihnen, den optimalen Preis für Ihre Immobilie zu erzielen.
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
                href="mailto:info@antonella-antonio.immo?subject=Immobilienverkauf"
                className="btn-primary w-full text-center block"
              >
                Kontaktieren Sie uns
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErfolgDetail;
