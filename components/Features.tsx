import Image from "next/image";

export default function Features() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
            <span className="text-[#2be195] text-sm uppercase tracking-wider flex items-center">
              Features{" "}
              <span className="ml-2 inline-block w-6 h-[1px] bg-[#2be195]"></span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">No </span>
            <span className="text-[#2be195]">crypto</span>
            <span className="text-white"> required</span>
          </h1>

          <h2 className="text-white text-xl md:text-2xl mb-4">
            Deploy smart contracts without cryptocurrency
          </h2>

          <p className="text-[#aaaaaa] mb-8 max-w-lg">
            Say goodbye to funding wallets or handling crypto.
            <br />
            Focus on building, we&apos;ll handle the rest.
          </p>

          <div className="flex flex-wrap gap-2 p-1 bg-[#111111]/50 rounded-full max-w-fit">
            <button className="px-4 py-2 bg-[#0b5134] text-[#2be195] rounded-full text-sm">
              No crypto
            </button>
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

        {/* Right side content - Image */}
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
  );
}
