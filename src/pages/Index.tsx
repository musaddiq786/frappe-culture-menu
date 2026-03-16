import { motion } from "framer-motion";
import { CupSoda, Coffee, Citrus, Instagram } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import MenuSection from "@/components/MenuSection";
import MenuCard from "@/components/MenuCard";
import shakeImg from "@/assets/shake.jpg";
import frappeImg from "@/assets/frappe.jpg";
import mojitoImg from "@/assets/mojito.jpg";

const shakes = [
  { name: "Belgian Chocolate Shake", desc: "Rich dark cocoa & cream", price: "₹199" },
  { name: "Oreo Shake", desc: "Crushed Oreo cookies blended smooth", price: "₹179" },
  { name: "Rainbow Vanilla Shake", desc: "Colorful vanilla dream", price: "₹169" },
  { name: "Mint Oreo Shake", desc: "Cool mint with Oreo crunch", price: "₹189" },
  { name: "Chocolate Eclair Shake", desc: "Pastry-inspired indulgence", price: "₹209" },
  { name: "Strawberry Shake", desc: "Fresh strawberry bliss", price: "₹169" },
  { name: "Red Velvet Shake", desc: "Velvety smooth red velvet", price: "₹199" },
  { name: "Very Berry Shake", desc: "Mixed berry explosion", price: "₹189" },
  { name: "Blue Berry Shake", desc: "Premium blueberry blend", price: "₹189" },
  { name: "Rasmalai Shake", desc: "Classic Indian dessert twist", price: "₹219" },
];

const frappes = [
  { name: "Java Chip Frappe", desc: "Espresso with chocolate chips", price: "₹229" },
  { name: "Frappe Culture", desc: "Our signature house blend", price: "₹249" },
  { name: "Cafe Frappe", desc: "Classic coffee frappe", price: "₹199" },
  { name: "Coca Frappe", desc: "Rich cocoa coffee fusion", price: "₹219" },
  { name: "Double Chocolate Frappe", desc: "Twice the chocolate, twice the love", price: "₹239" },
  { name: "Cookie Crumble Frappe", desc: "Cookies blended to perfection", price: "₹229" },
];

const mojitos = [
  { name: "Mint Mojito", desc: "Fresh mint & lime classic", price: "₹149" },
  { name: "Green Apple Mojito", desc: "Tart green apple freshness", price: "₹159" },
  { name: "Classic Mojito", desc: "The timeless original", price: "₹139" },
  { name: "Strawberry Mojito", desc: "Sweet strawberry burst", price: "₹159" },
  { name: "Blue Lagoon Mojito", desc: "Tropical blue refresher", price: "₹169" },
  { name: "Chilli Guava Mojito", desc: "Spicy guava kick", price: "₹169" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <StickyHeader />

      {/* Hero */}
      <header className="px-6 pt-12 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-5xl font-black text-foreground tracking-tighter leading-[0.9]"
        >
          COLD COFFEE
          <br />
          <span className="text-primary">& SHAKES.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-[22ch] text-lg font-medium"
        >
          Cold Coffee • Shakes • Mocktails
        </motion.p>
      </header>

      {/* Menu Sections */}
      <MenuSection title="Shakes" icon={<CupSoda className="w-4 h-4" />}>
        {shakes.map((item, i) => (
          <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={shakeImg} index={i} />
        ))}
      </MenuSection>

      <MenuSection title="Frappes" icon={<Coffee className="w-4 h-4" />}>
        {frappes.map((item, i) => (
          <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={frappeImg} index={i} />
        ))}
      </MenuSection>

      <MenuSection title="Mojitos" icon={<Citrus className="w-4 h-4" />}>
        {mojitos.map((item, i) => (
          <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={mojitoImg} index={i} />
        ))}
      </MenuSection>

      {/* Footer */}
      <footer className="px-6 py-12 text-center space-y-4">
        <div className="inline-block px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
          <p className="text-primary font-bold text-sm tracking-widest uppercase">
            Order at Counter
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs pt-4">
          <a
            href="https://instagram.com/frappesculture"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @frappesculture
          </a>
        </div>
        <p className="text-muted-foreground/50 text-xs">
          © 2026 Frappes Culture. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
