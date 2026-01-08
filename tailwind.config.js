/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors from Figma
      colors: {
        // Primary colors
        primary: '#232120',      // Dark accent
        secondary: '#F5EAE2',    // Light cream/subtile
        
        // Accent colors
        'accent-orange': '#FF4100',
        'accent-green': '#00E264',
        'accent-pink': '#FF78F4',
        'accent-purple': '#6273E9',
        
        // Text colors
        subtitle: '#624639',
        
        // Border/outline colors
        outline: '#EADCD3',
        'outline-medium': '#D0BFB4',
      },
      
      // Typography
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      
      // Border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      // Shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'glow-orange': '0 0 40px rgba(255, 65, 0, 0.3)',
        'glow-pink': '0 0 40px rgba(255, 120, 244, 0.3)',
        'glow-green': '0 0 40px rgba(0, 226, 100, 0.3)',
      },
      
      // Animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      
      // Max width
      maxWidth: {
        '8xl': '1280px',
        '9xl': '1440px',
      },
    },
  },
  plugins: [],
}

