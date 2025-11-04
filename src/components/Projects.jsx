import { Github, Globe, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Campus Connect',
    description:
      'A student hub to share notes, organize study groups, and discover campus events. Built with React, FastAPI, and MongoDB.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'TaskFlow',
    description:
      'Kanban-style task manager with real-time updates and drag‑and‑drop. JWT auth and role-based access.',
    tech: ['React', 'Node.js', 'Express', 'Socket.io'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'DevSnippets',
    description:
      'A searchable library of code snippets and templates, with tags and favorites for quick recall.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/',
    demo: '#',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Animated background for the projects section */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_40%)]" />
        {/* Glow gradients */}
        <motion.div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          initial={{ opacity: 0.3, scale: 0.9, x: -20, y: -10 }}
          animate={{ opacity: 0.5, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"
          initial={{ opacity: 0.25, scale: 0.9, x: 10, y: 10 }}
          animate={{ opacity: 0.45, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <motion.div className="relative mx-auto max-w-6xl px-6 py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <motion.h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white" {...fadeIn}>
              Projects
            </motion.h2>
            <motion.p className="mt-2 text-slate-700/90 dark:text-slate-300/90 leading-relaxed" {...fadeIn} transition={{ delay: 0.1 }}>
              Selected work showcasing full‑stack problem solving.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:underline"
            whileHover={{ x: 2 }}
          >
            <Github className="h-4 w-4" /> View GitHub
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-5 transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Card highlight on hover */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-indigo-500/0 via-purple-500/0 to-pink-500/0"
                animate={{ background: [
                  'linear-gradient(45deg, rgba(99,102,241,0.0), rgba(168,85,247,0.0), rgba(236,72,153,0.0))',
                  'linear-gradient(45deg, rgba(99,102,241,0.06), rgba(168,85,247,0.04), rgba(236,72,153,0.06))',
                  'linear-gradient(45deg, rgba(99,102,241,0.0), rgba(168,85,247,0.0), rgba(236,72,153,0.0))'
                ] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />

              <div className="relative flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">{p.title}</h3>
                <Terminal className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="mt-2 text-sm text-slate-700/90 dark:text-slate-300/90 leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-slate-700/90 dark:text-slate-300/90">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="h-4 w-4" /> Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 text-slate-700/90 hover:underline dark:text-slate-300/90"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* bottom fade separator */}
      <div className="pointer-events-none h-10 bg-gradient-to-b from-transparent to-white/60 dark:to-slate-950/80" />
    </section>
  );
}
