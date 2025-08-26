import ProfileCard from "@/components/ui/profile-card";
import { motion } from "framer-motion";
import marImage from "@/assets/mar.png";

export default function AboutSection() {
  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-pink/5" />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            About Maramawit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer crafting innovative digital solutions that transform ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ProfileCard
              name="Maramawit Dereje"
              title="Software Engineer"
              handle="maramawit"
              status="Available for Projects"
              contactText="Let's Connect"
              avatarUrl="/lovable-uploads/3d7e116a-10a7-4e11-a4b0-503fe26cbaf4.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary-glow">About Me</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Maramawit Dereje, a passionate software engineer based in South Africa. 
                With expertise in modern web technologies and full-stack development, I specialize 
                in React, TypeScript, and cutting-edge frameworks to create exceptional digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and delivering solutions that make a 
                real impact. My approach combines technical excellence with creative problem-solving, 
                ensuring every project exceeds expectations and drives meaningful results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-pink mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-secondary-glow mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">5</div>
                <div className="text-sm text-muted-foreground">Tech Stacks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}