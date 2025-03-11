import { Code } from "lucide-react";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="text-emerald-400 text-sm uppercase tracking-wider mb-4 flex items-center">
            <div className="h-px w-6 bg-emerald-400 mr-2"></div>
            How it works
            <div className="h-px w-6 bg-emerald-400 ml-2"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
            Deploying contracts in multiple chains is{" "}
            <span className="relative">
              <span className="line-through opacity-50">difficult</span>{" "}
              <span className="text-emerald-400">easy</span>
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8">
            Compatible and gas-free in the main EVMs.
          </p>

          <p className="text-gray-400 max-w-3xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>

        {/* Dashboard UI - Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          <div className="lg:col-span-3 bg-zinc-900 rounded-xl p-6">
            <div className="space-y-2 mb-6">
              <p className="text-gray-300">Report Name: DeployTrebuchets.sol</p>
              <p className="text-gray-300">
                Report UUID: 6b5e2a04-9e88-758a-5s45f-354g865486d5
              </p>
              <p className="text-gray-300">Created at: 19/10/2023, 14:06:52</p>
              <p className="text-gray-300">Notes:</p>
            </div>
            <button className="border border-gray-700 rounded-md px-4 py-2 text-gray-300 hover:bg-gray-800 transition">
              Add notes
            </button>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <div className="space-y-2">
              <p className="text-gray-300">Sandbox ID: DeployTrebu...</p>
              <p className="text-gray-300">Original chain id: 6b5e2a0...</p>
              <p className="text-gray-300">Fork chain ID:</p>
              <p className="text-gray-300">Sandbox RPC URL:</p>
            </div>
          </div>
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
