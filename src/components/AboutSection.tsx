import { motion } from "framer-motion";
import { Target, Lightbulb, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Who I Am</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            I am Rohit Kumar, a B.Tech CSE Cloud Computing student at Shoolini University. I specialize in building impactful digital solutions—from AI-driven fitness tools like Smartfit to community platforms like Club at Shoolini. I combine my passion for technology with a disciplined, goal-oriented mindset.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Currently pursuing B.Tech in Computer Science Engineering with a specialization in <strong className="text-foreground">Cloud Computing</strong> at Shoolini University, I'm dedicated to mastering cutting-edge technologies and building scalable, impactful solutions.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <GraduationCap size={18} className="text-primary" />
            Shoolini University
          </div>
        </motion.div>

        {/* Right — trait cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Target size={20} />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">Goal-Oriented</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Driven by a passion to solve real-world problems through technology. Every project is an opportunity to learn and create impact.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Lightbulb size={20} />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">Innovation First</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From AI-powered fitness coaching to real-time communication platforms, I thrive on pushing boundaries and exploring emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
