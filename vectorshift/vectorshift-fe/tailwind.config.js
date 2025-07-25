/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#4f45e4",
          secondary: "#6366f1",
          hover: "#eef2ff",
          textPrimary: "#374151",
          textSecondary: "#6a7280",
          borderBase: "#4f45e4",
          handleInput: "#4f46e5",
          handleOutput: "#10b981",
        },
      },
      borderColor: {
        DEFAULT: "#e5e7eb", // optional default
        borderBase: "#4f45e4", // ✅ needed to allow `border-borderBase`
      },
      textColor: {
        textPrimary: "#374151",
        textSecondary: "#6a7280",
      },
      backgroundColor: {
        hover: "#eef2ff",
        handleInput: "#4f46e5",
        handleOutput: "#10b981",
      },
      boxShadow: {
        node: "0 2px 8px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
    plugins: [],
  };
  