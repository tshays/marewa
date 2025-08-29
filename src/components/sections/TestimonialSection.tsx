import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Maramawit's ability to grasp complex concepts and turn them into practical, impactful solutions is remarkable. She consistently demonstrates a commitment to learning and applies her skills effectively in real-world scenarios. Her proactive attitude and dedication make her an asset in any professional setting",
    name: "Lemesa",
    designation: "Lead Trainer, Dire Dawa Polytechnic College",
    src: "/mary/9614f4c6-8544-4d16-a2de-6dd4802716c5.png",
  },
  {
    quote: "Maramawit is a dynamic and results-driven professional who brings both technical expertise and a collaborative spirit to the team. Her contributions to web development and IT projects have been instrumental in achieving our organizational goals. She exemplifies excellence in every task she undertakes",
    name: "Tsega Endashaw",
    designation: "General Manager of Afronex Tech Hub",
    src: "/mary/1ba2e4eb-7161-4599-a9eb-e9910adf61b9.png",
  },
  {
    quote: "Working with Maramawit has been an absolute pleasure. Her expertise in IT systems and her ability to manage complex technical challenges have greatly improved our operations. She is always ready to support her colleagues, share knowledge, and ensure the smooth functioning of our IT infrastructure. Maramawit's professionalism, dedication, and team-oriented approach make her an invaluable part of any team.",
    name: "Kidus Belete",
    designation: "IT Support at Delt YemeriyamWerk General Hospital",
    src: "/mary/c5d3ef7d-52a2-466f-8c95-f7edc6d0594e.png",
  },
  {
    quote: "Working with Maramawit has been an absolute pleasure. Her expertise in IT systems and her ability to manage complex technical challenges have greatly improved our operations. She is always ready to support her colleagues, share knowledge, and ensure the smooth functioning of our IT infrastructure. Maramawit's professionalism, dedication, and team-oriented approach make her an invaluable part of any team.",
    name: "Abel Nuri",
    designation: "IT Support at Delt YemeriyamWerk General Hospital",
    src: "/mary/e4184006-aaec-4a4a-9452-3e6fb145ce44.png",
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