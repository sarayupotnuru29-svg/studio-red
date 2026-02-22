import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/studio-red-logo.png";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Studio Red" className="h-10 w-auto" />
              <h3 className="font-heading text-2xl text-primary">Studio Red</h3>
            </Link>
            <p className="font-accent text-muted-foreground text-lg italic leading-relaxed">
              Home Is Where Our Story Begins
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-luxury uppercase text-primary mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Process", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-luxury uppercase text-primary mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {["Residential Interiors", "Commercial Interiors", "Home Theaters", "Ceiling & Paintings", "Design & Execution"].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-luxury uppercase text-primary mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:9100009031" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={14} /> 91 0000 9031
              </a>
              <a href="mailto:info@studiored.one" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={14} /> info@studiored.one
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={14} className="mt-1 flex-shrink-0" />
                <span>Poranki, Vijayawada – 521137</span>
              </div>
              <a
                href="https://www.instagram.com/interiorsbystudiored"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram size={14} /> @interiorsbystudiored
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider-wide mt-16 mb-8" />
        <p className="text-center text-muted-foreground text-xs tracking-luxury">
          © {new Date().getFullYear()} Studio Red. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
