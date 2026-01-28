/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",  // Scans all JS/TS/JSX/TSX files in src/
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'500px',
        'sm': '650px',   // Small devices (tablets, 640px and up)
        'md': '768px',   // Medium devices (tablets, 768px and up)
        'lg': '1024px',  // Large devices (desktops, 1024px and up)
        'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // 2X extra large devices (very large screens, 1536px and up)
        
        'xs': '475px',  // Extra small (very small phones, below 640px)
        '3xl': '1920px', // 3X extra large (ultra-wide monitors)
      },
    },
  },
  plugins: [],
}

