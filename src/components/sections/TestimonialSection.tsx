import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    content: "Working with Maria transformed our digital presence completely. The attention to detail and innovative approach exceeded all our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupLab",
    content: "The creative vision and technical expertise delivered results that directly impacted our business growth. Truly exceptional work.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GlobalCorp",
    content: "From concept to execution, every detail was handled with professionalism. The final product was beyond what we imagined possible.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    rating: 5
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
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl relative group hover:scale-105 transition-transform duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}