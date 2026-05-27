import { motion } from "motion/react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjgzjgbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl tracking-tight uppercase mb-6">Say Hello</h2>
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond to your inquiry within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 bg-white text-black p-8 rounded-2xl shadow-lg h-fit"
          >
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-6">Contact Me</h3>

              <div className="space-y-6">
                {/* <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1">My Office</p>
                    <p className="text-sm text-foreground/70">123 Creative Street, Los Angeles, CA 90028</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1">Contact Number</p>
                    <p className="text-sm text-foreground/70">+91 6239 760 936</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1">Email Us</p>
                    <p className="text-sm text-foreground/70">ka.rtikkashyap214@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            {/* <div>
              <p className="text-xs uppercase tracking-wide mb-4">Socials</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div> */}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:outline-none focus:border-foreground/30 transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:outline-none focus:border-foreground/30 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-xs uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                required
                className="w-full px-4 py-3 bg-card border border-border/50 focus:outline-none focus:border-foreground/30 transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows={6}
                className="w-full px-4 py-3 bg-card border border-border/50 focus:outline-none focus:border-foreground/30 transition-colors resize-none text-sm"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm"
            >
              Send the Message →
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
