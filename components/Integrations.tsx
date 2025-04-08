import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";

interface Integration {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  openInNewTab?: boolean;
  gradientFrom: string;
  gradientTo: string;
}

const integrations: Integration[] = [
  {
    title: "Hardhat",
    subtitle: "Developer tooling",
    description:
      "Hardhat is a development environment for smart contracts, providing tools to edit, compile, debug, and deploy decentralized applications.",
    icon: "/integrations/hardhat.png",
    href: "/integrations/hardhat",
    gradientFrom: "purple-900/90",
    gradientTo: "yellow-900/30",
  },
  {
    title: "GasHawk",
    subtitle: "RPC Proxy & TX Monitoring",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac pellentesque augue ac orci dui ullamcorper fermentum dolor vitae.",
    icon: "/integrations/gashawk.png",
    href: "/integrations/gashawk",
    openInNewTab: true,
    gradientFrom: "amber-950/90",
    gradientTo: "amber-900/30",
  },
  {
    title: "Foundry",
    subtitle: "Developer tooling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci turpis nam malesuada feugiat est.",
    icon: "/integrations/foundry.png",
    href: "/integrations/foundry",
    gradientFrom: "gray-900/90",
    gradientTo: "gray-700/30",
  },
  {
    title: "BuildBear",
    subtitle: "Sandbox & tooling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac viverra posuere libero purus egestas.",
    icon: "/integrations/buildbear.png",
    href: "/integrations/buildbear",
    gradientFrom: "gray-900/90",
    gradientTo: "gray-800/30",
  },
];

export default function Integrations() {
  return (
    <section className="w-full bg-background/80 text-white py-16 px-4 md:px-6 lg:px-8 bg-[url(/images/integrations_background.svg)] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8">
          <span className="gradient-text-primary mb-4 text-sm tracking-wider flex items-center">
            How it works{" "}
            <span className="ml-2 inline-block w-12 h-[1px] gradient-line"></span>
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Integrations</h2>
          <p className="text-muted-foreground max-w-3xl text-lg">
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

          <div className="flex justify-between items-center">
            {/* Dots navigation */}
            <CarouselDots />

            {/* Navigation buttons wrapper */}
            <div className="flex gap-2 mt-8 pr-4">
              <CarouselPrevious className="static sm:flex h-8 w-8" />
              <CarouselNext className="static sm:flex h-8 w-8" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function IntegrationCard({
  title,
  subtitle,
  description,
  icon,
  href,
  openInNewTab,
  gradientFrom,
  gradientTo,
}: Integration) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="block group h-full"
    >
      <Card
        className={`relative rounded-2xl p-6 from-${gradientFrom} to-${gradientTo} bg-[radial-gradient(ellipse_at_bottom_center,var(--tw-gradient-from),var(--tw-gradient-to))] h-full flex flex-col`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="size-8">
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
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>

          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
          {description}
        </p>
      </Card>
    </a>
  );
}
