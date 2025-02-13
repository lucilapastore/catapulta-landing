import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function BackgroundLight() {
  return (
    <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary blur-[160px] pointer-events-none" />
  );
}

function BackgroundImages() {
  return (
    <Image
      src="/images/hero_platform.png"
      alt="Hero Background"
      width={1050}
      height={643}
      quality={100}
      className="absolute z-10 ml-20 bottom-[-200px] left-1/2 -translate-x-1/2"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative w-full [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
      <div className="*:z-20 min-h-screen text-center px-4 flex flex-col justify-center items-center gap-8 max-w-2xl mx-auto">
        <BackgroundLight />

        <BackgroundImages />

        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Deploy smart contracts effortlessly
        </h1>

        <div className="text-center">
          <h5 className="font-bold text-lg lg:text-xl">
            Accelerate your Web3 journey with our plug-and-play SDK
          </h5>
          <p className="text-sm">
            Effortless Web3 development for developers and teams
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Link href="https://github.com/catapulta-sh">
            <Button>
              <Image src="icons/github.svg" alt="" width={24} height={24} /> Get
              started with Github
            </Button>
          </Link>

          <p>
            Sign up for free and access 
            <span className="font-bold">Sepolia Faucet!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
