/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#3b82f6',    // light blue
            DEFAULT: '#2563eb',   // medium blue
            dark: '#1d4ed8',     // dark blue
          },
          secondary: {
            light: '#f3f4f6',    // light gray
            DEFAULT: '#e5e7eb',   // medium gray
            dark: '#d1d5db',      // dark gray
          },
          accent: {
            light: '#10b981',     // light green
            DEFAULT: '#059669',   // medium green
            dark: '#047857',      // dark green
          },
        },
      },
    },
    plugins: [],
  }