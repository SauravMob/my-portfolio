import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import microservicesImage from '@/assets/microservices-project.jpg';
import dashboardImage from '@/assets/dashboard-project.jpg';
import danceImage from '@/assets/dance-project.jpg';

const Projects = () => {
  const scrollToContact = () => {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Ecommerce Backend Platform",
      description: "A comprehensive microservices-based e-commerce backend platform with service registration, discovery, API gateway, load balancing, and security features. Supports both synchronous REST API and asynchronous message queue communication.",
      image: microservicesImage,
      technologies: ["Spring Boot", "Microservices", "Docker", "Kafka", "Redis", "MySQL"],
      github: "https://github.com/SauravMob/MicroserviceProject",
      demo: null,
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Built using Next.js and TypeScript, this dashboard seamlessly integrates with various APIs for dynamic real-time data handling. Features large-scale data processing with SSR for improved performance and SEO optimization.",
      image: dashboardImage,
      technologies: ["Next.js", "TypeScript", "React", "API Integration", "SSR"],
      github: "https://github.com/SauravMob/dsp-ui-nextjs",
      demo: null,
      featured: true
    },
    {
      title: "Interactive Dance Website",
      description: "Inspired by ThinkDance, this project explores React Spring libraries to create dynamic and interactive user experiences. Emphasizes learning new animation techniques and pushing web animation boundaries.",
      image: danceImage,
      technologies: ["React", "React Spring", "CSS3", "Animations", "JavaScript"],
      github: "https://github.com/SauravMob/dance-app",
      demo: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-title gradient-text">Featured Projects</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card group ${project.featured ? 'lg:grid-cols-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-cursor-hover
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                      )}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                      data-cursor-hover
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>

                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto hover:text-primary"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Learn More
                      <ArrowUpRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-accent transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;