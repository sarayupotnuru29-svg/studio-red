import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import heroImg from "@/assets/hero-living-room.jpg";
import aboutImg from "@/assets/about-interior.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceTheater from "@/assets/service-theater.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceExecution from "@/assets/service-execution.jpg";

const whyChooseUs = [
  { title: "Budget", desc: "Tailored solutions for every budget without compromising elegance." },
  { title: "Timeline", desc: "We deliver on time, every time — precision is our promise." },
  { title: "Experience", desc: "Years of expertise crafting premium interiors across India." },
  { title: "Assistance", desc: "End-to-end support from concept to completion." },
];

const services = [
  { image: serviceExecution, title: "Design & Execution", desc: "Complete interior solutions from concept to completion." },
  { image: serviceResidential, title: "Residential Interiors", desc: "Transforming houses into elegant sanctuaries." },
  { image: serviceCommercial, title: "Commercial Interiors", desc: "Premium workspaces that inspire productivity." },
  { image: serviceTheater, title: "Home Theaters", desc: "Immersive cinema experiences in your home." },
  { image: serviceCeiling, title: "Ceiling & Custom Paintings", desc: "Bespoke artistic ceiling and wall masterpieces." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center container-luxury"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
            Studio Red
          </h1>
          <p className="font-accent text-2xl md:text-3xl text-foreground italic mb-4">
            Home Is Where Our Story Begins
          </p>
          <div className="gold-divider-wide my-8" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed tracking-wide">
            The essence of our interior design will always be about people and how they live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="border border-primary text-primary px-8 py-3 text-sm tracking-luxury uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-primary text-primary px-8 py-3 text-sm tracking-luxury uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutImg}
                alt="Luxury interior"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="gold-divider mb-6 mx-0" />
              <h2 className="font-heading text-3xl md:text-4xl mb-6">About Studio Red</h2>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed mb-8">
                The essence of our interior design will always be about people and how they live.
                It is not about trends, but about creating meaningful, attractive and civilized environments.
              </p>
              <Link
                to="/about"
                className="text-sm tracking-luxury uppercase text-primary hover:text-gold-light transition-colors border-b border-primary/30 pb-1"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Excellence in Every Detail"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <h3 className="font-heading text-2xl text-primary mb-3 relative inline-block">
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
                </h3>
                <p className="font-accent text-muted-foreground italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionTitle
            subtitle="Our Services"
            title="Crafting Exceptional Spaces"
            description="From concept to completion, we deliver unparalleled interior design experiences."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                image={service.image}
                title={service.title}
                description={service.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionTitle
            subtitle="Our Process"
            title="Your Sweet Home is Just 3 Steps Away"
          />
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Consulting", desc: "We offer a free consultation where we listen to you in great detail about all your needs and requirements.", cta: "Book a Free Consultation Now" },
              { step: "02", title: "Get a Quote", desc: "We provide a detailed quote based on your requirements and offer full service interior design from start to finish.", cta: "Get a Quote Now" },
              { step: "03", title: "Execution & Reveal", desc: "We handle procurement, installation, and deliver the stunning final reveal of your dream space.", cta: "Let's Work Together" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-heading text-6xl text-primary/20 block mb-4">{item.step}</span>
                <h3 className="font-heading text-2xl text-primary mb-4">{item.title}</h3>
                <p className="font-accent text-muted-foreground italic mb-8 leading-relaxed">{item.desc}</p>
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground px-6 py-3 text-xs tracking-luxury uppercase hover:bg-gold-dark transition-colors duration-300 inline-block"
                >
                  {item.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding bg-card">
        <div className="container-luxury max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="gold-divider mb-8" />
            <p className="font-accent text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-relaxed">
              "We are here to positively influence the lives of all clients with whom we have the pleasure of working,
              and leave a lasting impression on their minds and imagination."
            </p>
            <div className="gold-divider mt-8" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
