import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import servicesHero from "@/assets/services-hero.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceTheater from "@/assets/service-theater.jpg";
import serviceTurnkey from "@/assets/service-turnkey.jpg";
import serviceProjectMgmt from "@/assets/service-project-mgmt.jpg";
import serviceExecution from "@/assets/service-execution.jpg";
import serviceFalseCeiling from "@/assets/service-false-ceiling.jpg";
import serviceModular from "@/assets/service-modular.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceStone from "@/assets/service-stone.jpg";

const services = [
  {
    id: "residential-interiors",
    image: serviceResidential,
    title: "Residential Interiors",
    desc: "We transform houses into elegant, personalized sanctuaries. Every space tells your story through thoughtful design, premium materials, and meticulous attention to detail.",
  },
  {
    id: "commercial-interiors",
    image: serviceCommercial,
    title: "Commercial Interiors",
    desc: "Premium workspaces designed to inspire productivity and reflect your brand's identity. From corporate offices to retail spaces, we create environments that leave lasting impressions.",
  },
  {
    id: "home-theatres",
    image: serviceTheater,
    title: "Home Theatres",
    desc: "Immersive cinema experiences in the comfort of your home. We design acoustically optimized, visually stunning theaters tailored to your entertainment needs.",
  },
  {
    id: "turnkey-projects",
    image: serviceTurnkey,
    title: "Turnkey Projects",
    desc: "Complete end-to-end solutions where we handle everything — from design conceptualization to final handover. Move into your dream space without lifting a finger.",
  },
  {
    id: "project-management",
    image: serviceProjectMgmt,
    title: "Project Management",
    desc: "Expert coordination of timelines, budgets, and resources to ensure your interior project is delivered on time and within budget, with zero compromises on quality.",
  },
  {
    id: "design-execution",
    image: serviceExecution,
    title: "Design & Execution",
    desc: "Complete interior solutions from initial concept through final installation. We manage every detail so you can sit back and watch your vision come to life.",
  },
  {
    id: "false-ceilings",
    image: serviceFalseCeiling,
    title: "False Ceilings",
    desc: "Transform your spaces with stunning false ceiling designs — from minimalist modern profiles to elaborate coffered designs with integrated ambient lighting.",
  },
  {
    id: "modular-wardrobes-kitchens",
    image: serviceModular,
    title: "Modular Wardrobes & Kitchens",
    desc: "Sleek, functional modular solutions customized to your space. Premium finishes, smart storage, and ergonomic designs that blend beauty with everyday practicality.",
  },
  {
    id: "painting-customisation",
    image: servicePainting,
    title: "Painting with Customisation",
    desc: "Bespoke wall treatments, custom murals, and artistic painting solutions that add personality and character to every room. From textured finishes to hand-painted art.",
  },
  {
    id: "granite-quartz-marble-tiles",
    image: serviceStone,
    title: "Granite / Quartz / Marble / Tiles",
    desc: "Premium stone and tile solutions for flooring, countertops, and accent walls. We source and install the finest natural and engineered stone to elevate your interiors.",
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
              key={service.id}
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
                <p className="font-accent text-lg text-muted-foreground italic leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link
                  to={`/projects?service=${service.id}`}
                  className="border border-primary text-primary px-8 py-3 text-xs tracking-luxury uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 inline-block"
                >
                  Read More
                </Link>
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
