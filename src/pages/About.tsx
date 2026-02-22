import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import aboutImg from "@/assets/about-interior.jpg";
import servicesHero from "@/assets/services-hero.jpg";

const About = () => {
  return (
    <div>
      <HeroBanner image={aboutImg} title="About Studio Red" subtitle="Where Luxury Meets Living" />

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="gold-divider mb-6 mx-0" />
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Our Philosophy</h2>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed mb-6">
                The essence of our interior design will always be about people and how they live.
                It's not about the fashion or what's trending & what's not. It is about the realities
                of what makes for an attractive, civilized and meaningful environment.
              </p>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed">
                We strongly believe that the best home has something to say about the people who live in it.
                We say that the Home is where heart is.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={servicesHero} alt="Interior philosophy" className="w-full h-[500px] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-luxury">
          <SectionTitle subtitle="Our Purpose" title="Mission & Vision" />
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="font-heading text-2xl text-primary mb-6">Our Mission</h3>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed">
                To always go one step further and offer exclusive customer service to our clients.
                Our designs must inspire and elevate the hearts and minds of all those who lay eyes on it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="font-heading text-2xl text-primary mb-6">Our Vision</h3>
              <p className="font-accent text-lg text-muted-foreground italic leading-relaxed">
                To positively influence the lives of all clients with whom we have the pleasure of working,
                and leave a lasting impression on their minds and imagination. Our long-term goals are always
                in line with our core values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="gold-divider mb-8" />
            <p className="font-accent text-2xl md:text-3xl italic text-foreground leading-relaxed">
              "Our goal is to prove that sustainable decor can be bold & uncompromising."
            </p>
            <div className="gold-divider mt-8" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
