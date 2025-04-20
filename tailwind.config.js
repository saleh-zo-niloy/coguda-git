/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}', // 👈 Include your libraries here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
