import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-[1.3fr_1fr] gap-10 items-start"
      >
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-ink-100 font-semibold mb-5">About</h2>
          <p className="font-body text-ink-300 leading-relaxed text-[15px]">{about.paragraph}</p>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="text-accent-cyan mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm text-ink-100 font-medium">{about.education.degree}</p>
                <p className="font-body text-xs text-ink-500 mt-1">{about.education.school}</p>
                <p className="font-body text-xs text-ink-500">{about.education.period} · {about.education.detail}</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <FileText size={18} className="text-accent-violet mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm text-ink-100 font-medium leading-snug">{about.publication.title}</p>
                <p className="font-body text-xs text-ink-500 mt-1">{about.publication.venue}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
