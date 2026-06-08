import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { CupSoda, Coffee, Citrus, Instagram, Search, X } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import MenuSection from "@/components/MenuSection";
import MenuCard from "@/components/MenuCard";
import FAQSection from "@/components/FAQSection";

// Shake images
import belgianChocolateImg from "@/assets/shake.jpg";
import oreoShakeImg from "@/assets/oreo-shake.jpg";
import rainbowVanillaImg from "@/assets/rainbow-vanilla-shake.jpg";
import mintOreoImg from "@/assets/mint-oreo-shake.jpg";
import chocolateEclairImg from "@/assets/chocolate-eclair-shake.jpg";
import strawberryShakeImg from "@/assets/strawberry-shake.jpg";
import redVelvetImg from "@/assets/red-velvet-shake.jpg";
import veryBerryImg from "@/assets/very-berry-shake.jpg";
import blueberryImg from "@/assets/blueberry-shake.jpg";
import rasmalaiImg from "@/assets/rasmalai-shake.jpg";

// Frappe images
import javaChipImg from "@/assets/java-chip-frappe.jpg";
import frappeCultureImg from "@/assets/frappe-culture.jpg";
import cafeFrappeImg from "@/assets/cafe-frappe.jpg";
import cocaFrappeImg from "@/assets/coca-frappe.jpg";
import doubleChocolateImg from "@/assets/double-chocolate-frappe.jpg";
import cookieCrumbleImg from "@/assets/cookie-crumble-frappe.jpg";

// Mojito images
import mintMojitoImg from "@/assets/mojito.jpg";
import greenAppleImg from "@/assets/green-apple-mojito.jpg";
import classicMojitoImg from "@/assets/classic-mojito.jpg";
import strawberryMojitoImg from "@/assets/strawberry-mojito.jpg";
import blueLagoonImg from "@/assets/blue-lagoon-mojito.jpg";
import chilliGuavaImg from "@/assets/chilli-guava-mojito.jpg";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image: string;
  category: "shake" | "frappe" | "mojito";
}

const allItems: MenuItem[] = [
  // Shakes
  { name: "Belgian Chocolate Shake", desc: "Rich dark cocoa & cream", price: "₹199", image: belgianChocolateImg, category: "shake" },
  { name: "Oreo Shake", desc: "Crushed Oreo cookies blended smooth", price: "₹179", image: oreoShakeImg, category: "shake" },
  { name: "Rainbow Vanilla Shake", desc: "Colorful vanilla dream", price: "₹169", image: rainbowVanillaImg, category: "shake" },
  { name: "Mint Oreo Shake", desc: "Cool mint with Oreo crunch", price: "₹189", image: mintOreoImg, category: "shake" },
  { name: "Chocolate Eclair Shake", desc: "Pastry-inspired indulgence", price: "₹209", image: chocolateEclairImg, category: "shake" },
  { name: "Strawberry Shake", desc: "Fresh strawberry bliss", price: "₹169", image: strawberryShakeImg, category: "shake" },
  { name: "Red Velvet Shake", desc: "Velvety smooth red velvet", price: "₹199", image: redVelvetImg, category: "shake" },
  { name: "Very Berry Shake", desc: "Mixed berry explosion", price: "₹189", image: veryBerryImg, category: "shake" },
  { name: "Blue Berry Shake", desc: "Premium blueberry blend", price: "₹189", image: blueberryImg, category: "shake" },
  { name: "Rasmalai Shake", desc: "Classic Indian dessert twist", price: "₹219", image: rasmalaiImg, category: "shake" },
  // Frappes
  { name: "Java Chip Frappe", desc: "Espresso with chocolate chips", price: "₹229", image: javaChipImg, category: "frappe" },
  { name: "Frappe Culture", desc: "Our signature house blend", price: "₹249", image: frappeCultureImg, category: "frappe" },
  { name: "Cafe Frappe", desc: "Classic coffee frappe", price: "₹199", image: cafeFrappeImg, category: "frappe" },
  { name: "Coca Frappe", desc: "Rich cocoa coffee fusion", price: "₹219", image: cocaFrappeImg, category: "frappe" },
  { name: "Double Chocolate Frappe", desc: "Twice the chocolate, twice the love", price: "₹239", image: doubleChocolateImg, category: "frappe" },
  { name: "Cookie Crumble Frappe", desc: "Cookies blended to perfection", price: "₹229", image: cookieCrumbleImg, category: "frappe" },
  // Mojitos
  { name: "Mint Mojito", desc: "Fresh mint & lime classic", price: "₹149", image: mintMojitoImg, category: "mojito" },
  { name: "Green Apple Mojito", desc: "Tart green apple freshness", price: "₹159", image: greenAppleImg, category: "mojito" },
  { name: "Classic Mojito", desc: "The timeless original", price: "₹139", image: classicMojitoImg, category: "mojito" },
  { name: "Strawberry Mojito", desc: "Sweet strawberry burst", price: "₹159", image: strawberryMojitoImg, category: "mojito" },
  { name: "Blue Lagoon Mojito", desc: "Tropical blue refresher", price: "₹169", image: blueLagoonImg, category: "mojito" },
  { name: "Chilli Guava Mojito", desc: "Spicy guava kick", price: "₹169", image: chilliGuavaImg, category: "mojito" },
];

