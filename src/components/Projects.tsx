import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import microservicesImage from '@/assets/microservices-project.jpg';
import dashboardImage from '@/assets/dashboard-project.jpg';
import aiReportImage from '@/assets/ai-report-analyzer.png';
import sportsphereImage from '@/assets/sportsphere.png';

const Projects = () => {
  const scrollToContact = () => {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "AI Report Analyzer",
      description: "An AI-powered business report analysis tool built using Spring AI and React to generate deep analytical insights. Developed as an internal proprietary tool at Mobavenue Pvt Ltd, it integrates local and cloud LLMs (Ollama, Deepseek-R1) for automated analysis and custom optimization suggestions.",
      image: aiReportImage,
      technologies: ["Spring AI", "React", "LLMs", "Deepseek-R1", "Ollama", "Tailwind CSS"],
      github: "private",
      demo: null,
      featured: true
    },
    {
      title: "New Sense Store (Ecommerce Platform)",
      description: "A comprehensive microservices-based e-commerce backend platform built using Spring Boot. Features custom service registration & discovery, API gateway routing, load balancing, and synchronous/asynchronous inter-service communication.",
      image: microservicesImage,
      technologies: ["Spring Boot", "Microservices", "Docker", "Kafka", "Redis", "MySQL", "Railway"],
      github: "https://github.com/SauravMob/MicroserviceProject/tree/master",
      demo: null,
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "A high-performance analytics dashboard designed using Next.js and TypeScript with SSR and SSG. Features optimized data loading, advanced filtering, and rich data visualization, boosting page speed and search rankings.",
      image: dashboardImage,
      technologies: ["Next.js", "TypeScript", "React", "SSR & SSG", "Data Visualization", "Tailwind CSS"],
      github: "https://github.com/SauravMob/dsp-ui-nextjs",
      demo: null,
      featured: false
    },
    {
      title: "Sportsphere – Sports Scoring App",
      description: "End-to-end architecture of a real-time sports scoring mobile app. Features a Node.js REST API with a normalized PostgreSQL schema for event and score tracking, paired with a cross-platform React Native mobile client.",
      image: sportsphereImage,
      technologies: ["React Native", "Node.js", "PostgreSQL", "REST APIs", "Mobile App"],
      github: "https://github.com/SauravMob/sportsphere-api",
      demo: null,
      featured: true
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
                    {project.github !== "private" ? (
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
                    ) : (
                      <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground py-1.5 px-3 flex items-center gap-1.5 cursor-not-allowed">
                        <Github size={14} className="opacity-50" />
                        Private Code
                      </Badge>
                    )}

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

                    {project.github !== "private" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto hover:text-primary"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        Learn More
                        <ArrowUpRight size={16} className="ml-1" />
                      </Button>
                    )}
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