/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Reactで使う拡張子を対象にする
  ],
theme: {
  extend: {
          fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'], // ← サイト全体のデフォルトを変える
        serif: ['"Noto Serif JP"', 'serif'],
        logo: ['"M PLUS Rounded 1c"', 'sans-serif'], // ← ロゴ専用に別フォントもOK
      },
  },
},
  plugins: [],
}

