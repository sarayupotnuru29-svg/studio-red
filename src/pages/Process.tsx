import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import heroImg from "@/assets/hero-living-room.jpg";

const steps = [
  {
    step: "01",
    title: "Free Consulting",
    desc: "With every project Studio Red offers a free meet and greet consultation where we listen to you in great detail about all your needs and requirements. We take time to understand your lifestyle, preferences, and aspirations to ensure every design decision reflects your personality.",
    cta: "Book a Free Consultation",
  },
  {
    step: "02",
    title: "Budget Designing",
    desc: "Want a great design but have a tight budget? No worries! We create highly cost-effective designs that save you money without compromising on style. We provide detailed quotes based on your requirements and offer transparent pricing throughout the process.",
    cta: "Get a Quote Now",
  },
  {
    step: "03",
    title: "Full Service Execution",
    desc: "We offer full-service interior design from start to finish, including procurement and installation of all elements. Our team manages every detail — from sourcing the finest materials to coordinating skilled craftsmen — so all you have to do is sit back and wait for the big reveal.",
    cta: "Let's Work Together",
  },
];

const Process = () => {
  return (
    <div>
      <HeroBanner image={heroImg} title="Our Process" subtitle="Three Steps to Your Dream Home" />

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative pl-16 lg:pl-24 ${i < steps.length - 1 ? "pb-20 border-l border-primary/20 ml-6" : "ml-6"}`}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 border border-primary flex items-center justify-center bg-background">
                <span className="font-heading text-primary text-lg">{item.step}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">{item.title}</h2>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed mb-8">
                {item.desc}
              </p>
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 text-xs tracking-luxury uppercase hover:bg-gold-dark transition-colors duration-300 inline-block"
              >
                {item.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Process;
