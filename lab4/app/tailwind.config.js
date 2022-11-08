
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 * 
 */

 const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content : [
    {darkMode: 'media'},
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
   
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("flowbite/plugin", 
            "tailwindcss-font-inter",
            "@tailwindcss/typography",
            "@tailwindcss/forms)")
    
   
  ]
}


