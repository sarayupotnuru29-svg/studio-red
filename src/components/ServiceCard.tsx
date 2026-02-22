import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ image, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="overflow-hidden border border-primary/10">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pt-6">
        <h3 className="font-heading text-xl text-primary mb-2 group-hover:text-gold-light transition-colors duration-300">
          {title}
        </h3>
        <p className="font-accent text-muted-foreground italic leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
