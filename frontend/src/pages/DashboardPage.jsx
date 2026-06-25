import { motion } from 'framer-motion';
import { FiAlertCircle, FiCheckCircle, FiMapPin, FiUsers, FiAward } from 'react-icons/fi';

const statCards = [
  { title: 'Issues Reported', value: '184', icon: FiAlertCircle },
  { title: 'Issues Resolved', value: '126', icon: FiCheckCircle },
  { title: 'Community Points', value: '2,480', icon: FiAward },
  { title: 'Rank', value: '#12', icon: FiUsers },
];

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div key={card.title} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{card.title}</p>
                  <p className="mt-2 text-3xl font-semibold">{card.value}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-300"><Icon size={20} /></div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Issue status breakdown</h3>
          <div className="mt-6 space-y-4">
            {['Reported', 'Verified', 'Assigned', 'Resolved'].map((status) => (
              <div key={status}>
                <div className="mb-2 flex justify-between text-sm"><span>{status}</span><span>42%</span></div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-2 w-2/3 rounded-full bg-emerald-500" /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-sky-500/10 to-amber-500/10 p-6 shadow-sm dark:border-slate-800">
          <h3 className="text-xl font-semibold">Quick actions</h3>
          <div className="mt-6 space-y-3">
            {['Report Issue', 'Voice Report', 'View Map', 'Verify Issues'].map((action) => (
              <button key={action} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left text-sm font-medium shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <span>{action}</span>
                <FiMapPin />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
