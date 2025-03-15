import { Button } from "./ui/button";

export default function StatsSection() {
  const stats = [
    {
      number: "+550",
      description: "Developers actively using Catapulta",
    },
    {
      title: "Trusted by leading projects",
      description:
        "Aave DAO used Catapulta to deploy Lido and EtherFi instances, saving weeks of work and enhancing collaboration among providers.",
    },
    {
      number: "+3,500",
      description: "Smart contracts deployed across multiple networks",
    },
  ];

  return (
    <section className="bg-background/80 text-white py-24 place-items-center w-full min-h-screen px-4 md:px-6 lg:px-8 container place-items-center grid flex-col justify-center items-center max-w-[1140px] py-4 px-4 md:px-16 mx-auto rounded-lg md:mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 lg:mb-0 tracking-tight ">
            Stats and success stories
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-base md:text-base text-foreground">
              Be part of the success — start deploying smarter today.
            </p>
            <Button className="bg-primary hover:bg-emerald-500 text-black px-6 py-2 rounded-full font-medium transition-colors">
              Start deploying
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background/80 border border-gray-800 backdrop-blur-sm"
            >
              {stat.number ? (
                <>
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    {stat.number}
                  </div>
                  <p className="text-gray-400">{stat.description}</p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-4">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
