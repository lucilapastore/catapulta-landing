import Image from "next/image";
import { Button } from "./ui/button";

export default function Features() {
  return (
    <section className="w-full  bg-background/80  text-white py-16 px-4 md:px-6 lg:px-8">
      <div className=" bg-black relative overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#2be195 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="mb-6">
              <span className="text-primary text-sm uppercase tracking-wider flex items-center">
                Features{" "}
                <span className="ml-2 inline-block w-6 h-[1px] bg-[#2be195]"></span>
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 tracking-tight lg:text-5xl">
              <span className="text-white">No </span>
              <span className="text-primary">crypto</span>
              <span className="text-white"> required</span>
            </h1>

            <h5 className="text-white text-lg mb-2      font-bold  lg:text-xl">
              Deploy smart contracts without cryptocurrency
            </h5>

            <p className="text-white mb-8 max-w-lg   text-sm">
              Say goodbye to funding wallets or handling crypto.
              <br />
              Focus on building, we&apos;ll handle the rest.
            </p>

            <div className="flex flex-wrap gap-2 p-1 bg-[#111111]/50 rounded-full max-w-fit border border-primary">
              <Button
                variant="secondary"
                className="px-4 py-2 bg-[#0b5134] text-[#2be195] rounded-full text-sm "
              >
                No crypto
              </Button>
              <button className="px-4 py-2 text-[#cccccc] hover:bg-[#111111] rounded-full text-sm transition-colors">
                Zero-code
              </button>
              <button className="px-4 py-2 text-[#cccccc] hover:bg-[#111111] rounded-full text-sm transition-colors">
                Traceability
              </button>
              <button className="px-4 py-2 text-[#cccccc] hover:bg-[#111111] rounded-full text-sm transition-colors">
                Reports
              </button>
              <button className="px-4 py-2 text-[#cccccc] hover:bg-[#111111] rounded-full text-sm transition-colors">
                Routing
              </button>
              <button className="px-4 py-2 text-[#cccccc] hover:bg-[#111111] rounded-full text-sm transition-colors">
                Tools
              </button>
            </div>
          </div>
          {/* Right side content - Image */}{" "}
          {/* Mover la imagen para la derecha */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/features.png"
                alt="Catapulta features interface"
                fill
                priority
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
