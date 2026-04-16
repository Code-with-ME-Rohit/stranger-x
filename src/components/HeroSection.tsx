import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Cloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 px-6">
      {/* Warm glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-4"
          >
            Hi, I'm Rohit{" "}
            <span className="text-gradient">Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3"
          >
            B.Tech CSE | Cloud Computing Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mb-8 max-w-md"
          >
            Building Scalable Cloud Solutions & Impactful Digital Experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-amber text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={20} />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Cloud size={20} />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Cloud</p>
                <p className="text-xs text-muted-foreground">Computing Expert</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — specialty cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full flex justify-center">
            {/* Background cards for depth */}
            <div className="absolute top-6 -right-4 w-64 h-72 rounded-2xl bg-muted/60 rotate-6" />
            <div className="absolute top-3 -right-1 w-64 h-72 rounded-2xl bg-muted/80 rotate-3" />
            {/* Main card */}
            <div className="relative w-64 h-72 rounded-2xl gradient-amber p-6 text-primary-foreground flex flex-col justify-center shadow-xl">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Specialization</p>
              <h3 className="text-2xl font-heading font-bold mb-6">Cloud Computing</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-foreground/80" />
                  AWS & GCP Certified
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-foreground/80" />
                  Kubernetes Expert
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-foreground/80" />
                  AI/ML Integration
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
