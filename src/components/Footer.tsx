import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Scroll to top */}
        <div className="flex justify-center -mt-18 mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full gradient-amber text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity -mt-6"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg gradient-amber flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                RK
              </div>
              <span className="font-heading font-bold text-foreground text-lg">Rohit Kumar</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building innovative cloud solutions and impactful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Skills", "Blog", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">rohittkumar20040@gmail.com</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Rohit Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
