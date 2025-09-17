
import { Building, Key, MessageCircle } from "lucide-react";

const ServicesMini = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-brand-red" />,
      title: "Immobilienverwaltung",
      description: [
        "Professionelle Mietverwaltung",
        "Technische Verwaltung und Instandhaltung",
        "Buchhaltung",
      ],
    },
    {
      icon: <Key className="h-8 w-8 text-brand-red" />,
      title: "Immobilienvermittlung",
      description: [
        "Verkauf und Vermietung von Wohn- und Gewerbeimmobilien",
        "Marktanalysen und Bewertung von Immobilien",
      ],
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-red" />,
      title: "Beratung & Unterstützung",
      description: [
        "Strategische Immobilienberatung",
        "Entwicklung und Umsetzung massgeschneiderter Immobilienkonzepte",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMini;
