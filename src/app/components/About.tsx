import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import image from "../../assets/images/image.jpeg";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt="Professional portrait"
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate video editor who believes that every video should tell a story that people can feel. From cinematic edits and music videos to short-form content, I focus on creating visuals that are clean, engaging, and emotionally impactful. My editing style blends creativity with precision to turn simple footage into meaningful visual experiences.
            </p>
            <p>
              Using tools like Final Cut Pro, CapCut, and Canva, I specialize in cinematic editing, color grading, and content storytelling. I enjoy experimenting with pacing, mood, transitions, and visual aesthetics to create content that stands out while staying true to the client's vision and audience.
            </p>
            <p>
              Beyond editing, I value collaboration, communication, and creativity in every project I take on. Whether working with creators, brands, musicians, or filmmakers, my goal is always to deliver content that not only looks professional but also leaves a lasting impression.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
