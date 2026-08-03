import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold gradient-text">
              Saurav Upadhyay
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active text-primary' : ''}`}
                  data-cursor-hover
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <a 
            href="/Saurav_Upadhyay_CV.pdf" 
            download="Saurav_Upadhyay_CV.pdf"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors" 
            data-cursor-hover
          >
            <FileText size={16} />
            <span className="text-sm font-medium">Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;