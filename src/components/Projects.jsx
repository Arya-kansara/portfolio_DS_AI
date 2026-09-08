import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl sm:text-3xl text-ink-100 font-semibold mb-3"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-body text-sm text-ink-500 mb-10"
      >
        LLM pipelines and ML models, shipped end-to-end — not just notebooks.
      </motion.p>

      <div className="grid gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-6 sm:p-7 grid sm:grid-cols-[1fr_auto] gap-6 group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-lg text-ink-100 font-medium leading-snug">{p.title}</h3>
                <ExternalLink
                  size={16}
                  className="text-ink-500 shrink-0 mt-1 group-hover:text-accent-cyan transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-body text-[11px] text-ink-500 border border-white/[0.08] rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5">
                {p.points.map((pt, idx) => (
                  <li key={idx} className="font-body text-[13.5px] text-ink-300 leading-relaxed flex gap-2">
                    <span className="text-accent-cyan mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent-cyan" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-center gap-1 sm:min-w-[130px] sm:border-l sm:border-white/[0.06] sm:pl-6">
              <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient leading-none text-center sm:text-right">
                {p.metric}
              </p>
              <p className="font-body text-[11px] text-ink-500 text-center sm:text-right leading-tight mt-1">
                {p.metricLabel}
              </p>
              <div className="hidden sm:block mt-3 space-y-0.5">
                {p.stats.map((s) => (
                  <p key={s} className="font-body text-[11px] text-ink-500 text-right">{s}</p>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
