import { Button } from "./ui/button";

export default function StatsSection() {
  const stats = [
    {
      title: "+550",
      description: "Developers actively using Catapulta",
    },
    // {
    //   title: "Trusted by leading projects",
    //   description:
    //     "Aave DAO used Catapulta to deploy Lido and EtherFi instances, saving weeks of work and enhancing collaboration among providers.",
    // },
    {
      title: "+1,000",
      description: "Smart contracts deployed in the last 30 days",
    },
    {
      title: "+3,500",
      description: "Smart contracts deployed across multiple networks",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:mb-0 tracking-tight">
            Stats and success stories
          </h2>

          <p className="text-base text-muted-foreground">
            Be part of the success — start deploying smarter today.
          </p>
        </div>

        <Button>Start deploying</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative p-8 rounded-2xl border bg-card/80 backdrop-blur-sm flex flex-col items-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              {stat.title}
            </h3>
            <p className="text-muted-foreground text-center">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
        Aave DAO used Catapulta to deploy Lido and EtherFi instances, saving
        weeks of work and enhancing collaboration among providers.
      </p>
    </section>
  );
}
