/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlack: "#343434;",
        myBgYellow: "#F8E367",
        shadowOne: "0px 13px 48px -1px rgba(0, 0, 0, 0.25)",
        shadowTwo: "0px 13px 46px rgba(0, 0, 0, 0.13);",
        mainPink: "FE956F",
        lightPurple: "rgb(97, 207, 254)",
        BackGradient: "linear-gradient(134.74deg,#0bb5ff 14.09%,#6dd3fe 83.81%)",
      },
    },
  },
  plugins: [],
};

