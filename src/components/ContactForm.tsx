import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry. We will get back to you shortly.");
  };

  const inputClass =
    "w-full bg-transparent border border-primary/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors font-body text-sm tracking-wide";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <input
        type="text"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={inputClass}
      />
      <select
        value={formData.projectType}
        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        className={`${inputClass} appearance-none`}
      >
        <option value="" className="bg-background">Select Project Type</option>
        <option value="residential" className="bg-background">Residential Interior</option>
        <option value="commercial" className="bg-background">Commercial Interior</option>
        <option value="theater" className="bg-background">Home Theater</option>
        <option value="ceiling" className="bg-background">Ceiling & Paintings</option>
        <option value="execution" className="bg-background">Design & Execution</option>
      </select>
      <textarea
        placeholder="Tell us about your project..."
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-luxury uppercase font-body hover:bg-gold-dark transition-colors duration-300"
      >
        Send Inquiry
      </button>
    </motion.form>
  );
};

export default ContactForm;
