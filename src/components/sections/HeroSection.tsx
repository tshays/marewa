import { LavaLamp } from "@/components/ui/fluid-blob";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden">
      <LavaLamp />
      {/* Centered title */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight">
            Maramawit Dereje
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mt-4">
            Crafting Digital Experiences
          </p>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
    </div>
  );
}