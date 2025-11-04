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
    <motion.section id="projects" className="mx-auto max-w-6xl px-6 py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
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
            className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-5 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between">
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
    </motion.section>
  );
}
