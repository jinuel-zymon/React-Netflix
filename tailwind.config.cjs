/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["poppins-regular", "Arial", "sans-serif"],
        medium: ["poppins-medium", "Arial", "sans-serif"],
        semibold: ["poppins-semibold", "Arial", "sans-serif"],
      },
      textColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        alert: "rgba(var(--alert), <alpha-value>)",
        success: "rgba(var(--success), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
        info: "rgba(var(--info), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
      },
      backgroundColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        popup: "rgba(var(--popup), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        orange: "rgba(var(--orange), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        alert: "rgba(var(--alert), <alpha-value>)",
        success: "rgba(var(--success), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
        info: "rgba(var(--info), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        subnav: "rgba(var(--subnav), <alpha-value>)",
      },
      borderColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        popup: "rgba(var(--popup), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        orange: "rgba(var(--orange), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        alert: "hsl(var(--alert) / <alpha-value>)",
        success: "rgba(var(--success), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
        info: "rgba(var(--info), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
      },
      stroke: {
        accent: "rgba(var(--accent), <alpha-value>)",
        success: "rgba(var(--success), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
        info: "rgba(var(--info), <alpha-value>)",
        alert: "rgba(var(--alert), <alpha-value>)",
      },

      fill: {
        alert: "rgba(var(--alert), <alpha-value>)",
      },
      backgroundImage: {
        skeleton:
          "linear-gradient(90deg, transparent, rgba(var(--primary), .8), transparent )",
      },
      animation: {
        rotate: "rotate 2s linear infinite",
        loading: "loading 1.5s ease-in infinite",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      }
    },
  },
  plugins: [],
};
