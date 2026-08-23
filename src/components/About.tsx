import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                className="text-section-title gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Miraroad, Thane (Mumbai Metropolitan Area)</span>
              </div>
            </div>

            <motion.div
              className="space-y-6 text-body-large leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Hello! I am a Software Engineer L2 specializing in building high-throughput, distributed backend systems, real-time data ingestion pipelines, and search infrastructures.
              </p>

              <p>
                Currently, I am a core engineer at Mobavenue Pvt Ltd., where I design and optimize services serving over 1 billion ad requests daily. My technical expertise centers around Java, Spring Boot, Elasticsearch, and high-performance databases like ClickHouseDB and Aerospike.
              </p>

              <p>
                Beyond backend systems, I build full-stack interfaces with React/Next.js and explore modern AI integrations, including building automated RAG agents, LLM-powered Text-to-SQL query builders, and orchestrating async microservice architectures.
              </p>
            </motion.div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <p className="font-medium">4 Years</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Focus:</span>
                  <p className="font-medium">Full Stack</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Specialty:</span>
                  <p className="font-medium">Java/Spring Boot</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Passion:</span>
                  <p className="font-medium">Innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="glass-card p-8 text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-6xl">💻</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
              <p className="text-muted-foreground">
                Constantly exploring new technologies and pushing the boundaries of web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;