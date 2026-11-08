import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102746',
          800: '#16355D',
          900: '#0B1B32',
          950: '#071222',
        },
        accent: {
          DEFAULT: '#287CE0',
          hover: '#1F68C2',
          light: '#EBF4FF',
        },
        secondary: {
          DEFAULT: '#3B82F6',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          muted: '#F1F5F9',
        },
        ink: {
          primary: '#102746',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        line: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1',
        },
        status: {
          success: '#16A34A',
          warning: '#F59E0B',
          danger: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        enterprise: '0 4px 20px -2px rgba(16, 39, 70, 0.06), 0 2px 6px -1px rgba(16, 39, 70, 0.04)',
        elevated: '0 12px 32px -4px rgba(16, 39, 70, 0.12), 0 4px 12px -2px rgba(16, 39, 70, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
