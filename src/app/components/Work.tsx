import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "Short Film",
    description:
      "A contemplative exploration of memory and time through intimate character moments.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904507/echoes_qwadls.mov",
  },
  {
    id: 2,
    title: "Midnight Sessions",
    category: "Music Video",
    description:
      "High-energy visual storytelling synchronized with rhythm and emotion.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904398/hero_zznbuw.mov",
  },
  {
    id: 3,
    title: "Behind the Lens",
    category: "Documentary",
    description:
      "An intimate look at creative process and artistic dedication.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904770/behind_lens_vkd1we.mp4",
  },
  {
    id: 4,
    title: "Urban Stories",
    category: "Commercial",
    description:
      "Dynamic brand storytelling through compelling visual narratives.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904463/urban_stories_vuve6t.mp4",
  },
  {
    id: 5,
    title: "Silent Moments",
    category: "Short Film",
    description:
      "Visual poetry exploring silence and stillness in modern life.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904334/silent_qimdud.mov",
  },
  {
    id: 6,
    title: "Rhythm & Light",
    category: "Music Video",
    description:
      "A celebration of movement and color in sync with sound.",
    video:
      "https://res.cloudinary.com/dbk2umnbj/video/upload/v1779904432/rhythm_lxyual.mov",
  },
];

export function Work() {
  const { ref, isInView } = useInView();

  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Selected Work
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated collection of recent projects showcasing
            diverse storytelling approaches
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >

              {/* Video */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted mb-4 shadow-lg">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
