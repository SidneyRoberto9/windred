'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  const isDark = theme === 'dark';

  const handleChangeTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button type="button" className="p-2" onClick={handleChangeTheme}>
      {theme === 'dark' || 'system' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
