import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">rohittkumar20040@gmail.com</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Shoolini University</p>
              </div>
            </div>

            <div className="p-5 rounded-xl gradient-amber text-primary-foreground shadow-sm">
              <p className="font-heading font-semibold mb-3">Connect With Me</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 p-8 rounded-xl bg-card border border-border shadow-sm"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
              <input
                type="text"
                placeholder="Project Collaboration"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-amber text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
