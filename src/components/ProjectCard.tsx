import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, tagline, description, image, tags, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
    >
      {/* Image */}
      <div className="flex-1 w-full">
        <div className="rounded-xl overflow-hidden card-glow border border-border">
          <img src={image} alt={title} className="w-full h-64 md:h-72 object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-2">{tagline}</p>
        <h3 className="text-3xl font-bold font-mono text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
