/**
 * Tailwind Configuration
 * Extends default theme with custom colors and animations
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cosmic: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          500: '#0f1a3c',
          600: '#0a1128',
          700: '#070d1a',
        },
        nova: {
          400: '#00f3ff',
          500: '#00d1e0',
        },
        red: {
          100: '#ff9999',
          200: '#ff6666',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff3333',
          600: '#e02424',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}