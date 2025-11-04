import { Github, Linkedin, Mail, Code } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2, ease: 'easeOut' },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Spline full-width animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to blend with content; don't block interactions */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-white/40 dark:to-slate-900/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-x-24 top-[-10%] h-64 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/10 blur-3xl"
        aria-hidden
      />

      {/* Navigation */}
      <motion.nav
        className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center shadow-lg shadow-indigo-600/30">
            <Code className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-white drop-shadow">Suraj</span>
        </div>
        <div className="flex items-center gap-4 text-slate-200">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </motion.nav>

      {/* Hero section */}
      <motion.section
        className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={container}>
            <motion.p className="text-sm uppercase tracking-widest text-amber-300/90 font-medium" variants={item}>
              Hello, I'm Suraj
            </motion.p>
            <motion.h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow" variants={item}>
              Full‑Stack Developer crafting fast, beautiful, and scalable web apps
            </motion.h1>
            <motion.p className="mt-4 text-slate-200" variants={item}>
              I build end‑to‑end experiences using modern stacks — from robust backends to polished, accessible UIs.
            </motion.p>
            <motion.div className="mt-6 flex flex-wrap items-center gap-3" variants={container}>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500"
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="mailto:suraj@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-white/90 hover:bg-white/10 backdrop-blur"
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" /> Contact
              </motion.a>
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-white/90 hover:bg-white/10 backdrop-blur"
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-white/90 hover:bg-white/10 backdrop-blur"
                variants={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl rounded-full" aria-hidden />
            <div className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'React', color: 'bg-sky-500' },
                  { label: 'Node.js', color: 'bg-emerald-500' },
                  { label: 'TypeScript', color: 'bg-blue-600' },
                  { label: 'Python', color: 'bg-yellow-500' },
                  { label: 'FastAPI', color: 'bg-indigo-600' },
                  { label: 'MongoDB', color: 'bg-green-600' },
                ].map((s) => (
                  <motion.div key={s.label} className="rounded-xl border border-white/20 bg-white/5 backdrop-blur p-4" whileHover={{ y: -4 }}>
                    <div className={`mx-auto h-10 w-10 rounded-lg ${s.color} text-white grid place-items-center mb-2`}>
                      <span className="text-xs font-semibold">{s.label[0]}</span>
                    </div>
                    <p className="text-xs font-medium text-white/90">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom fade to transition into light content below */}
      <div className="pointer-events-none relative z-10 h-10 bg-gradient-to-b from-transparent to-white/80 dark:to-slate-950/90" />
    </header>
  );
}
