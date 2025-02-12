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
    <section className="bg-black text-white py-24 grid place-items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-0">
            Stats and success stories
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-lg md:text-xl text-gray-300">
              Be part of the success — start deploying smarter today.
            </p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-2 rounded-full font-medium transition-colors">
              Start deploying
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
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
