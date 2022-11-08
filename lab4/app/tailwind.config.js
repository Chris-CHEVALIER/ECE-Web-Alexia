
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 * 
 */
module.exports = {
  content : [
    {darkMode: 'media'},
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
   

  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("flowbite/plugin", "tailwindcss-font-inter",
    "@tailwindcss/typography",
    "@tailwindcss/forms)")
    
   
  ]
}
