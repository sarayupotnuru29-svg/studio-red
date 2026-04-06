import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import servicesHero from "@/assets/services-hero.jpg";

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

const Contact = () => {
  return (
    <div>
      <HeroBanner image={servicesHero} title="Contact Us" subtitle="Let's Begin Your Journey" />

      {/* Contact Section (Now First) */}
      <section id="contact-form" className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="gold-divider mb-6 mx-0" />
              <h2 className="font-heading text-3xl md:text-4xl mb-10">Get in Touch</h2>

              <div className="space-y-8">
                <a href="tel:9100009031" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">Phone</p>
                    <p className="font-accent text-lg">91 0000 9031</p>
                  </div>
                </a>

                <a href="mailto:info@studiored.one" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">Email</p>
                    <p className="font-accent text-lg">info@studiored.one</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">Address</p>
                    <p className="font-accent text-lg leading-relaxed">
                      15-304/1, 1st Floor<br />
                      Above JS Textiles & Matchings<br />
                      Anguluri Complex, Main Road<br />
                      Poranki, Vijayawada – 521137
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">Business Hours</p>
                    <p className="font-accent text-lg">Monday to Saturday</p>
                    <p className="font-accent text-muted-foreground">10:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/interiorsbystudiored"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">Instagram</p>
                    <p className="font-accent text-lg">@interiorsbystudiored</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div>
              <div className="gold-divider mb-6 mx-0" />
              <h2 className="font-heading text-3xl md:text-4xl mb-10">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section (Now Second) */}
      <section className="section-padding bg-card">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-16">
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="font-accent text-lg text-muted-foreground italic">
              Your Sweet Home is Just 3 Steps Away
            </p>
          </div>

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative pl-16 lg:pl-24 ${i < steps.length - 1 ? "pb-20 border-l border-primary/20 ml-6" : "ml-6"}`}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 border border-primary flex items-center justify-center bg-card">
                <span className="font-heading text-primary text-lg">{item.step}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl mb-4">{item.title}</h3>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link
                to="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
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

export default Contact;