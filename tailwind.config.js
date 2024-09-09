/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "DM Sans",
        "mona-sans": "Mona-Sans",
      },
      textColor: {
        "green-primary": "#004b24",
        "green-secondary": "#b5f14f",
      },
      colors: {
        gold: "#FFD700", // You can change the hex value to your desired gold color
      },
      backgroundColor: {
        "green-p": "#b5f14f",
        "green-s": "#004b24",
        "green-a": "#9df01a",
      },
      borderColor: {
        "green-p": "#b5f14f",
        "green-s": "#004b24",
        "green-a": "#9df01a",
      },
    },
  },
  plugins: [],
};
