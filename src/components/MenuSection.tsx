import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MenuSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const MenuSection = ({ title, icon, children }: MenuSectionProps) => {
  return (
    <section className="py-8">
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm px-6 py-4">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase"
        >
          <span className="h-px w-8 bg-primary/30" />
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
        </motion.h3>
      </div>
      <div className="mt-2">{children}</div>
    </section>
  );
};

export default MenuSection;
