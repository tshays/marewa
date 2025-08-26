import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Morphic Dreams</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where thoughts take shape and consciousness flows like liquid mercury through infinite dimensions.
              Crafting digital experiences that transcend ordinary boundaries.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-primary">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Morphic Dreams. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> by our creative team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}