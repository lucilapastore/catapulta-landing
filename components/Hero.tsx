import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "./ui/button";

function BackgroundLight() {
  return (
    <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 md:size-[30rem] rounded-full bg-primary blur-[200px] pointer-events-none" />
  );
}

function BackgroundImages() {
  return (
    <div className="hidden md:block absolute z-20 ml-20 top-[27%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px]">
      <Image
        src="/images/hero_platform.png"
        alt="Hero Background"
        fill
        priority
        sizes="(max-width: 800px) 100vw, 800px"
        className="object-contain object-bottom"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
      <BackgroundImages />

      <BackgroundLight />

      <div className="relative flex items-center  md:min-h-[66vh] justify-center">
        <div className="w-full *:z-20 text-center px-4 flex flex-col justify-center items-center gap-8 max-w-2xl mx-auto animate-fade-in-down">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            <Balancer>
              Deploy smart <br /> contracts effortlessly
            </Balancer>
          </h1>

          <div className="text-center">
            <h5 className="font-bold text-base lg:text-lg">
              <Balancer>
                Accelerate your Web3 journey with our plug-and-play SDK
              </Balancer>
            </h5>
            <p className="text-sm">
              <Balancer>
                Effortless Web3 development for developers and teams
              </Balancer>
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <Link
              href="https://github.com/catapulta-sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Image src="/icons/github.svg" alt="" width={24} height={24} />{" "}
                Get started with Github
              </Button>
            </Link>

            <p>
              Sign up for free and access{" "}
              <span className="font-bold">Sepolia Faucet!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
