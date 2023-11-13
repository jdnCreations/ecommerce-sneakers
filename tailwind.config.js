/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Kumbh Sans'],
      },
      colors: {
        oj: 'hsl(26, 100%, 55%)',
        pale: 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
    },
  },
  plugins: [],
};

// ### Primary

// - Orange: hsl(26, 100%, 55%)
// - Pale orange: hsl(25, 100%, 94%)

// ### Neutral

// - Very dark blue: hsl(220, 13%, 13%)
// - Dark grayish blue: hsl(219, 9%, 45%)
// - Grayish blue: hsl(220, 14%, 75%)
// - Light grayish blue: hsl(223, 64%, 98%)
// - White: hsl(0, 0%, 100%)
// - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
