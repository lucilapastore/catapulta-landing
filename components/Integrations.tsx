import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Integration {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  openInNewTab?: boolean;
}

const integrations: Integration[] = [
  {
    title: "Hardhat",
    subtitle: "Developer tooling",
    description:
      "Hardhat is a development environment for smart contracts, providing tools to edit, compile, debug, and deploy decentralized applications.",
    icon: "",
    href: "/integrations/hardhat",
  },
  {
    title: "GasHawk",
    subtitle: "RPC Proxy & TX Monitoring",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac pellentesque augue ac orci dui ullamcorper fermentum dolor vitae.",
    icon: "",
    href: "/integrations/gashawk",
    openInNewTab: true,
  },
  {
    title: "Foundry",
    subtitle: "Developer tooling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci turpis nam malesuada feugiat est.",
    icon: "",
    href: "/integrations/foundry",
  },
  {
    title: "BuildBear",
    subtitle: "Sandbox & tooling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac viverra posuere libero purus egestas.",
    icon: "",
    href: "/integrations/buildbear",
  },
];

export default function Integrations() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden grid place-items-center container bg-background/80 flex-col justify-center items-center max-w-[1140px] py-4 px-4 md:px-16 mx-auto rounded-lg md:mt-8">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(to right, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8">
          <div className="text-emerald-400 mb-4">How it works</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Integrations</h2>
          <p className="text-gray-400 max-w-3xl text-lg">
            Catapulta aims to support as many integrations as possible that
            speeds up Web3 development. If you want to request a new
            integration, apply below.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {integrations.map((integration, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <IntegrationCard {...integration} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
          <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
        </Carousel>
      </div>
    </div>
  );
}

function IntegrationCard({
  title,
  subtitle,
  description,
  icon,
  href,
  openInNewTab,
}: Integration) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="block group h-[250px]" // Add fixed height here
    >
      <div className="relative rounded-2xl p-6 h-full bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${title} icon`}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
        <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
      </div>
    </a>
  );
}
