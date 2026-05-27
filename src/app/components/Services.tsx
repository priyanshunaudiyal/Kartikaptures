import { motion } from "motion/react";
import { Film, Palette, FileText, Video } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for short films, music videos, commercials, and corporate content with meticulous attention to pacing and storytelling.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Advanced color correction and grading to establish mood, enhance visual consistency, and bring your creative vision to life.",
  },
  {
    icon: Film,
    title: "Storyboarding",
    description: "Pre-visualization and storyboard creation to plan shots, sequences, and transitions before production begins.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Script consultation and content development to ensure your narrative is clear, engaging, and impactful.",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="min-h-screen flex items-center px-6 py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to the screen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 text-muted-foreground" />
              <h3 className="text-xl">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
