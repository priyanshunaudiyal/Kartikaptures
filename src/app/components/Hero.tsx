import { motion } from "motion/react";
// import heroVideo from "../../assets/videos/hero.MOV";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center space-y-8 text-white"
      >
        <h1 className="text-5xl md:text-7xl tracking-tight">
          Crafting Stories Through Vision
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
          Professional video editor specializing in short films, music videos, and visual storytelling
        </p>

        <motion.button
          onClick={() => scrollToSection("work")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:opacity-90 transition-opacity rounded-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}
