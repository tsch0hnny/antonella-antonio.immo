import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IMAGE_URLS = [
  "https://images.unsplash.com/photo-1726335223142-135ab5e0945f",
  "https://images.unsplash.com/photo-1712822030833-e648f98870dd",
  "https://images.unsplash.com/photo-1591378912974-d3dc4bc12d11",
  "https://images.unsplash.com/photo-1638552592708-729dd68e7bfb",
  "https://images.unsplash.com/photo-1666467126593-17859fd13942",
];

const URL_PARAMS =
  "?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";

const getFullUrl = (baseUrl: string) => `${baseUrl}${URL_PARAMS}`;

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % IMAGE_URLS.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  const bgImageUrl = getFullUrl(IMAGE_URLS[bgIndex]);

  return (
    <div className="relative bg-brand-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          transition: "background-image 0.5s ease-in-out",
        }}
      ></div>
      <div className="container-custom relative py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-brand-charcoal">
            Ihre Immobilien <br />
            <span className="text-brand-red">in besten Händen</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-brand-charcoal/90 max-w-2xl">
            Wir maximieren den Wert Ihrer Immobilie und bieten Ihnen als
            Eigentümer/in oder Mieter/in den besten Service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/dienstleistungen" className="btn-secondary">
              Unsere Dienstleistungen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


//             <Link to="/angebote" className="btn-primary">
//              Angebote entdecken
//            </Link>

