import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-red text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">
              Antonella & Antonio Immobilien
            </h3>
            <p className="text-white/90 mb-6">
              Wir maximieren den Wert Ihrer Immobilie und bieten Ihnen als
              Eigentümer/in oder Mieter/in den besten Service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Kontakt</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  Breitenerlistrasse 14
                  <br />
                  8912 Obfelden
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@antonella-antonio.immo"
                  className="hover:text-white"
                >
                  info@antonella-antonio.immo
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="tel:+41767666884" className="hover:text-white">
                  076 766 68 84
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dienstleistungen"
                  className="hover:text-white transition-colors"
                >
                  Dienstleistungen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-sm text-white/80 flex flex-row justify-between items-end">
          <p>
            © {new Date().getFullYear()} Antonella & Antonio Immobilien. Alle
            Rechte vorbehalten.
          </p>
          <svg
            width="273px"
            height="193px"
            viewBox="0 0 273 193"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-20 h-16"
          >
            <title>SVIT-Logo-Zuerich_CMYK</title>
            <defs>
              <polygon
                id="path-1"
                points="2.44249065e-15 0 70.281 0 70.281 43.918 2.44249065e-15 43.918"
              ></polygon>
              <polygon
                id="path-3"
                points="0 0 212.321 0 212.321 192.084 0 192.084"
              ></polygon>
            </defs>
            <g
              id="SVIT-Logo-Zuerich_CMYK"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M48.453,141.688 C17.298,141.688 1.723,131.492 1.723,111.098 L11.353,111.098 C11.353,119.052 14.325,124.89 20.272,128.611 C26.217,132.334 35.666,134.194 48.611,134.194 C70.081,134.194 80.818,129.451 80.818,119.968 C80.818,113.955 73.554,109.722 59.031,107.275 C52.294,106.563 45.506,105.798 38.665,104.98 C28.981,103.86 21.615,102.025 16.562,99.474 C9.721,96.11 6.3,91.268 6.3,84.945 C6.3,77.197 11.089,71.332 20.667,67.355 C27.717,64.503 35.768,63.072 44.822,63.072 C74.819,63.072 89.816,72.15 89.816,90.297 L80.028,90.297 C80.028,83.567 77.343,78.597 71.976,75.385 C66.609,72.173 57.925,70.567 45.926,70.567 C38.875,70.567 32.559,71.537 26.982,73.474 C19.615,76.022 15.932,79.846 15.932,84.945 C15.932,90.962 23.036,94.885 37.245,96.72 L59.819,99.627 C80.238,102.177 90.448,108.957 90.448,119.968 C90.448,128.331 85.237,134.346 74.819,138.017 C67.871,140.465 59.083,141.688 48.453,141.688"
                id="Fill-1"
                fill="#ffffff"
              ></path>
              <polyline
                id="Fill-2"
                fill="#ffffff"
                points="149.402 140.274 141.266 140.274 91.192 66.296 102.147 66.296 145.334 131.482 185.079 66.296 195.407 66.296 149.402 140.274"
              ></polyline>
              <polygon
                id="Fill-3"
                fill="#ffffff"
                points="202.915 140.274 212.147 140.274 212.147 66.135 202.915 66.135"
              ></polygon>
              <polyline
                id="Fill-4"
                fill="#ffffff"
                points="250.756 75 250.756 140.274 241.679 140.274 241.679 75 220.711 75 220.711 66.153 272.193 66.153 272.193 75 250.756 75"
              ></polyline>
              <g id="Group-8" transform="translate(1.248000, 149.022000)">
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <g id="Clip-6"></g>
                <polyline
                  id="Fill-5"
                  fill="#ffffff"
                  mask="url(#mask-2)"
                  points="2.44249065e-15 39.71 26.308 11.019 1.687 11.019 1.687 7.644 31.272 7.644 31.272 11.019 4.814 39.71 31.668 39.71 31.668 43.085 2.44249065e-15 43.085 2.44249065e-15 39.71"
                ></polyline>
                <path
                  d="M58.22,5.46 L61.893,5.46 L61.893,0 L58.22,0 L58.22,5.46 Z M47.002,5.46 L50.675,5.46 L50.675,0 L47.002,0 L47.002,5.46 Z M70.281,29.384 C70.281,35.838 68.494,43.978 54.447,43.978 C40.4,43.978 38.613,35.838 38.613,29.384 L38.613,7.644 L42.286,7.644 L42.286,29.384 C42.286,38.667 48.292,40.603 54.447,40.603 C60.602,40.603 66.608,38.667 66.608,29.384 L66.608,7.644 L70.281,7.644 L70.281,29.384 L70.281,29.384 Z"
                  id="Fill-7"
                  fill="#ffffff"
                  mask="url(#mask-2)"
                ></path>
              </g>
              <path
                d="M85.771,173.146 L101.308,173.146 C105.328,173.146 108.952,171.656 108.952,166.246 C108.952,161.034 105.03,160.041 101.655,160.041 L85.771,160.041 L85.771,173.146 Z M82.099,156.666 L101.407,156.666 C107.413,156.666 112.923,158.8 112.923,166.246 C112.923,170.018 110.59,173.79 105.974,174.833 L105.974,174.932 C110.987,175.727 112.029,178.953 112.277,184.76 C112.377,186.994 112.675,191.313 113.518,192.107 L109.548,192.107 C108.902,191.362 108.654,188.732 108.604,184.86 C108.505,178.606 106.122,176.521 100.018,176.521 L85.771,176.521 L85.771,192.107 L82.099,192.107 L82.099,156.666 L82.099,156.666 Z"
                id="Fill-9"
                fill="#ffffff"
              ></path>
              <g id="Group-15" transform="translate(0.060000, 0.856000)">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"></use>
                </mask>
                <g id="Clip-11"></g>
                <polygon
                  id="Fill-10"
                  fill="#ffffff"
                  mask="url(#mask-4)"
                  points="121.841 191.251 125.515 191.251 125.515 155.81 121.841 155.81"
                ></polygon>
                <path
                  d="M170.831,177.75 C170.037,185.691 163.484,192.144 153.31,192.144 C141.794,192.144 134.447,184.897 134.447,173.53 C134.447,165.439 139.461,154.917 153.31,154.917 C161.053,154.917 169.441,158.441 170.533,167.772 L166.86,167.772 C165.768,161.022 159.712,158.292 153.31,158.292 C144.523,158.292 138.418,163.206 138.418,173.53 C138.418,181.422 142.538,188.769 153.31,188.769 C161.747,188.769 165.917,184.5 167.158,177.75 L170.831,177.75"
                  id="Fill-12"
                  fill="#ffffff"
                  mask="url(#mask-4)"
                ></path>
                <polyline
                  id="Fill-13"
                  fill="#ffffff"
                  mask="url(#mask-4)"
                  points="179.362 155.81 183.035 155.81 183.035 170.8 208.647 170.8 208.647 155.81 212.321 155.81 212.321 191.251 208.647 191.251 208.647 174.175 183.035 174.175 183.035 191.251 179.362 191.251 179.362 155.81"
                ></polyline>
                <polyline
                  id="Fill-14"
                  fill="#ffffff"
                  mask="url(#mask-4)"
                  points="207.449 0 -0.06 51.837 18.467 51.837 207.437 14.434 207.481 14.461 207.481 0.019 207.449 0"
                ></polyline>
              </g>
              <polyline
                id="Fill-16"
                fill="#ffffff"
                points="272.193 52.693 207.541 0.875 207.541 15.317 260.429 52.693 272.193 52.693"
              ></polyline>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//              <li>
//                <Link
//                  to="/angebote"
//                  className="hover:text-white transition-colors"
//                >
//                  Angebote
//                </Link>
//              </li>
//              <li>
//                <Link
//                  to="/erfolge"
//                  className="hover:text-white transition-colors"
//                >
//                  Erfolge
//                </Link>
//              </li>

