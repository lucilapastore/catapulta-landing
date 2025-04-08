import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, LineChart, Rocket } from "lucide-react";

const platformTabs = [
  {
    id: "clone-template",
    label: "Clone the template",
    heading: "Clone the template",
    icon: Copy,
    description: (
      <>
        <span className="text-primary">
          Start with our battle-tested template.
        </span>{" "}
        Get instant access to a production-ready foundation that has been
        refined through real-world use and community feedback.
      </>
    ),
  },
  {
    id: "no-setup",
    label: "No manual setup",
    heading: "No manual setup",
    icon: Code,
    description: (
      <>
        <span className="text-primary">Skip the tedious configuration.</span>{" "}
        Everything is pre-configured and ready to go, from build settings to
        testing frameworks, saving you hours of setup time.
      </>
    ),
  },
  {
    id: "deploy",
    label: "Deploy in seconds",
    heading: "Deploy in seconds",
    icon: Rocket,
    description: (
      <>
        <span className="text-primary">Launch with confidence.</span> Our
        streamlined deployment process gets your project live in seconds,
        complete with automated checks and optimizations.
      </>
    ),
  },
  {
    id: "monitor",
    label: "Monitor your results",
    heading: "Monitor your results",
    icon: LineChart,
    description: (
      <>
        <span className="text-primary">
          Kickstart your journey with our template.
        </span>{" "}
        This ready-to-use foundation eliminates the hassle of setting up your
        project from scratch, allowing you to focus on building and innovating
        from day one.
      </>
    ),
  },
];

export default function PlatformTabs() {
  return (
    <Tabs defaultValue={platformTabs[0].id} className="items-center">
      <div className="max-w-3xl mx-auto text-center">
        {platformTabs.map(({ id, heading, icon: Icon, description }) => (
          <TabsContent key={id} value={id} className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Icon className="w-8 h-8 text-white filter drop-shadow-lg" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-effect">
                {heading}
              </h2>
            </div>
            <p className="mb-6 mx-auto max-w-3xl">{description}</p>
          </TabsContent>
        ))}

        <TabsList className="h-auto rounded-none bg-transparent p-0 justify-center flex-wrap">
          {platformTabs.map(({ id, label }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}
