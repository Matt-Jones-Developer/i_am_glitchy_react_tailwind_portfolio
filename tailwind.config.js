/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "bs-dark": "var(--bs-dark)",
        "bs-tone": "var(--bs-tone)",
        "color-dark": "var(--color-dark)",
        "color-light": "var(--color-light)",
        "gb-grey": "var(--bg-grey)",
        "gb-dark-grey": "var(--gb-dark-grey)",
        "lumi-green": "var(--lumi-green)",
        "lumi-pink": "var(--lumi-pink)",
        "lumi-yellow": "var(--lumi-yellow)",
        "peachy": "var(--peachy)",
        "purps": "var(--purps)",
        "peachier": "var(--peachier)",
        "aqua": "var(--aqua)",
        "gradient": "var(--gradient)"
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        floating: 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
      },
      variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [],
}

