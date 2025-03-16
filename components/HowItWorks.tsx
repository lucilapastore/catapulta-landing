import Image from "next/image";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center ">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="text-primary text-sm  tracking-wider mb-4 flex items-center">
            <div className="h-px w-6 bg-primary mr-2 "></div>
            How it works
            <div className="h-px w-6 bg-primary ml-2"></div>
          </div>

          <h5 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 max-w-4xl   ">
            Deploying contracts in multiple chains is{" "}
            <span className="relative">
              <span className="line-through">difficult</span>{" "}
              <span className="text-primary">easy</span>
            </span>
          </h5>

          <p className=" max-w-2xl mb-8">
            Compatible and gas-free in the main EVMs.
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="relative h-[700px] mb-16 rounded-xl overflow-hidden">
          <Image
            src="/images/how_it_works.png"
            fill
            alt="Catapulta dashboard interface"
            priority
            className="object-contain"
            quality={100}
          />
        </div>
      </section>
    </main>
  );
}
