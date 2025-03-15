import { Code } from "lucide-react";
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
        <div className="relative h-[300px] w-full mb-16 rounded-xl overflow-hidden">
          <Image
            src="/images/how_it_works-copy.png"
            alt="Catapulta dashboard interface"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Monitor Results Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-8 h-8 text-white" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Monitor your results
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="mb-6">
              <span className="text-emerald-400">
                Kickstart your journey with our template.
              </span>{" "}
              This ready-to-use foundation eliminates the hassle of setting up
              your project from scratch, allowing you to focus on building and
              innovating from day one.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-2">Clone the template</p>
                <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-2">No manual setup</p>
                <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-2">Deploy in seconds</p>
                <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-2">Monitor your results</p>
                <div className="h-1 w-12 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
