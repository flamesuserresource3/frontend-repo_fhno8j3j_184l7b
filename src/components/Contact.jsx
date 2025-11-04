import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section id="contact" className="mx-auto max-w-6xl px-6 py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <motion.div
        className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Let’s build something</h2>
        <p className="mt-2 text-slate-700/90 dark:text-slate-300/90 max-w-2xl leading-relaxed">
          I’m open to internships, freelance work, and cool collaborations. Reach out and I’ll get back to you soon.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <motion.a
            href="mailto:suraj@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-4 w-4" /> Email me
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="h-4 w-4" /> GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>
        </div>
      </motion.div>
      <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Suraj. All rights reserved.</p>
    </motion.section>
  );
}
