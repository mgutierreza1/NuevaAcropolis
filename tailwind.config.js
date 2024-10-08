import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#beebb0",
          "secondary": "#cef0c4",
          "accent": "#dff5d8",
          "neutral": "#effaeb",
          "base-100": "#ffffff",
          "info": "#2563eb",
          "success": "#007000",
          "warning": "#eab308",
          "error": "#b91c1c",
        },
      },
    ],
  },
  plugins: [
    daisyui
  ],
}