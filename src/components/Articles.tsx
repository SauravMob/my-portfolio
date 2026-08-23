import { useState } from 'react';
import { BookOpen, Calendar, Clock, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ["All", "Reflection API", "Project Loom", "Concurrency"];
  const articlesPerPage = 3;

  const articles = [
    {
      title: "How Spring Creates Objects You Never Instantiate: A Deep Dive into Java Reflection",
      description: "Ever wondered how Spring manages dependencies without the 'new' keyword? Discover the internal mechanics of the Java Reflection API, dynamic instantiation, and how frameworks like Spring Boot, Hibernate, and JUnit bypass traditional instantiation rules to build decoupled, flexible systems.",
      readTime: "6 min read",
      date: "August 2026",
      category: "Reflection API",
      tags: ["Java", "Spring Boot", "Reflection API", "IoC Container"],
      url: "https://medium.com/@sauravupadhyay193/how-spring-creates-objects-you-never-instantiate-a-deep-dive-into-java-reflection-05ec2fee25b1",
    },
    {
      title: "The Hidden Scalability Problem in Java: Why 5% CPU Could Still Bring Your Server Down",
      description: "Learn how platform threads can block, causing server exhaustion despite low CPU usage, and how Java Virtual Threads (Project Loom) solve the thread-per-request bottleneck.",
      readTime: "4 min read",
      date: "August 2026",
      category: "Project Loom",
      tags: ["Java", "Project Loom", "Virtual Threads", "Scalability"],
      url: "https://medium.com/@sauravupadhyay193/the-hidden-scalability-problem-in-java-why-5-cpu-could-still-bring-your-server-down-35fda81d0dc2",
    },
    {
      title: "Project Loom Explained (Part 2): The Breakthrough That Changed Java Threads Forever",
      description: "A deep dive into how Project Loom decouples Java threads from OS threads. Understand continuation-based scheduling, carrier threads, and how JVM parks virtual threads.",
      readTime: "5 min read",
      date: "August 2026",
      category: "Project Loom",
      tags: ["Java", "Project Loom", "Virtual Threads", "Continuation"],
      url: "https://medium.com/@sauravupadhyay193/project-loom-explained-part-2-the-breakthrough-that-changed-java-threads-forever-df884c8f559e",
    },
    {
      title: "Project Loom Explained (Part 3): Using Virtual Threads in Real Applications (and When Not To)",
      description: "Practical guide on adopting virtual threads in Spring Boot, handling thread-local variables, and avoiding pitfalls like database connection pooling bottlenecks and pinning.",
      readTime: "5 min read",
      date: "August 2026",
      category: "Project Loom",
      tags: ["Java", "Project Loom", "Best Practices", "ThreadLocal"],
      url: "https://medium.com/@sauravupadhyay193/project-loom-explained-part-3-using-virtual-threads-in-real-applications-and-when-not-to-a09578a2685e",
    },
    {
      title: "Java Concurrency Fundamentals: Threads, Concurrency, Parallelism & More",
      description: "A solid introduction to Java concurrency. Understand the difference between concurrency and parallelism, how CPU cores execute threads, and basic threading concepts.",
      readTime: "8 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "Concurrency", "Multithreading", "Parallelism"],
      url: "https://medium.com/@sauravupadhyay193/java-concurrency-fundamentals-threads-concurrency-parallelism-more-a5a476327f72",
    },
    {
      title: "Java Threads Under the Hood: Lifecycle, Scheduling, Context Switching & the Java Memory Model",
      description: "Explore the internals of Java threads. Understand context switching costs, CPU caching, and how the Java Memory Model (JMM) guarantees visibility and ordering.",
      readTime: "10 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "Java Memory Model", "Context Switch", "Threads"],
      url: "https://medium.com/@sauravupadhyay193/java-threads-under-the-hood-lifecycle-scheduling-context-switching-the-java-memory-model-53fd41fc04c9",
    },
    {
      title: "Java Thread Safety: Race Conditions, Synchronization, Locks & Deadlocks",
      description: "Understand race conditions, volatile variables, synchronized blocks, explicit locks, and how to avoid deadly situations like deadlocks and resource starvation.",
      readTime: "11 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "Thread Safety", "Locks", "Deadlocks"],
      url: "https://medium.com/@sauravupadhyay193/java-thread-safety-race-conditions-synchronization-locks-deadlocks-f94d01b8580b",
    },
    {
      title: "Java ExecutorService & Thread Pools: Stop Managing Threads Manually",
      description: "A comprehensive guide to Thread Pools in Java. Learn how to configure ExecutorService, FixedThreadPool, CachedThreadPool, and ScheduledExecutorService correctly.",
      readTime: "10 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "ExecutorService", "Thread Pools", "Resources"],
      url: "https://medium.com/@sauravupadhyay193/java-executorservice-thread-pools-stop-managing-threads-manually-a055f6968378",
    },
    {
      title: "Java Callable, Future & CompletableFuture: From Async Tasks to Composable Workflows",
      description: "Learn how to write asynchronous non-blocking code. Master CompletableFuture to chain async tasks, handle exceptions, and build complex reactive pipelines.",
      readTime: "9 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "CompletableFuture", "Asynchronous", "Workflows"],
      url: "https://medium.com/@sauravupadhyay193/java-callable-future-completablefuture-from-async-tasks-to-composable-workflows-6ae528574abf",
    },
    {
      title: "Java Thread Coordination: Scheduling, Latches, Barriers, Semaphores & Phasers",
      description: "Master thread synchronization utilities. Learn how and when to use CountDownLatch, CyclicBarrier, Semaphores, and Phasers for complex multi-thread coordination.",
      readTime: "7 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "Thread Coordination", "Semaphores", "Barriers"],
      url: "https://medium.com/@sauravupadhyay193/java-thread-coordination-scheduling-latches-barriers-semaphores-phasers-a5d230d5b055",
    },
    {
      title: "Java Concurrent Collections: ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList & More",
      description: "A deep dive into thread-safe collection classes. Understand lock-striping in ConcurrentHashMap and how BlockingQueues power producer-consumer architectures.",
      readTime: "6 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "Concurrent Collections", "Data Structures", "Thread Safety"],
      url: "https://medium.com/@sauravupadhyay193/java-concurrent-collections-concurrenthashmap-blockingqueue-copyonwritearraylist-more-a06080c20f53",
    },
    {
      title: "Java Concurrency & Multithreading Series — ForkJoinPool Framework & Parallel Streams",
      description: "Unlock high-performance CPU processing using ForkJoinPool, work-stealing algorithms, and Java Parallel Streams for divide-and-conquer processing.",
      readTime: "7 min read",
      date: "August 2026",
      category: "Concurrency",
      tags: ["Java", "ForkJoinPool", "Parallel Streams", "Performance"],
      url: "https://medium.com/@sauravupadhyay193/java-concurrency-multithreading-series-forkjoinpool-framework-parallel-streams-5dc4fc997116",
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(art => art.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const getCodeSnippet = (category: string) => {
    switch (category) {
      case "Reflection API":
        return (
          <>
            <div><span className="text-accent">public class</span> <span className="text-primary">SpringContainer</span> &#123;</div>
            <div className="pl-4"><span className="text-muted-foreground/40">// Instantiating objects dynamically</span></div>
            <div className="pl-4"><span className="text-accent">public</span> Object <span className="text-emerald-400">createInstance</span>(Class&lt;?&gt; clazz) &#123;</div>
            <div className="pl-8">Constructor&lt;?&gt; ctor = clazz.getDeclaredConstructor();</div>
            <div className="pl-8">ctor.setAccessible(<span className="text-orange-400">true</span>);</div>
            <div className="pl-8"><span className="text-accent">return</span> ctor.newInstance();</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </>
        );
      case "Project Loom":
        return (
          <>
            <div><span className="text-accent">public class</span> <span className="text-primary">VirtualThreadDemo</span> &#123;</div>
            <div className="pl-4"><span className="text-muted-foreground/40">// Lightweight JVM scheduling</span></div>
            <div className="pl-4"><span className="text-accent">public static void</span> <span className="text-emerald-400">main</span>(String[] args) &#123;</div>
            <div className="pl-8">var executor = Executors</div>
            <div className="pl-12">.newVirtualThreadPerTaskExecutor();</div>
            <div className="pl-8">executor.submit(() -&gt; &#123;</div>
            <div className="pl-12">Thread.sleep(Duration.ofSeconds(1));</div>
            <div className="pl-12">System.out.println(<span className="text-orange-400">"Loom Active!"</span>);</div>
            <div className="pl-8">&#125;);</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </>
        );
      case "Concurrency":
      default:
        return (
          <>
            <div><span className="text-accent">public class</span> <span className="text-primary">AsyncWorkflow</span> &#123;</div>
            <div className="pl-4"><span className="text-muted-foreground/40">// Non-blocking task composition</span></div>
            <div className="pl-4"><span className="text-accent">public</span> CompletableFuture&lt;User&gt; <span className="text-emerald-400">getUser</span>(int id) &#123;</div>
            <div className="pl-8"><span className="text-accent">return</span> CompletableFuture</div>
            <div className="pl-12">.supplyAsync(() -&gt; fetchUser(id))</div>
            <div className="pl-12">.thenCombine(fetchOrders(id),</div>
            <div className="pl-16">(user, orders) -&gt; user.set(orders));</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </>
        );
    }
  };

  const getFileName = (category: string) => {
    switch (category) {
      case "Reflection API":
        return "BeanFactory.java";
      case "Project Loom":
        return "VirtualThreadPerTask.java";
      case "Concurrency":
      default:
        return "CompletableFuturePipeline.java";
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
            Deep dives into software engineering, JVM internals, and concurrency patterns.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-secondary/50 text-muted-foreground border-border/40 hover:bg-secondary hover:text-foreground"
              }`}
              data-cursor-hover
            >
              {category === "Concurrency" ? "Concurrency & Multithreading" : category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={article.url}
                className="project-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                onClick={() => handleCardClick(article.url)}
                data-cursor-hover
              >
                <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8">
                  {/* Visual Art/Code Mockup */}
                  <div className="md:col-span-5 relative bg-secondary/50 rounded-xl overflow-hidden min-h-[200px] flex flex-col justify-between p-6 border border-border/40 font-mono text-xs select-none">
                    {/* Subtle code editor chrome */}
                    <div className="flex items-center justify-between border-b border-border/30 pb-3 mb-2 opacity-60">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {getFileName(article.category)}
                      </span>
                    </div>

                    {/* Code Snippet Mockup */}
                    <div className="space-y-1.5 flex-grow overflow-hidden text-muted-foreground/80 leading-relaxed">
                      {getCodeSnippet(article.category)}
                    </div>

                    {/* Visual metadata decoration */}
                    <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                      <span className="text-[10px] text-primary/80 font-bold uppercase tracking-wider">
                        {article.category === "Concurrency" ? "Concurrency" : article.category}
                      </span>
                      <span className="text-[10px] text-accent/80 font-bold uppercase tracking-wider">
                        JVM Context
                      </span>
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

                      <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-border/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 disabled:opacity-50"
              data-cursor-hover
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-border/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 disabled:opacity-50"
              data-cursor-hover
            >
              Next
            </Button>
          </div>
        )}

        {/* Discuss invitation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            Have any questions or thoughts about the articles?{" "}
            <button
              onClick={scrollToContact}
              className="text-primary hover:underline font-semibold"
              data-cursor-hover
            >
              Discuss them with me directly
            </button>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
