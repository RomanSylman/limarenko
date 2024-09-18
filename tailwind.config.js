/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        base: ["11px", "14px"],
        title: ["15px", "18px"],
      },
    },
  },
  plugins: [],
};
