import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiLock, FiGlobe } from 'react-icons/fi';

const RegisterPage = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Join ResolveAI</p>
          <h2 className="mt-3 text-3xl font-semibold">Create your civic account</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Register as a citizen, officer, or administrator to take part in transparent local action.</p>
        </div>
        <form className="grid gap-4 sm:grid-cols-2">
          <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><FiUser /> Name</span>
            <input className="w-full bg-transparent outline-none" placeholder="Asha Rao" />
          </label>
          <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><FiMail /> Email</span>
            <input type="email" className="w-full bg-transparent outline-none" placeholder="asha@example.com" />
          </label>
          <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><FiPhone /> Phone</span>
            <input className="w-full bg-transparent outline-none" placeholder="9876543210" />
          </label>
          <label className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><FiLock /> Password</span>
            <input type="password" className="w-full bg-transparent outline-none" placeholder="••••••••" />
          </label>
          <label className="sm:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-950/60">
            <span className="mb-2 flex items-center gap-2 text-slate-500"><FiGlobe /> Preferred language</span>
            <select className="w-full bg-transparent outline-none">
              <option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
            </select>
          </label>
          <button className="sm:col-span-2 rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">Create account</button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
