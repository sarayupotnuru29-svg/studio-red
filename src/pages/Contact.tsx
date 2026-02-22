import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import servicesHero from "@/assets/services-hero.jpg";

const Contact = () => {
  return (
    <div>
      <HeroBanner image={servicesHero} title="Contact Us" subtitle="Let's Begin Your Journey" />

      <section className="section-padding">
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
    </div>
  );
};

export default Contact;
