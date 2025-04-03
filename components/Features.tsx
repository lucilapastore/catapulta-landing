import Image from "next/image";
import FeaturesTabs from "./FeaturesTabs";

export default function Features() {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="relative overflow-hidden">
        {/* Dot pattern background */}
        <div className="absolute inset-0">
          <Image
            src="/images/features_background.png"
            alt="Background pattern"
            fill
            className="object-contain object-left hue-rotate-[90deg]"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <span className="gradient-text-primary mb-6 text-sm tracking-wider flex items-center">
              Features{" "}
              <span className="ml-2 inline-block w-12 h-[1px] gradient-line"></span>
            </span>

            <FeaturesTabs />
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative bg-background aspect-[16/9] rounded-xl overflow-hidden">
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
