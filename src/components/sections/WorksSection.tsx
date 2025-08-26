import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { motion } from 'framer-motion';

const portfolioData: GalleryItem[] = [
  {
    common: 'E-Commerce Platform',
    binomial: 'Modern Retail Solution',
    photo: {
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
      text: 'sleek e-commerce interface with modern design',
      pos: '50% 30%',
      by: 'TechCorp Inc.'
    }
  },
  {
    common: 'Healthcare App',
    binomial: 'Medical Innovation',
    photo: {
      url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80',
      text: 'healthcare mobile application interface',
      pos: '50% 40%',
      by: 'MedTech Solutions'
    }
  },
  {
    common: 'Financial Dashboard',
    binomial: 'Data Visualization',
    photo: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      text: 'modern financial dashboard with charts and graphs',
      pos: '50% 25%',
      by: 'FinanceFlow'
    }
  },
  {
    common: 'Creative Portfolio',
    binomial: 'Digital Showcase',
    photo: {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      text: 'creative portfolio website design',
      pos: '50% 35%',
      by: 'Artist Collective'
    }
  },
  {
    common: 'Restaurant Website',
    binomial: 'Culinary Experience',
    photo: {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80',
      text: 'elegant restaurant website with food imagery',
      pos: '50% 40%',
      by: 'Gourmet Bistro'
    }
  },
  {
    common: 'Tech Startup',
    binomial: 'Innovation Platform',
    photo: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      text: 'modern tech startup landing page',
      pos: '50% 30%',
      by: 'Innovation Labs'
    }
  },
  {
    common: 'Education Platform',
    binomial: 'Learning Management',
    photo: {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
      text: 'educational platform interface design',
      pos: '50% 25%',
      by: 'EduTech Solutions'
    }
  },
  {
    common: 'Travel Agency',
    binomial: 'Journey Planner',
    photo: {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
      text: 'travel booking website with destination imagery',
      pos: '50% 45%',
      by: 'Wanderlust Travel'
    }
  }
];

const WorksSection = () => {
  return (
    <section className="relative">
      {/* This outer container provides the scrollable height */}
      <div className="w-full bg-background text-foreground" style={{ height: '500vh' }}>
        {/* This inner container sticks to the top while scrolling */}
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-pink/10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 absolute top-16 z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground text-lg">Scroll to explore our creative journey</p>
          </motion.div>
          
          <div className="w-full h-full">
            <CircularGallery items={portfolioData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;