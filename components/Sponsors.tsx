"use client";

import arbitrum from "@/public/blockchains/arbitrum.png";
import base from "@/public/blockchains/base.png";
import polygon from "@/public/blockchains/polygon.png";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "./ui/marquee";

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
    <section className="w-full bg-background/80">
      {/* Contained header */}
      <div className="max-w-[1140px] mx-auto px-4 md:px-16">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12">
          +20 EVM-compatible <span className="text-primary">blockchains</span>
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target={item.openInNewTab ? "_blank" : "_self"}
              rel={item.openInNewTab ? "noopener noreferrer" : ""}
              className="mx-8 block hover:opacity-80 transition-opacity"
            >
              <div className="h-16 w-32 relative">
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={`${item.name} logo`}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/80"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/80"></div>
      </div>
    </section>
  );
}
