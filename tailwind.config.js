module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "purple": "var(--nz-purple)",
        "pink": "var(--nz-pink)",
        "blue": "var(--nz-blue)",
        "green": "var(--nz-green)",
        "grey": "var(--nz-grey)",
        "white": "var(--nz-white)",
        "charcoal": "var(--nz-charcoal)",
        "black": "var(--nz-black)"
      },
      fontSize: {
        "64px": ["var(--text-64px)", {
          letterSpacing: '1px',
          lineHeight: '3.5rem',
        }],
        "48px": ["var(--text-48px)", {
          letterSpacing: '1px',
          lineHeight: '3rem',
        }],
        "32px": ["var(--text-32px)", {
          letterSpacing: '1px',
          lineHeight: '3rem',
        }],
        "24px": ["var(--text-24px)", {
          letterSpacing: '0px',
          lineHeight: '2rem',
        }],
        "16px": ["var(--text-16px)", {
          letterSpacing: '0px',
          lineHeight: '1.5rem',
        }],
        "12px": ["var(--text-12px)", {
          letterSpacing: '0px',
          lineHeight: '1.5rem',
        }]
      },
      spacing: {
        '2': 'var(--spacing-xxs)',
        '4': 'var(--spacing-xs)',
        '8': 'var(--spacing-sm)',
        '16': 'var(--spacing-md)',
        '24': 'var(--spacing-lg)',
        '32': 'var(--spacing-xl)',
        '40': 'var(--spacing-xxl)',
        '64': 'var(--spacing-xxxl)'
      },
      screens: {
        'sm': '540px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
