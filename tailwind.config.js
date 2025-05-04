/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   din: ['"DIN Next LT Arabic"', 'sans-serif'],
      // },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        Primary: "#52BC77",
        PrimaryDark: "#0D624B",
        Secondary: "#2196F3",
        Accent: "#FF5722",
        Background: "#F5F5F5",
        Text: "#212121",
        TextDark: "#344451",
      },
    },
  },
  plugins: [],
};
