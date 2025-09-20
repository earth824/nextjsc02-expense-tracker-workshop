import { Moon, Sun } from 'lucide-react';

export const THEME = {
  LIGHT: {
    NAME: 'light',
    ICON: Sun
  },
  DARK: {
    NAME: 'dark',
    ICON: Moon
  }
} as const;
