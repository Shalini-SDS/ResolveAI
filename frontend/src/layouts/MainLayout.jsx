import { NavLink, Outlet } from 'react-router-dom';
import { FiMoon, FiSun, FiBell, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const MainLayout = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/40 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <span className="text-lg font-semibold">R</span>
            </div>
            <div>
              <p className="text-lg font-semibold">ResolveAI</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Civic Intelligence Platform</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="/" className="text-sm font-medium hover:text-emerald-600">{t.nav.home}</NavLink>
            <NavLink to="/dashboard" className="text-sm font-medium hover:text-emerald-600">{t.nav.dashboard}</NavLink>
            <NavLink to="/login" className="text-sm font-medium hover:text-emerald-600">{t.nav.login}</NavLink>
            <NavLink to="/register" className="text-sm font-medium hover:text-emerald-600">{t.nav.register}</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
              <option value="hi">हिन्दी</option>
            </select>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button className="rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <FiBell />
            </button>
            <button className="rounded-full border border-slate-200 bg-white p-2 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-800">
              <FiMenu />
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Outlet />
        </motion.div>
      </main>
      <footer className="border-t border-slate-200/80 bg-white/60 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
        © 2026 ResolveAI — Built for transparent civic action.
      </footer>
    </div>
  );
};

export default MainLayout;
