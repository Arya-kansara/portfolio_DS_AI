import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-10 sm:p-14 text-center"
      >
        <h2 className="font-display text-2xl sm:text-3xl text-ink-100 font-semibold mb-3">
          Let's work together
        </h2>
        <p className="font-body text-ink-300 text-sm max-w-md mx-auto mb-8">
          Open to Data Science, Machine Learning and AI Engineer roles — available immediately.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-grad-accent text-base-950 font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-body text-sm text-ink-100"
          >
            <Phone size={16} /> {profile.phone}
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8 text-ink-500">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>

      <p className="text-center font-body text-xs text-ink-500 mt-10">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
      </p>
    </section>
  );
}
