/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        base: {
          950: '#0A0714',
          900: '#0D0A1A',
          800: '#13102A',
          700: '#1B1638',
        },
        accent: {
          violet: '#A855F7',
          cyan: '#22D3EE',
        },
        ink: {
          100: '#ECE9F5',
          300: '#B7B0D1',
          500: '#8D85AC',
        },
      },
      backgroundImage: {
        'grad-accent': 'linear-gradient(135deg, #A855F7 0%, #22D3EE 100%)',
        'grad-radial': 'radial-gradient(ellipse at top, #1B1638 0%, #0A0714 60%)',
      },
    },
  },
  plugins: [],
}
