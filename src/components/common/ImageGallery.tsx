
import { useState } from "react";
import { Maximize } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const isMobile = useIsMobile();

  if (!images.length) return null;

  return (
    <div className="container-custom pt-6 pb-12">
      {/* Desktop layout: Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main image with fullscreen button - Left column on desktop, top on mobile */}
        <div className="lg:col-span-8 relative aspect-[4/3] rounded-lg overflow-hidden max-h-[600px]">
          <img
            src={images[activeImageIndex]}
            alt={`${title} - Hauptbild`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setFullscreenOpen(true)}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Vollbild anzeigen"
          >
            <Maximize className="h-5 w-5 text-brand-charcoal" />
          </button>
        </div>

        {/* Thumbnails - Right column on desktop, bottom on mobile */}
        <div className="lg:col-span-4 h-full">
          {/* Desktop view: vertical thumbnails with scroll */}
          {!isMobile && (
            <div className="h-full max-h-[600px]">
              <ScrollArea className="h-full">
                <div className="pr-4 space-y-2">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all ${activeImageIndex === index
                        ? 'ring-2 ring-brand-red scale-95'
                        : 'opacity-80 hover:opacity-100'
                        }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}

          {/* Mobile view: horizontal thumbnails */}
          {isMobile && (
            <div className="mt-4">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/4">
                      <div
                        className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all ${activeImageIndex === index
                          ? 'ring-2 ring-brand-red scale-95'
                          : 'opacity-80 hover:opacity-100'
                          }`}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img
                          src={image}
                          alt={`${title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-y-1/2" />
                <CarouselNext className="right-0 -translate-y-1/2" />
              </Carousel>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-[95vw] w-auto h-auto max-h-[95vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[activeImageIndex]}
              alt={`${title} - Vollbild`}
              className="max-w-full max-h-[90vh] object-contain rounded-md"
            />
            <Carousel className="absolute bottom-4 w-full max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/5">
                    <div
                      className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all ${activeImageIndex === index
                        ? 'ring-2 ring-brand-red'
                        : 'opacity-70 hover:opacity-100'
                        }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
