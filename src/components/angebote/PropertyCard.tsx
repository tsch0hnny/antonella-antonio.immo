
import { Link } from "react-router-dom";

export interface Property {
  id: number;
  title: string;
  address: string;
  image: string;
  price: string;
  type: string;
  area: string;
  rooms: string;
  isSold?: boolean;
}

interface PropertyCardProps {
  property: Property;
  linkPath: string;
}

const PropertyCard = ({ property, linkPath }: PropertyCardProps) => {
  return (
    <div className="property-card group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1 text-sm rounded">
          {property.type}
        </div>
        {property.isSold && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-brand-red text-white text-lg font-medium px-6 py-2 rotate-[-15deg]">
              Verkauft
            </span>
          </div>
        )}
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
          to={linkPath}
          className="block text-center py-2 border border-brand-red text-brand-red rounded hover:bg-brand-red hover:text-white transition-colors"
        >
          Details anzeigen
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
