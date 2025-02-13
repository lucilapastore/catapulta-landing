"use client";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import arbitrum from "@/public/blockchains/arbitrum.png";
import base from "@/public/blockchains/base.png";
import polygon from "@/public/blockchains/polygon.png";
import Image from "next/image";
import Link from "next/link";

interface CarouselItem {
  id: number;
  name: string;
  logo: string;
  url: string;
  openInNewTab?: boolean;
}

const items: CarouselItem[] = [
  {
    id: 1,
    name: "Polygon",
    logo: polygon.src,
    url: "https://polygon.technology/",
    openInNewTab: true,
  },
  {
    id: 2,
    name: "Arbitrum",
    logo: arbitrum.src,
    url: "https://arbitrum.io",
    openInNewTab: true,
  },
  {
    id: 3,
    name: "Base",
    logo: base.src,
    url: "https://base.org",
    openInNewTab: true,
  },
  {
    id: 4,
    name: "Polygon",
    logo: polygon.src,
    url: "https://polygon.technology",
    openInNewTab: true,
  },
  {
    id: 5,
    name: "Arbitrum",
    logo: arbitrum.src,
    url: "https://arbitrum.io",
    openInNewTab: true,
  },
  {
    id: 6,
    name: "Base",
    logo: base.src,
    url: "https://base.org",
    openInNewTab: true,
  },
  // Add more items as needed
];

export default function Sponsors() {
  return (
    <div className="w-full grid container place-items-center bg-background/80 flex-col justify-center items-center max-w-[1140px] py-4 px-4 md:px-16 mx-auto rounded-lg md:mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12">
          +20 EVM-compatible <span className="text-primary">blockchains</span>
        </h2>

        <Carousel
          opts={{
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  href={item.url}
                  target={item.openInNewTab ? "_blank" : "_self"}
                  rel={item.openInNewTab ? "noopener noreferrer" : ""}
                  className="block p-4 hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.name} logo`}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
