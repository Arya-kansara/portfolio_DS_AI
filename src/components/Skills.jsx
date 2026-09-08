import { motion } from "framer-motion";
import { skillGroups, currentlyLearning } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl sm:text-3xl text-ink-100 font-semibold mb-10"
      >
        Toolkit
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <p className="font-display text-sm text-accent-cyan font-medium mb-3">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="font-body text-xs text-ink-300 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex flex-wrap items-center gap-2 font-body text-xs text-ink-500"
      >
        <span className="text-ink-300">Currently building on:</span>
        {currentlyLearning.map((s) => (
          <span key={s} className="border border-white/[0.08] rounded-full px-3 py-1">
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
