/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "rgb(145, 71, 255)",
            "primary-content": "rgb(255, 255, 255)",
            "primary-dark": "rgb(115, 20, 255)",
            "primary-light": "rgb(175, 122, 255)",

            secondary: "rgb(255, 71, 89)",
            "secondary-content": "rgb(71, 0, 7)",
            "secondary-dark": "rgb(255, 20, 43)",
            "secondary-light": "rgb(255, 122, 135)",

            background: "rgb(25, 25, 26)",
            foreground: "rgb(38, 37, 39)",
            border: "rgb(63, 62, 65)",

            copy: "rgb(251, 251, 251)",
            "copy-light": "rgb(217, 216, 218)",
            "copy-lighter": "rgb(165, 164, 168)",

            success: "rgb(71, 255, 71)",
            warning: "rgb(255, 255, 71)",
            error: "rgb(255, 71, 71)",

            "success-content": "rgb(0, 71, 0)",
            "warning-content": "rgb(71, 71, 0)",
            "error-content": "rgb(255, 255, 255)"
        },
        backgroundImage: {
          light: 'url("/bg-light.jpg")',
        },
    }
},
  plugins: [],
  darkMode:  "class",
};
