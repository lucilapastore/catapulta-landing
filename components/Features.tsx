import Image from "next/image";
import FeaturesTabs from "./FeaturesTabs";

export default function Features() {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="relative overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-20 max-w-96 ml-[-100px]"
          style={{
            backgroundImage: `radial-gradient(#2be195 6px, transparent 6px)`,
            backgroundSize: "24px 24px",
            maskImage: `radial-gradient(circle at center, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(circle at center, black 30%, transparent 80%)`,
          }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <span className="text-primary mb-6 text-sm uppercase tracking-wider flex items-center">
              Features{" "}
              <span className="ml-2 inline-block w-6 h-[1px] bg-[#2be195]"></span>
            </span>

            <FeaturesTabs />
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/features.png"
                alt="Catapulta features interface"
                fill
                priority
                className="object-cover fade-out-bottom-right"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
