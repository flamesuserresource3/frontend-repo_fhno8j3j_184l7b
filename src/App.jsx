import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-black font-serif antialiased">
      <Header />
      <main className="[&_*:where(p)]:leading-relaxed">
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
