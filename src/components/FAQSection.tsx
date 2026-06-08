import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Where is Frappes Culture located?",
    a: "Frappes Culture is located in Chiplun, Maharashtra — known as the city's famous coffee, shake and juice center.",
  },
  {
    q: "What does Frappes Culture serve?",
    a: "We serve premium cold coffee, frappes, thick milkshakes, mojitos and mocktails. Popular picks include Java Chip Frappe, Oreo Shake and Mint Mojito.",
  },
  {
    q: "How do I order?",
    a: "Scan the QR code on your table to browse the digital menu, then place your order at the counter.",
  },
  {
    q: "What is the price range?",
    a: "Most drinks are priced between ₹139 and ₹249 — a premium café experience at an affordable price.",
  },
  {
    q: "Does Frappes Culture have Instagram?",
    a: "Yes — follow @frappesculture for new drinks, offers and updates.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-6 py-12" aria-labelledby="faq-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-primary/30" />
          <h2
            id="faq-heading"
            className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-foreground/5 bg-surface rounded-2xl px-4 border-b"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold text-sm hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
