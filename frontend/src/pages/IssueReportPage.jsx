import { motion } from 'framer-motion';
import { FiImage, FiVideo, FiMic, FiMapPin, FiZap } from 'react-icons/fi';

const IssueReportPage = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-3xl font-semibold">Report a civic issue</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Share evidence and let ResolveAI suggest the right department.</p>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none dark:border-slate-800 dark:bg-slate-950/60" placeholder="Issue title" />
          <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none dark:border-slate-800 dark:bg-slate-950/60" placeholder="Describe the issue" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Upload Image', icon: FiImage },
              { label: 'Upload Video', icon: FiVideo },
              { label: 'Voice Report', icon: FiMic },
              { label: 'Location', icon: FiMapPin },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <label key={item.label} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-950/60">
                  <Icon /> {item.label}
                  <input type="file" className="hidden" />
                </label>
              );
            })}
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">Submit issue</button>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-500/10 to-amber-500/10 p-8 shadow-xl dark:border-slate-800">
        <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-300"><FiZap /> AI analysis preview</div>
        <div className="mt-6 space-y-4">
          {[
            ['Category', 'Road Damage'],
            ['Severity', 'High'],
            ['Risk Level', 'Moderate'],
            ['Assigned Department', 'Roads Department'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm dark:bg-slate-900/70">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IssueReportPage;
