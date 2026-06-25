import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiShield, FiZap, FiMic, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const features = [
  { title: 'AI issue categorization', text: 'Instantly classify and prioritize reports.', icon: FiZap },
  { title: 'Community verification', text: 'Build trust with collaborative validation.', icon: FiUsers },
  { title: 'Real-time tracking', text: 'Monitor every issue through resolution.', icon: FiMapPin },
  { title: 'Multilingual support', text: 'Seamless experience in English, Tamil, and Hindi.', icon: FiShield },
];

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-20">
      <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-amber-500/10 p-8 shadow-2xl shadow-emerald-500/10 dark:border-slate-800 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="inline-flex rounded-full border border-emerald-500/20 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm dark:bg-slate-900/70 dark:text-emerald-300">
            AI-powered civic platform for modern cities
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t.landing.heroTitle}</h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">{t.landing.heroSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/report" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-600/20">
              {t.landing.ctaPrimary} <FiArrowRight />
            </Link>
            <Link to="/issues" className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              {t.landing.ctaSecondary}
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <FiMic className="text-amber-500" /> Voice reporting • multilingual • real-time insights
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[1.5rem] border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Live city pulse</p>
              <p className="text-3xl font-semibold">3,428 issues</p>
            </div>
            <div className="rounded-full bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">+18% this month</div>
          </div>
          <div className="mt-6 space-y-4">
            {['Potholes resolved', 'Water leakage verified', 'Streetlight reports closed'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item}</span>
                  <span className="text-sm text-slate-500">94%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} whileHover={{ y: -6 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><Icon size={20} /></div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{feature.text}</p>
            </motion.div>
          );
        })}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">How it works</p>
            <h2 className="text-3xl font-semibold">From report to resolution in three steps</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {['Capture', 'Analyze', 'Resolve'].map((step, idx) => (
            <div key={step} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/60">
              <div className="mb-4 text-3xl font-semibold text-emerald-600">0{idx + 1}</div>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">A seamless flow designed for citizens, officers, and admins.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
