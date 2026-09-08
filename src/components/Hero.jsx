import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// simple 3-layer neural net node layout
const layers = [
  [60, 130, 200, 270],
  [30, 100, 170, 240, 310],
  [60, 130, 200, 270],
];
const xPositions = [120, 500, 880];

function buildConnections() {
  const lines = [];
  for (let l = 0; l < layers.length - 1; l++) {
    layers[l].forEach((y1) => {
      layers[l + 1].forEach((y2) => {
        lines.push({ x1: xPositions[l], y1, x2: xPositions[l + 1], y2 });
      });
    });
  }
  return lines;
}

const connections = buildConnections();

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grad-radial grid-bg px-6"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        viewBox="0 0 1000 340"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {connections.map((c, i) => (
          <motion.line
            key={i}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.006, ease: "easeInOut" }}
          />
        ))}
        {layers.flatMap((layer, l) =>
          layer.map((y, idx) => (
            <motion.circle
              key={`${l}-${idx}`}
              cx={xPositions[l]}
              cy={y}
              r="6"
              fill={l === 1 ? "#22D3EE" : "#A855F7"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + l * 0.3 }}
            />
          ))
        )}
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-2xl w-full text-center"
      >
        <motion.p variants={item} className="font-body text-sm text-accent-cyan mb-4 tracking-wide">
          {profile.location} · {profile.resumeNote}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-6xl font-semibold text-ink-100 leading-tight mb-5"
        >
          {profile.name}
        </motion.h1>

        <motion.h2 variants={item} className="font-display text-lg sm:text-2xl text-gradient font-medium mb-6">
          {profile.role}
        </motion.h2>

        <motion.p variants={item} className="font-body text-ink-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-grad-accent text-base-950 font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-xl glass glass-hover font-body text-sm text-ink-100 flex items-center gap-2"
          >
            <Mail size={16} /> Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-5 mt-8 text-ink-500">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 text-ink-500 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
