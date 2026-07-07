'use client';

import { motion } from 'framer-motion';
import { statsItems } from '@/lib/constants';

const itemDelays = [0.4, 0.6, 0.8] as const;

export default function StatsSection() {
  return (
    <motion.section
      className="flex w-full max-w-7xl flex-col gap-8 rounded-xl bg-slate-panel p-6 text-white shadow-panel md:gap-10 md:p-10 lg:gap-14 lg:p-16 xl:max-w-[1400px] xl:p-20"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        Company statistics
      </h2>
      <ul className="flex flex-col gap-4 md:gap-5">
        {statsItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: itemDelays[index] }}
            className="relative pl-6 text-lg font-light tracking-widest text-white before:absolute before:left-0 before:text-2xl before:text-gold before:content-['•'] md:text-2xl lg:text-3xl xl:text-4xl"
          >
            {item}
          </motion.li>
        ))}
      </ul>
      <p className="border-t border-white/10 pt-6 text-center text-base font-medium tracking-widest text-gold md:pt-8 md:text-xl lg:text-2xl">
        Built On Time, Quality With Promise
      </p>
    </motion.section>
  );
}
