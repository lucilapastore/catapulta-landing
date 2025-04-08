"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full min-h-screen bg-background/80 text-white py-16 px-4 md:px-6 lg:px-8 relative bg-[url(/images/faqs_background.svg)] bg-no-repeat bg-cover bg-center">
     
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="gradient-text-primary mb-4 text-sm tracking-wider flex items-center justify-center">
            <span className="mr-2 inline-block w-12 h-[1px] gradient-line-left"></span>
            FAQs{" "}
            <span className="ml-2 inline-block w-12 h-[1px] gradient-line"></span>
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            We are here to help you
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="multiple"
          className="w-full space-y-4"
          defaultValue={faqs.map((_, index) => `item-${index}`)}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-800"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Still have questions?
          </h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-primary text-primary-foreground border-primary hover:bg-emerald-500 hover:text-black text-lg"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
