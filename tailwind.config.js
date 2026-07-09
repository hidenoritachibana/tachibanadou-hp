/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Reactで使う拡張子を対象にする
  ],
  theme: {
    extend: {
      colors: {
        // 墨色（ダークネイビー）: サイトのベースカラー
        ink: {
          DEFAULT: "#0c1222",
          soft: "#141c33",
        },
        // 橘色（タチバナオレンジ）: 社名にちなんだアクセントカラー
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f4731f",
          600: "#e35a0c",
          700: "#bc450d",
          800: "#953712",
          900: "#782f12",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        serif: ['"Noto Serif JP"', "serif"],
        // 英字の見出し・キッカー用
        en: ["Outfit", '"Noto Sans JP"', "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
