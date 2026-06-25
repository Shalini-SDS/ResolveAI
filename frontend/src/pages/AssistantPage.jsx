import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const AssistantPage = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-semibold">AI Community Assistant</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Ask about issue status, nearby problems, or complaint details.</p>
        <div className="mt-8 space-y-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
          {['How many potholes are near me?', 'Why is my issue pending?', 'Show my recent reports'].map((message) => (
            <div key={message} className="rounded-2xl bg-white px-4 py-3 shadow-sm dark:bg-slate-900">{message}</div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/70">
          <input className="flex-1 bg-transparent outline-none" placeholder="Ask ResolveAI" />
          <button className="rounded-full bg-emerald-600 p-3 text-white"><FiSend /></button>
        </div>
      </motion.div>
    </div>
  );
};

export default AssistantPage;
