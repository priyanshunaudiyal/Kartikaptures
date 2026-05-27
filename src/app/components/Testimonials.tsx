import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    id: 1,
    quote: "I've had the pleasure of working with him as both a videographer and video editor, and his work consistently exceeds expectations. His creative vision, attention to detail, and ability to capture moments beautifully make every project feel professional and engaging. He’s reliable, easy to collaborate with, and always dedicated to delivering high-quality results."
    ,
    author: "Sneha",
    role: "sinu.__01",
    link: "https://instagram.com/sinu.__01",
  },
  // {
  //   id: 2,
  //   quote: "The color grading work elevated our music video to a completely new level. Every frame looked like a piece of art.",
  //   author: "Marcus Chen",
  //   role: "Maasi",
  //   link: "https://www.instagram.com/maasi_music/",
  // },
  {
    id: 3,
    quote: "Working with Kartik on Fouriva Art was a great experience. While the handmade products were created by me, the entire creative planning of the page — including content ideas, photos, videos, reels, and overall presentation — was handled by Kartik. His creativity and understanding of aesthetics gave the brand a unique and professional identity.",
    author: "Saloni Bisht",
    role: "Fouriva Art",
    link: "https://www.instagram.com/fouriva.art/",
  },
  {
    id: 4,
    quote: "Working with Kartik was a great experience for us at Kartik Enterprises. He handled the complete shoot and editing process professionally and always delivered creative, high-quality work that matched our brand perfectly. The advertisement videos for Samsung products and other home appliances turned out excellent and engaging. What we appreciated the most was his dedication and timely delivery he completed and delivered the work before the deadline.",
    author: "Rahul",
    role: "Kartik Samsung Enterprises",
    link: "https://www.instagram.com/kartik_enterprises_db?igsh=c2RmajNiOXJ5dmd5",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="min-h-screen flex items-center px-6 py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">What Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by creative professionals and brands across the industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 space-y-6"
            >
              <Quote className="w-10 h-10 text-muted-foreground" />
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {testimonial.role}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
