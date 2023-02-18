/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dac895",
        secondary: "#636364",
        text: "#5c5c5c"
      },
      fontFamily: {
        Jost: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        body: ["Raleway"],
        total: ["Work Sans"]
      },
    },
  },
  plugins: [],
};
