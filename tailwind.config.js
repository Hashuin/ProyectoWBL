/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'system-ui']
      },
      colors: {
        habboGold: '#f6c445',
        habboOrange: '#ff9c33',
        habboInk: '#1f1d2b',
        habboSky: '#3bc8f6',
        habboMint: '#4de1b1',
        habboBrick: '#f05d5e'
      },
      boxShadow: {
        pixel: '0 0 0 2px #1f1d2b, 4px 4px 0 0 #f6c445'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.25s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59,200,246,0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(59,200,246,0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
