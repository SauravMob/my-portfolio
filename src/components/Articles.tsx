import { BookOpen, ArrowUpRight, Clock, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Articles = () => {
  const articles = [
    {
      title: "How Spring Creates Objects You Never Instantiate: A Deep Dive into Java Reflection",
      description: "Ever wondered how Spring manages dependencies without the 'new' keyword? Discover the internal mechanics of the Java Reflection API, dynamic instantiation, and how frameworks like Spring Boot, Hibernate, and JUnit bypass traditional instantiation rules to build decoupled, flexible systems.",
      readTime: "6 min read",
      date: "August 2025",
      tags: ["Java", "Spring Boot", "Reflection API", "Backend Development"],
      url: "https://medium.com/@sauravupadhyay193/how-spring-creates-objects-you-never-instantiate-a-deep-dive-into-java-reflection-05ec2fee25b1?sharedUserId=sauravupadhyay193",
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="articles" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-title gradient-text">Technical Articles</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Deep dives into software engineering, framework internals, and architectural patterns.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="project-card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(article.url)}
              data-cursor-hover
            >
              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                {/* Visual Art/Code Mockup */}
                <div className="md:col-span-5 relative bg-secondary/50 rounded-xl overflow-hidden min-h-[220px] flex flex-col justify-between p-6 border border-border/40 font-mono text-xs select-none">
                  {/* Subtle code editor chrome */}
                  <div className="flex items-center justify-between border-b border-border/30 pb-3 mb-2 opacity-60">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">BeanFactory.java</span>
                  </div>

                  {/* Code Snippet Mockup */}
                  <div className="space-y-1.5 flex-grow overflow-hidden text-muted-foreground/80 leading-relaxed">
                    <div><span className="text-accent">public class</span> <span className="text-primary">SpringContainer</span> &#123;</div>
                    <div className="pl-4"><span className="text-muted-foreground/40">// Instantiating objects dynamically</span></div>
                    <div className="pl-4"><span className="text-accent">public</span> Object <span className="text-emerald-400">createInstance</span>(Class&lt;?&gt; clazz) &#123;</div>
                    <div className="pl-8">Constructor&lt;?&gt; ctor = clazz.getDeclaredConstructor();</div>
                    <div className="pl-8">ctor.setAccessible(<span className="text-orange-400">true</span>);</div>
                    <div className="pl-8"><span className="text-accent">return</span> ctor.newInstance();</div>
                    <div className="pl-4">&#125;</div>
                    <div>&#125;</div>
                  </div>

                  {/* Visual Spring IoC decoration */}
                  <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                    <span className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">Reflection API</span>
                    <span className="text-[10px] text-accent/80 font-bold uppercase tracking-wider">IoC Magic</span>
                  </div>
                  
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content Side */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Tags & Action Buttons */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-[11px] bg-secondary/80 text-foreground py-0.5 px-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium flex items-center gap-1.5"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(article.url);
                        }}
                      >
                        Read Article
                        <BookOpen size={15} />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary font-medium flex items-center gap-1.5 hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Take them directly to the Medium article responses/comments
                          handleCardClick(`${article.url}#responses`);
                        }}
                      >
                        Discuss on Medium
                        <MessageSquare size={15} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discuss invitation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            Have any questions or thoughts about the article?{" "}
            <button
              onClick={scrollToContact}
              className="text-primary hover:underline font-semibold"
              data-cursor-hover
            >
              Discuss it with me directly
            </button>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
