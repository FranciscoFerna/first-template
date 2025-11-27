/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111827",
        border: "#e5e7eb",
        primary: "#3b82f6",
      },
      // Aquí puedes definir utilidades personalizadas si usas @apply
      typography: {
        DEFAULT: {
          css: {
            h1: { lineHeight: '1.2' },
            h2: { lineHeight: '1.3' },
          },
        },
      },
    },
  },
  plugins: [],
};
