import { Instagram } from "lucide-react";

const StickyHeader = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-foreground/5">
      <div className="w-5" />
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
          Frappes Culture
        </p>
      </div>
      <a
        href="https://instagram.com/frappesculture"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="text-primary w-5 h-5" />
      </a>
    </nav>
  );
};

export default StickyHeader;
