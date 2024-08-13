/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {
        fontFamily: {
        LogoFont: "'Zeyada', cursive;",
        boldfont: "'Archivo Black', sans-serif;",
        writingFont: "'Lato', sans-serif;",
        },
        keyframes: {
        'word-rotate-mobile': {
            '0%, 100%': { transform: 'translateY(0)' },
            '20%, 25%': { transform: 'translateY(-25px)' },
            '45%, 50%': { transform: 'translateY(-46px)' },
            '70%, 75%': { transform: 'translateY(-75px)' },
            '95%': { transform: 'translateY(-100px)' },
        },
        'word-rotate-desktop': {
            '0%, 100%': { transform: 'translateY(5)' },
            '20%, 25%': { transform: 'translateY(-69px)' },
            '45%, 50%': { transform: 'translateY(-123px)' },
            '70%, 75%': { transform: 'translateY(-183px)' },
            '95%': { transform: 'translateY(-213px)' },
            '95%': { transform: 'translateY(-243px)' },

        },
        },
        animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'word-rotate-mobile': 'word-rotate-mobile 10s ease infinite',
        'word-rotate-desktop': 'word-rotate-desktop 10s ease infinite',
        },
        colors: {
        bgcolor: '#D9D9D9',
        appleblack: '#1A1A1A',
        crimson: '#DC143C',
        
        sacramento:'#162114',
        pine: '#294122',
        tangerine:'#EB3D00',
        chiffon:'#FFEDD2',

        },
    },
    },
    plugins: [],
}
