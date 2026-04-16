import ProjectCard from "./ProjectCard";
import smartfitImg from "@/assets/smartfit-hero.jpg";
import konecImg from "@/assets/konec-hero.jpg";
import clubImg from "@/assets/club-hero.jpg";

const projects = [
  {
    title: "Smartfit",
    tagline: "AI-Powered Personal Training Platform",
    description:
      "An AI-integrated fitness application designed to democratize personal training. Leveraging advanced API integrations and computer vision, Smartfit provides real-time feedback on exercise form, ensuring user safety and performance optimization.",
    image: smartfitImg,
    tags: ["React", "Python", "TensorFlow", "Computer Vision", "REST APIs", "AWS"],
    features: [
      "Real-time exercise form correction using AI",
      "Personalized workout recommendations",
      "Progress tracking and analytics",
      "Cloud-based data synchronization",
    ],
    category: "AI/ML",
    categoryColor: "bg-accent",
  },
  {
    title: "Konec",
    tagline: "Real-Time Anonymous Chat Platform",
    description:
      "Konec is a real-time communication platform engineered for seamless global interaction. Built with a focus on low-latency connectivity, it allows users to engage in spontaneous conversations with strangers in a secure environment.",
    image: konecImg,
    tags: ["React", "Node.js", "WebSocket", "MongoDB", "Docker"],
    features: [
      "Low-latency real-time messaging",
      "Anonymous user matching algorithm",
      "End-to-end encryption",
      "Scalable WebSocket architecture",
    ],
    category: "Web Development",
    categoryColor: "bg-primary",
  },
  {
    title: "Club at Shoolini",
    tagline: "Campus Community Directory",
    description:
      "Bridging the gap between students and campus life, Club at Shoolini is a centralized web directory designed to boost university engagement. Students can discover, track, and join various campus organizations through an intuitive, data-driven interface.",
    image: clubImg,
    tags: ["React", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "GCP"],
    features: [
      "Smart search with filtering",
      "Club analytics dashboard",
      "Event calendar integration",
      "Student engagement tracking",
    ],
    category: "Full Stack",
    categoryColor: "bg-green-600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, cloud computing, and community platforms
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
