import { motion } from "framer-motion";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
}

const HeroBanner = ({ image, title, subtitle }: HeroBannerProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center container-luxury"
      >
        <div className="gold-divider mb-6" />
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-accent text-xl text-muted-foreground italic">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default HeroBanner;
