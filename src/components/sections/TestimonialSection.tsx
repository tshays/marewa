import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Working with Maramawit transformed our digital presence completely. Her attention to detail and innovative approach in software development exceeded all our expectations. The solutions she delivered were not just functional but truly revolutionary.",
    name: "Sarah Johnson",
    designation: "CEO at TechVision",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=80",
  },
  {
    quote: "Maramawit's expertise in software engineering and problem-solving skills are exceptional. She delivered a robust solution that directly impacted our business growth and streamlined our operations significantly.",
    name: "Michael Chen", 
    designation: "Founder at StartupLab",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  },
  {
    quote: "From concept to execution, every detail was handled with professionalism and technical excellence. Maramawit's innovative solutions were beyond what we imagined possible for our project.",
    name: "Emily Rodriguez",
    designation: "Marketing Director at GlobalCorp", 
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
  },
  {
    quote: "Outstanding technical expertise and robust software solutions. It's rare to find a developer who delivers on all promises while maintaining such high code quality and innovation.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?w=400&auto=format&fit=crop&q=80",
  },
  {
    quote: "The scalability and performance of Maramawit's solutions have been game-changing for our organization. Her development skills and technical vision are truly exceptional.",
    name: "Lisa Thompson", 
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=400&auto=format&fit=crop&q=80",
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent-pink/5 to-secondary-glow/5" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what satisfied clients have to say about working with Maramawit.
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}