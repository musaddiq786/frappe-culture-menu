import { motion } from "framer-motion";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

const MenuCard = ({ name, description, price, image, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      whileTap={{ scale: 0.98 }}
      className="mx-6 mb-4 p-3 bg-surface rounded-[2rem] border border-foreground/5 flex items-center gap-4 cursor-pointer active:bg-secondary transition-colors"
    >
      <div className="w-24 h-24 bg-background rounded-2xl overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
        <div>
          <h4 className="text-foreground font-bold text-lg leading-tight">{name}</h4>
          <p className="text-muted-foreground text-xs mt-1">{description}</p>
        </div>
        <span className="text-primary font-mono-price font-bold mt-2">{price}</span>
      </div>
    </motion.div>
  );
};

export default MenuCard;
