import { Phone, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7021496525",
      action: () => window.open("tel:+917021496525")
    },
    {
      icon: Mail,
      label: "Email", 
      value: "saurav@example.com",
      action: () => window.open("mailto:saurav@example.com")
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      action: () => {}
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/SauravMob" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 cursor-pointer"
                        onClick={method.action}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{method.label}</p>
                          <p className="text-muted-foreground">{method.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <IconComponent size={20} />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "The best way to predict the future is to create it. Let's build something amazing together."
                </blockquote>
                <p className="font-semibold">- Saurav Upadhyay</p>
              </div>

              <div className="glass-card p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's a new project, collaboration, or just a chat about technology, 
                  I'd love to hear from you.
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open("tel:+917021496525")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-4">Thank You!</h3>
            <p className="text-lg text-muted-foreground">
              Thank you for taking the time to explore my portfolio. 
              I look forward to connecting and creating something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Contact;