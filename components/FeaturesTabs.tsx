import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const FEATURES_TABS = [
  {
    id: "no-crypto",
    label: "No crypto",
    title: {
      start: "No ",
      highlight: "crypto",
      end: " required",
    },
    subtitle: "Deploy smart contracts without cryptocurrency",
    description:
      "Say goodbye to funding wallets or handling crypto.\nFocus on building, we'll handle the rest.",
  },
  {
    id: "zero-code",
    label: "Zero-code",
    title: {
      start: "Zero-",
      highlight: "code",
      end: " deployments",
    },
    subtitle: "Deploy contracts without writing any code",
    description:
      "Simple interface to deploy and manage your contracts. No coding experience required.",
  },
  {
    id: "traceability",
    label: "Traceability",
    title: {
      start: "Full ",
      highlight: "traceability",
      end: " included",
    },
    subtitle: "Track every deployment and transaction",
    description:
      "Complete audit trail of all your operations. Know exactly what happened and when.",
  },
  {
    id: "reports",
    label: "Reports",
    title: {
      start: "Detailed ",
      highlight: "reports",
      end: " & analytics",
    },
    subtitle: "Comprehensive reporting system",
    description:
      "Get insights into your deployments and transactions with detailed analytics and reports.",
  },
  {
    id: "routing",
    label: "Routing",
    title: {
      start: "Smart ",
      highlight: "routing",
      end: " system",
    },
    subtitle: "Optimal transaction routing",
    description:
      "Automatically route your transactions through the most efficient paths and networks.",
  },
  {
    id: "tools",
    label: "Tools",
    title: {
      start: "Developer ",
      highlight: "tools",
      end: " suite",
    },
    subtitle: "Complete toolkit for developers",
    description:
      "Access a comprehensive suite of development and testing tools in one place.",
  },
];

export default function FeaturesTabs() {
  return (
    <Tabs defaultValue={FEATURES_TABS[0].id} className="z-50">
      {FEATURES_TABS.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-6 tracking-tight lg:text-5xl">
            <span className="text-white">{tab.title.start}</span>
            <span className="text-primary">{tab.title.highlight}</span>
            <span className="text-white">{tab.title.end}</span>
          </h1>

          <h5 className="text-white text-lg mb-2 font-bold lg:text-xl">
            {tab.subtitle}
          </h5>

          <p className="text-white mb-8 max-w-lg text-sm">
            {tab.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < tab.description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </TabsContent>
      ))}

      <TabsList className="gap-1 bg-background border-primary flex-wrap border-0 sm:border">
        {FEATURES_TABS.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.id}
            className="py-2 data-[state=active]:bg-primary/30 data-[state=active]:text-white data-[state=active]:border border-primary rounded-full"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
