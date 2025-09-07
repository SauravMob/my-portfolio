import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile-hero.jpeg';
import ParallaxSection from './ParallaxSection';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced background decoration with parallax */}
      <ParallaxSection speed={0.2} className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float delay-500"></div>
      </ParallaxSection>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-hero gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span>
                  Saurav Upadhyay
                </span>
              </motion.h1>
              <motion.p 
                className="text-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.p>
              <motion.p 
                className="text-body-large max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Passionate about creating digital experiences that combine beautiful design 
                with powerful functionality. I specialize in modern web technologies and 
                love bringing ideas to life through code.
              </motion.p>
            </div>

            {/* CTA and Social Links */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="group btn-primary px-8 py-3 rounded-full shimmer"
                data-cursor-hover
              >
                Get to know me
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-125 hover:rotate-12 transition-all duration-300" 
                  asChild
                  data-cursor-hover
                >
                  <a href="https://github.com/SauravMob" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-125 hover:rotate-12 transition-all duration-300" 
                  asChild
                  data-cursor-hover
                >
                  <a href="https://linkedin.com/in/saurav-upadhyay-245013128" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-125 hover:rotate-12 transition-all duration-300" 
                  asChild
                  data-cursor-hover
                >
                  <a href="https://x.com/Sauravu193" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.img
                src={profileImage}
                alt="Saurav Upadhyay"
                className="relative w-full h-auto rounded-3xl shadow-2xl cursor-none"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                data-cursor-hover
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;