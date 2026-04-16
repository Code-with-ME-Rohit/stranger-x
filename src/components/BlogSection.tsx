import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Getting Started with Kubernetes on AWS",
    excerpt: "A practical guide to deploying containerized applications on Amazon EKS with best practices for production workloads.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    category: "Cloud",
  },
  {
    title: "Building Real-Time Apps with WebSockets",
    excerpt: "How I built Konec's messaging architecture to handle thousands of concurrent connections with sub-100ms latency.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "Backend",
  },
  {
    title: "Computer Vision for Fitness Applications",
    excerpt: "Exploring how TensorFlow and pose estimation models can provide real-time exercise form feedback in Smartfit.",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    category: "AI/ML",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-2">Blog</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Latest Posts
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sharing insights on cloud computing, AI, and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 gradient-amber opacity-80" />
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                <h3 className="font-heading font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
