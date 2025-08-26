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
            Meet Our Visionary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovation meets expertise in crafting digital experiences that transcend ordinary boundaries.
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
              name="Maria Rodriguez"
              title="Creative Director & Founder"
              handle="mariacreates"
              status="Available for Projects"
              contactText="Let's Connect"
              avatarUrl={marImage}
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
              <h3 className="text-2xl font-bold mb-4 text-primary-glow">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in digital design and development, Maria has transformed 
                countless visions into stunning digital realities. Her approach combines cutting-edge 
                technology with intuitive design principles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups to Fortune 500 companies, her work has helped businesses establish powerful 
                digital presences that drive engagement and growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent-pink mb-2">12</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-secondary-glow mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">15</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}