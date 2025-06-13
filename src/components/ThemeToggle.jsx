import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={() => setDark((d) => !d)}
      className="fixed bottom-8 left-8 z-50 bg-slate-800 hover:bg-slate-700 text-yellow-300 dark:text-blue-300 p-3 rounded-full shadow-lg focus:outline-none"
      aria-label="Toggle theme"
    >
      {dark ? '🌙' : '☀️'}
    </motion.button>
  );
} 