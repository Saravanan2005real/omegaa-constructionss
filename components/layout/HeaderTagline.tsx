'use client';

import { motion } from 'framer-motion';
import SiteTagline from '@/components/layout/SiteTagline';

export default function HeaderTagline() {
  return (
    <motion.div
      className="min-w-0"
      initial={{ opacity: 0.5, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <SiteTagline variant="header" />
    </motion.div>
  );
}
