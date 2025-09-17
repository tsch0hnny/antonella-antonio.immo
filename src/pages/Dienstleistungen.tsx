import { Building, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import ServicesMini from "@/components/home/ServicesMini";

const Dienstleistungen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    anrede: "",
    name: "",
    strasse: "",
    ort: "",
    stockwerk: "",
    email: "",
    telefon: "",
    beschreibung: "",
    files: null as FileList | null,
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: e.target.files });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "files" && value) {
        // IMPORTANT: Append `[]` to the key for PHP to receive an array of files
        Array.from(value as FileList).forEach((file) => {
          data.append(key + "[]", file);
        });
      } else if (key !== "files") {
        data.append(key, String(value));
      }
    });

    // Get the mailer URL from your Vite environment variables (.env.local, etc.)
    const mailerUrl = import.meta.env.VITE_MAILER_URL;

    if (!mailerUrl) {
      console.error("VITE_MAILER_URL is not defined in your environment variables.");
      toast.error("Die Anwendung ist nicht korrekt konfiguriert. Bitte kontaktieren Sie den Administrator.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(mailerUrl, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Ein unbekannter Serverfehler ist aufgetreten." }));
        throw new Error(errorData.error || "Network response was not ok");
      }

      toast.success(
        "Ihre Meldung wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.",
      );

      // Reset form state on successful submission
      setFormData({
        anrede: "",
        name: "",
        strasse: "",
        ort: "",
        stockwerk: "",
        email: "",
        telefon: "",
        beschreibung: "",
        files: null,
        consent: false,
      });

      // Manually reset the file input field in the DOM
      const fileInput = document.getElementById("files") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(`Ein Fehler ist aufgetreten: ${(error as Error).message}`);
    } finally {
      setIsLoading(false); // Re-enable the button
    }
  };

  return (
    <div>
      <div className="bg-brand-cream py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-center">
            Unsere Dienstleistungen
          </h1>
        </div>
      </div>
      {/* Dienstleistungen Section */}
      <ServicesMini />
      {/* Stockwerk- und Mieteigentum Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-serif font-medium">
                  Stockwerk- und Mieteigentum
                </h2>
              </div>
              <p className="leading-relaxed mb-3">
                Aus Erfahrung wissen wir, dass jede Liegenschaft und jeder
                Eigentümer einzigartig sind. Deshalb steht bei all unseren
                Aktivitäten stets die individuelle Betreuung von Menschen und
                Immobilie im Zentrum. Das ist die Basis für eine erfolgreiche
                Zusammenarbeit im Stockwerkeigentum und Mieteigentum.
              </p>
              <p className="leading-relaxed mb-3">
                Die Verwaltung von Stockwerkeigentum erfordert spezifische
                Kenntnisse im Umgang mit gemeinschaftlichem Eigentum. Die
                gesetzlichen Vorschriften, die Gemeinschaftsreglemente und die
                Beschlüsse der Eigentümer verlangen eine saubere Trennung von
                Sonderrechten und gemeinschaftlichen Teilen. Zur Wahrung dieser
                Trennung und beim Umgang mit Eigentümern braucht es oft viel
                Fingerspitzengefühl. Wir stellen uns gerne dieser
                Herausforderung.
              </p>
              <p className="leading-relaxed">
                Dabei können wir Sie in vielerlei Hinsicht unterstützen – von
                der Durchführung der jährlichen Eigentümerversammlung bis hin
                zur Schlichtung bei allfälligen Problemen. Auch die Begründung
                einer Stockwerkeigentümer-Gemeinschaft mit Erstellung eines
                Reglementes oder die perfekte Protokollierung von
                Versammlungsbeschlüssen gehört in unser Aufgabengebiet.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586161713586-d0055e438da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Stockwerk- und Mieteigentum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bewirtschaftung und Mietliegenschaften Section */}
      <section className="py-16 bg-brand-beige/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Bewirtschaftung und Mietliegenschaften"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 prose prose-lg max-w-none">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-serif font-medium">
                  Bewirtschaftung und Mietliegenschaften
                </h2>
              </div>
              <p className="leading-relaxed mb-3">
                Die Bewirtschaftung von Immobilien ist eine anspruchsvolle
                Aufgabe. Zahlreiche Faktoren erfordern immer mehr
                Fachkenntnisse und Zeit, damit im Interesse aller Beteiligten
                ein angenehmes und langfristiges Mietverhältnis ermöglicht
                werden kann.
              </p>
              <p className="leading-relaxed mb-3">
                Unsere Hauptaufgabe ist es, für Sie die optimale Rendite zu
                erwirtschaften sowie einen guten Zustand Ihrer Liegenschaft zu
                erhalten. Dafür setzen wir das ganze Spektrum der
                Verwaltungsbereiche ein – von der Mietersuche und -auswahl über
                die gesamte Administration bis zur technischen Hausverwaltung.
              </p>
              <p className="leading-relaxed">
                Dank unserer regelmässigen Liegenschaftskontrollen und der
                engen Zusammenarbeit mit den Hauswarten sind wir jederzeit
                bestens über den Zustand Ihrer Immobilie informiert. Denn
                zufriedene Mieter sind unser oberstes und langfristiges Ziel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schaden- und Reparatur Meldung Section */}
      <section id="schaden-meldung" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-medium mb-6">
              Schaden- und Reparatur Meldung
            </h2>
            <p className="mb-8 text-lg">
              Defektes Gerät, tropfender Wasserhahn, verstopfter Abfluss,
              Parkettschaden, Glasbruch USW. Melden Sie Ihre Schäden und
              Reparaturanträge mit dem Onlineformular – jederzeit und bequem.
            </p>
            <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p>
                <strong>Achtung:</strong> Bitte melden Sie Schäden, die ein
                schnelles Eingreifen erfordern (z.B. Wasserschaden, verstopfte
                Toilette) unter info@antonella-antonio.immo. Ausserhalb der
                Bürozeiten kontaktieren Sie bitte den Hauswart.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="anrede"
                    className="block text-sm font-medium mb-1"
                  >
                    ANREDE *
                  </label>
                  <select
                    id="anrede"
                    name="anrede"
                    value={formData.anrede}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    VORNAME NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="strasse"
                    className="block text-sm font-medium mb-1"
                  >
                    STRASSE- NR. *
                  </label>
                  <input
                    type="text"
                    id="strasse"
                    name="strasse"
                    value={formData.strasse}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="ort"
                    className="block text-sm font-medium mb-1"
                  >
                    PLZ / ORT *
                  </label>
                  <input
                    type="text"
                    id="ort"
                    name="ort"
                    value={formData.ort}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="stockwerk"
                    className="block text-sm font-medium mb-1"
                  >
                    STOCKWERK IHRER WOHNUNG
                  </label>
                  <input
                    type="text"
                    id="stockwerk"
                    name="stockwerk"
                    value={formData.stockwerk}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium mb-1"
                  >
                    TELEFON *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="beschreibung"
                    className="block text-sm font-medium mb-1"
                  >
                    SCHADEN BESCHREIBUNG *
                  </label>
                  <Textarea
                    id="beschreibung"
                    name="beschreibung"
                    rows={4}
                    value={formData.beschreibung}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="files"
                    className="block text-sm font-medium mb-1"
                  >
                    FOTO / BILDER / UNTERLAGEN VON SCHADEN
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50"
                    multiple
                    accept="image/*,.pdf"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Akzeptierte Formate: Bilder (JPG, PNG) und PDF-Dokumente
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-start mb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm">
                    Ich bestätige, dass meine Daten an die Servicefirma
                    weitergeleitet werden dürfen. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-brand-red text-white py-3 px-6 rounded hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isLoading ? "Wird gesendet..." : "Schaden melden"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dienstleistungen;
