import { MacbookPro } from "./ui/macbook";

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="text-primary text-sm tracking-wider mb-4 flex items-center">
          <span className="gradient-text-primary mb-6 text-sm tracking-wider flex items-center">
            <span className="mr-2 inline-block w-12 h-[1px] gradient-line-left"></span>
            How it works{" "}
            <span className="ml-2 inline-block w-12 h-[1px] gradient-line"></span>
          </span>
        </div>

        <h5 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 max-w-4xl">
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

      <div className="relative">
        <MacbookPro
          src="/images/how_it_works.png"
          className="mx-auto size-full"
        />
      </div>
    </section>
  );
}
