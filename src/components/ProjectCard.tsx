import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  category: string;
  categoryColor: string;
  index: number;
}

const ProjectCard = ({
  title,
  tagline,
  description,
  image,
  tags,
  features,
  category,
  categoryColor,
  index,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-stretch bg-card rounded-2xl border border-border overflow-hidden shadow-sm`}
    >
      {/* Image */}
      <div className="flex-1 relative min-h-[280px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${categoryColor}`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{title}</h3>
        <p className="text-primary font-medium text-sm mb-4">{tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

        {features.length > 0 && (
          <div className="mb-5">
            <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
            <ul className="space-y-1.5">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight size={14} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <p className="text-sm font-semibold text-foreground mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-border text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-amber text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Github size={14} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
