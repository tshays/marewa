import { LavaLamp } from "@/components/ui/fluid-blob";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden">
      <LavaLamp />
      <HeroGeometric 
        badge="Digital Innovation Studio"
        title1="Morphic Dreams"
        title2="Where Visions Take Shape"
      />
      
      {/* Overlay content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex gap-4">
          <Button 
            size="lg" 
            className="glass text-white border-white/20 hover:bg-white/10 backdrop-blur-md"
          >
            Explore Our Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-dark text-white border-white/20 hover:bg-white/5 backdrop-blur-md"
          >
            Get In Touch
          </Button>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
    </div>
  );
}