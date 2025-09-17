
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-16 bg-brand-beige/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Über Antonella & Antonio Immobilien</h2>
            <p className="text-lg mb-6">
              Wir sind ein Familienunternehmen mit Herz und Leidenschaft für Immobilien. Unser Ziel ist es, den Wert Ihrer Immobilie zu maximieren und Ihnen als Eigentümer/in oder Mieter/in den besten Service zu bieten.
            </p>
            <p className="text-lg mb-6">
              Wir setzen auf persönliche Betreuung, Qualität und Zuverlässigkeit. Mit unserer Erfahrung und unserem Know-how stehen wir Ihnen jederzeit zur Verfügung.
            </p>
            <div className="mt-6">
              <Link to="/dienstleistungen" className="btn-primary">
                Kontaktieren Sie uns
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/c1c3549f-e9ea-417d-8084-f7ed10105619.png"
                alt="Antonella"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/661b514e-3739-4853-9324-79bd8a570f1d.png"
                alt="Antonio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
