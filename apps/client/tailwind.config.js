const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        background: '#EAEAEA',
        text: '#121212',
        secondaryText: '#222222',
        border: '#222222',
        accent: '#2563EB',
      },
      borderColor: {
        DEFAULT: '#222222',  // Couleur par défaut pour toutes les bordures
      },
      spacing: {
        'sidebar': '250px',  // Utilisation pour la largeur de la sidebar par exemple
      },
    },
  },
  plugins: [],
};
