import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot", level: "Expert", color: "bg-green-500" },
        { name: "Java", level: "Expert", color: "bg-orange-500" },
        { name: "Hibernate", level: "Advanced", color: "bg-yellow-500" },
        { name: "MySQL", level: "Advanced", color: "bg-blue-500" },
        { name: "MongoDB", level: "Advanced", color: "bg-green-600" },
        { name: "Redis", level: "Intermediate", color: "bg-red-500" },
        { name: "Kafka", level: "Intermediate", color: "bg-purple-500" },
        { name: "Aerospike", level: "Intermediate", color: "bg-orange-600" },
        { name: "ClickhouseDb", level: "Advanced", color: "bg-gray-800" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced", color: "bg-cyan-500" },
        { name: "TypeScript", level: "Advanced", color: "bg-blue-600" },
        { name: "Next.js", level: "Advanced", color: "bg-gray-800" },
        { name: "Tailwind CSS", level: "Advanced", color: "bg-teal-500" },
        { name: "Bootstrap", level: "Intermediate", color: "bg-purple-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: "Advanced", color: "bg-blue-400" },
        { name: "Git", level: "Advanced", color: "bg-orange-600" },
        { name: "Linux", level: "Advanced", color: "bg-yellow-600" }
      ]
    }
  ];

  const experience = {
    title: "Software Developer",
    company: "Mobavenue Pvt Ltd.",
    description: "Worked as a full stack developer to build a DSP platform used for running campaigns and tracking huge data reports. Primary role includes building APIs and integrating them in frontend applications.",
    duration: "2022 - Present"
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-title gradient-text">Skills & Experience</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className="glass-card p-8 mb-16 max-w-4xl mx-auto hover:scale-102 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-1">{experience.title}</h3>
              <p className="text-lg font-medium text-foreground mb-2">@ {experience.company}</p>
              <p className="text-sm text-accent font-medium mb-4">{experience.duration}</p>
              <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              data-cursor-hover
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;