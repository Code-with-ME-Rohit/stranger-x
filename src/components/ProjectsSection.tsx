import ProjectCard from "./ProjectCard";
import smartfitImg from "@/assets/smartfit-hero.jpg";
import konecImg from "@/assets/konec-hero.jpg";
import clubImg from "@/assets/club-hero.jpg";

const projects = [
  {
    title: "Smartfit",
    tagline: "AI-Powered Fitness",
    description:
      "An AI-integrated fitness application designed to democratize personal training. Leveraging advanced API integrations and computer vision, Smartfit provides real-time feedback on exercise form, ensuring user safety and performance optimization.",
    image: smartfitImg,
    tags: ["AI/ML", "API Integration", "Computer Vision", "Real-time"],
  },
  {
    title: "Konec",
    tagline: "Real-time Communication",
    description:
      "A real-time communication platform engineered for seamless global interaction. Built with a focus on low-latency connectivity, it allows users to engage in spontaneous conversations with strangers in a secure environment.",
    image: konecImg,
    tags: ["WebSocket", "Real-time", "Backend Architecture", "Security"],
  },
  {
    title: "Club at Shoolini",
    tagline: "Campus Community",
    description:
      "Bridging the gap between students and campus life, Club at Shoolini is a centralized web directory designed to boost university engagement. Students can discover, track, and join various campus organizations through an intuitive, data-driven interface.",
    image: clubImg,
    tags: ["Web Directory", "Search", "UI/UX", "Community"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-20 text-foreground">
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