type CategoryFilter = "all" | "shake" | "frappe" | "mojito";

const categories: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "shake", label: "SHAKES" },
  { key: "frappe", label: "FRAPPES" },
  { key: "mojito", label: "MOJITOS" },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const isSearching = search.trim().length > 0;

  const shakes = allItems.filter((i) => i.category === "shake");
  const frappes = allItems.filter((i) => i.category === "frappe");
  const mojitos = allItems.filter((i) => i.category === "mojito");

  const categoryCount = (key: CategoryFilter) => {
    if (key === "all") return allItems.length;
    return allItems.filter((i) => i.category === key).length;
  };

  const filtered = useMemo(() => {
    let items = activeFilter === "all" ? allItems : allItems.filter((i) => i.category === activeFilter);
    if (isSearching) {
      const q = search.toLowerCase();
      items = items.filter(
        (item) => item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, isSearching, activeFilter]);

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <Helmet>
        <title>Frappes Culture Chiplun — Famous Coffee, Shakes & Juice Center</title>
        <meta
          name="description"
          content="Chiplun's famous coffee, shake & juice center. Premium cold coffee, frappes, thick shakes and mojitos. Scan, browse the menu, order at the counter."
        />
        <link rel="canonical" href="https://frappe-culture.lovable.app/" />
        <meta property="og:url" content="https://frappe-culture.lovable.app/" />
      </Helmet>
      <StickyHeader />

      <main>
      {/* Hero */}
      <header className="px-6 pt-12 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-5xl font-black text-foreground tracking-tighter leading-[0.9]"
        >
          COLD COFFEE
          <br />
          <span className="text-primary">& SHAKES.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-[22ch] text-lg font-medium"
        >
          Cold Coffee • Shakes • Mocktails
        </motion.p>
      </header>

      {/* Search Bar */}
      <div className="px-6 py-4 sticky top-16 z-45 bg-background/95 backdrop-blur-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search drinks..."
            className="w-full pl-11 pr-10 py-3 bg-surface rounded-2xl border border-foreground/5 text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all"
          />
          {isSearching && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="px-6 pb-2">
        <div className="flex gap-2 bg-surface rounded-full p-1.5 border border-foreground/5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`flex-1 px-3 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                activeFilter === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label} ({categoryCount(cat.key)})
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <AnimatePresence mode="wait">
        {isSearching || activeFilter !== "all" ? (
          <motion.div
            key={`filtered-${activeFilter}-${search}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pb-8"
          >
            {isSearching && (
              <div className="px-6 py-3">
                <p className="text-muted-foreground text-xs">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"
                </p>
              </div>
            )}
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <MenuCard
                  key={item.name}
                  name={item.name}
                  description={item.desc}
                  price={item.price}
                  image={item.image}
                  index={i}
                />
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <p className="text-muted-foreground text-sm">No drinks found.</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="full-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MenuSection title="Shakes" icon={<CupSoda className="w-4 h-4" />}>
              {shakes.map((item, i) => (
                <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={item.image} index={i} />
              ))}
            </MenuSection>

            <MenuSection title="Frappes" icon={<Coffee className="w-4 h-4" />}>
              {frappes.map((item, i) => (
                <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={item.image} index={i} />
              ))}
            </MenuSection>

            <MenuSection title="Mojitos" icon={<Citrus className="w-4 h-4" />}>
              {mojitos.map((item, i) => (
                <MenuCard key={item.name} name={item.name} description={item.desc} price={item.price} image={item.image} index={i} />
              ))}
            </MenuSection>
          </motion.div>
        )}
      </AnimatePresence>

      <FAQSection />

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
