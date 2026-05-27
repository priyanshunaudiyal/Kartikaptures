import { motion } from "motion/react";
import { Film, Palette, FileText, Video } from "lucide-react";
import { useInView } from "../hooks/useInView";

const softwares = [
  {
  icon: Video,
  title: "CapCut",
  description:
    "Fast-paced short-form video editing with trendy effects, transitions, and social media optimization.",
},

{
  icon: Film,
  title: "Final Cut Pro",
  description:
    "Professional Mac-based video editing for cinematic storytelling, smooth timelines, and high-performance workflows.",
},

{
  icon: Palette,
  title: "Canva",
  description:
    "Creative graphic design for social media posts, presentations, branding, and marketing visuals.",
},
];

export function Software() {
  const { ref: containerRef, isInView } = useInView();

  return (
    <section
      id="softwares"
      className="flex items-center px-6 py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Softwares</h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to
            the screen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwares.map((software, index) => (
            <motion.div
              key={software.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 space-y-4 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <software.icon className="w-10 h-10 text-muted-foreground" />

              <h3 className="text-xl font-semibold">
                {software.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {software.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}