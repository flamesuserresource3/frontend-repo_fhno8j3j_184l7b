import { Server, Database, Layout, Rocket } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Layout className="h-5 w-5" />, title: 'Frontend', items: ['React', 'Tailwind', 'TypeScript', 'Vite'] },
    { icon: <Server className="h-5 w-5" />, title: 'Backend', items: ['Node.js', 'FastAPI', 'REST', 'Auth'] },
    { icon: <Database className="h-5 w-5" />, title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'] },
    { icon: <Rocket className="h-5 w-5" />, title: 'DevOps', items: ['GitHub Actions', 'Docker', 'CI/CD', 'Vercel/Render'] },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">About Me</h2>
        <p className="mt-2 text-slate-700/90 dark:text-slate-300/90 max-w-3xl leading-relaxed">
          I’m Suraj, a college student and full‑stack developer passionate about building practical tools and delightful user experiences.
          I enjoy translating real‑world problems into clean, maintainable code.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-5">
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              {s.icon}
              <h3 className="font-semibold tracking-tight">{s.title}</h3>
            </div>
            <ul className="text-sm text-slate-700/90 dark:text-slate-300/90 space-y-1 leading-relaxed">
              {s.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
