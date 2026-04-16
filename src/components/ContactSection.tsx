import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>

          <a
            href="mailto:rohittkumar20040@gmail.com"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity card-glow"
          >
            rohittkumar20040@gmail.com
          </a>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm font-mono">
              © {new Date().getFullYear()} Rohit Kumar — Built with passion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
