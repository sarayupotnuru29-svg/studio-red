import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import servicesHero from "@/assets/services-hero.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceTheater from "@/assets/service-theater.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceExecution from "@/assets/service-execution.jpg";

const services = [
  {
    image: serviceResidential,
    title: "Residential Interiors",
    desc: "We transform houses into elegant, personalized sanctuaries. Every space tells your story through thoughtful design, premium materials, and meticulous attention to detail.",
  },
  {
    image: serviceCommercial,
    title: "Commercial Interiors",
    desc: "Premium workspaces designed to inspire productivity and reflect your brand's identity. From corporate offices to retail spaces, we create environments that leave lasting impressions.",
  },
  {
    image: serviceTheater,
    title: "Home Theaters",
    desc: "Immersive cinema experiences in the comfort of your home. We design acoustically optimized, visually stunning theaters tailored to your entertainment needs.",
  },
  {
    image: serviceCeiling,
    title: "Ceiling & Custom Paintings",
    desc: "Bespoke artistic ceiling designs and custom paintings that add a unique dimension to your space. From ornate classical to modern minimalism.",
  },
  {
    image: serviceExecution,
    title: "Design & Execution",
    desc: "Complete interior solutions from initial concept through final installation. We manage every detail so you can sit back and watch your vision come to life.",
  },
];

const Services = () => {
  return (
    <div>
      <HeroBanner image={servicesHero} title="Our Services" subtitle="Exceptional Design, Flawless Execution" />

      <section className="section-padding">
        <div className="container-luxury">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i > 0 ? "mt-24" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="gold-divider mb-6 mx-0" />
                <h2 className="font-heading text-3xl md:text-4xl mb-6">{service.title}</h2>
                <p className="font-accent text-lg text-muted-foreground italic leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-luxury text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Let's Design Your Dream Space</h2>
          <p className="font-accent text-lg text-muted-foreground italic mb-10 max-w-xl mx-auto">
            Every great space begins with a conversation. Tell us about your vision.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-luxury uppercase hover:bg-gold-dark transition-colors duration-300 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
