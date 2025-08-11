/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // root HTML ফাইল
    "./src/**/*.{html,js,jsx}", // src ফোল্ডারের সব html, js, jsx ফাইল
    "./components/**/*.{js,ts,jsx,tsx}" // components ফোল্ডারের js/ts/react ফাইল
  ],
  theme: {
    extend: {
      // তোমার কাস্টমাইজেশন এখানে
      colors: {
        brand: '#0ea5e9',
      },
    },
  },
  plugins: [],
}
