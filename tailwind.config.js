/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            height:{
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '100': '25rem',
            }
        },
    },
    plugins: [],
}