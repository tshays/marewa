import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { motion } from 'framer-motion';

const portfolioData: GalleryItem[] = [
  {
    common: 'Universal Printing',
    binomial: 'Branding & Printing Services',
    photo: {
      url: '/lovable-uploads/cc88107a-d5f7-4e03-9f51-c8e6c2fdedf2.png',
      text: 'modern printing and branding website with vibrant gradient design',
      pos: '50% 30%',
      by: 'Maramawit Dereje'
    }
  },
  {
    common: 'About Us Portal',
    binomial: 'Company Information Hub',
    photo: {
      url: '/lovable-uploads/780de1ca-ae73-4735-82e0-7b3ad1973db1.png',
      text: 'elegant about us page with clean design and professional layout',
      pos: '50% 40%',
      by: 'Maramawit Dereje'
    }
  },
  {
    common: 'Afronex Tech Hub',
    binomial: 'Technology Innovation Platform',
    photo: {
      url: '/lovable-uploads/a8092ee6-b87d-43e6-ad83-247619b58b9d.png',
      text: 'modern tech platform with purple gradient and clean interface',
      pos: '50% 25%',
      by: 'Maramawit Dereje'
    }
  },
  {
    common: 'Eastern Development Initiative',
    binomial: 'Community Development Platform',
    photo: {
      url: '/lovable-uploads/4b48ca9d-8ce5-4c69-ab7e-2da76f64b01f.png',
      text: 'professional development organization website with modern design',
      pos: '50% 35%',
      by: 'Maramawit Dereje'
    }
  },
  {
    common: 'Eder Authentication',
    binomial: 'Secure Login System',
    photo: {
      url: '/lovable-uploads/c1847e07-b2fb-4886-9c47-8363b257b562.png',
      text: 'modern dual-panel login interface with dark theme',
      pos: '50% 40%',
      by: 'Maramawit Dereje'
    }
  },
  {
    common: 'EDR Admin Portal',
    binomial: 'Management Dashboard',
    photo: {
      url: '/lovable-uploads/8e18e929-a5c5-4b95-9265-bb893474a56f.png',
      text: 'clean admin login page with professional branding',
      pos: '50% 30%',
      by: 'Maramawit Dereje'
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