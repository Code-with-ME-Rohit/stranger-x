import { motion } from "framer-motion";
import { Cloud, Code2, Layers, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Technologies",
    icon: Cloud,
    skills: ["AWS", "Google Cloud Platform", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Node.js", "FastAPI", "TensorFlow", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "CI/CD", "Linux", "Figma", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-2">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
