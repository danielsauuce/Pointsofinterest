module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: {
            light: '#ffffff',
            dark: '#1a1d23',
          },
          secondary: {
            light: '#f8f9fa',
            dark: '#252930',
          },
          tertiary: {
            light: '#e9ecef',
            dark: '#2f3440',
          },
        },

        // Text Colors
        text: {
          primary: {
            light: '#212529',
            dark: '#e9ecef',
          },
          secondary: {
            light: '#6c757d',
            dark: '#adb5bd',
          },
          tertiary: {
            light: '#adb5bd',
            dark: '#6c757d',
          },
        },

        // Accent Colors
        accent: {
          primary: {
            light: '#0066cc',
            dark: '#4da3ff',
          },
          hover: {
            light: '#0052a3',
            dark: '#6bb3ff',
          },
          light: {
            light: '#e6f2ff',
            dark: '#1a3a5c',
          },
        },

        // Status Colors
        success: {
          DEFAULT: {
            light: '#28a745',
            dark: '#5cb85c',
          },
          light: {
            light: '#d4edda',
            dark: '#2d4a2d',
          },
        },

        error: {
          DEFAULT: {
            light: '#dc3545',
            dark: '#d9534f',
          },
          light: {
            light: '#f8d7da',
            dark: '#5c2d2d',
          },
        },

        warning: {
          DEFAULT: {
            light: '#ffc107',
            dark: '#f0ad4e',
          },
          light: {
            light: '#fff3cd',
            dark: '#5c4a2d',
          },
        },

        // Border Colors
        border: {
          DEFAULT: {
            light: '#dee2e6',
            dark: '#3d4451',
          },
        },

        // Brand Colors (simplified single values for common use)
        brand: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#0066cc', // Primary brand color
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
      },

      // Gradient Definitions
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tertiary':
          'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-hero':
          'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      },

      // Box Shadow
      boxShadow: {
        light: '0 2px 8px rgba(0, 0, 0, 0.1)',
        'light-md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'light-lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        dark: '0 2px 8px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },

      // Border Radius
      borderRadius: {
        card: '12px',
        button: '8px',
        pill: '20px',
        large: '16px',
      },

      // Spacing (additional custom spacing)
      spacing: {
        128: '32rem',
        144: '36rem',
      },

      // Font Family
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },

      // Animation
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'spin-slow': 'spin 2s linear infinite',
      },

      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // Z-index
      zIndex: {
        modal: '2000',
        header: '1000',
        dropdown: '500',
      },
    },
  },
  plugins: [],
};

