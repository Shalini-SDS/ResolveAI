import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiShield } from 'react-icons/fi';

const LoginPage = () => {
  const [role, setRole] = useState('Citizen');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-300"><FiShield size={22} /></div>
        <h2 className="text-3xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Access your civic dashboard and continue progress.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
              <span className="mb-2 flex items-center gap-2 text-slate-500"><FiMail /> Email</span>
              <input type="email" className="w-full bg-transparent outline-none" placeholder="you@example.com" />
            </label>
            <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
              <span className="mb-2 flex items-center gap-2 text-slate-500"><FiLock /> Password</span>
              <input type="password" className="w-full bg-transparent outline-none" placeholder="••••••••" />
            </label>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <p className="mb-3 text-sm font-medium">Role</p>
            <div className="flex flex-wrap gap-3">
              {['Citizen', 'Officer', 'Admin'].map((item) => (
                <button key={item} type="button" onClick={() => setRole(item)} className={`rounded-full px-4 py-2 text-sm ${role === item ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-900'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">Continue as {role}</button>
        </form>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-8 shadow-xl dark:border-slate-800">
        <h3 className="text-2xl font-semibold">Need a quick start?</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Use voice-powered issue reporting or jump straight into your role-specific workspace.</p>
        <div className="mt-8 space-y-3">
          {['Google Login', 'Password Reset', 'Multilingual Experience'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/60 bg-white/70 p-4 dark:bg-slate-900/70">{item}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
