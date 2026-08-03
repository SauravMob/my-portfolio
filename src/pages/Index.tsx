import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Articles from '@/components/Articles';
import ContactForm from '@/components/ContactForm';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
