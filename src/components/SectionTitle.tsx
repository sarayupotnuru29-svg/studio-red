import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, align = "center", light }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <p className="text-sm tracking-royal uppercase text-primary mb-4 font-body">
          {subtitle}
        </p>
      )}
      <div className={`gold-divider mb-6 ${align === "left" ? "mx-0" : ""}`} />
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-6 ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className="font-accent text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
