/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: { 
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      animation: {
        'translate': 'translate 7s ease-in-out 888ms infinite',
        'go': 'go 6s ease-in-out 888ms infinite'
      },
      keyframes: {
        translate:{
        '0%':{
            top: '140px',
            left: '-550px',
            opacity: '0'
        },
        '16%':{
           top: '140px',
           left: '-260px',
           opacity: '1'
        },
        '32%':{
           top: '140px',
           left: '-260px',
           opacity: '1'
        },
        '48%':{
           top: '-90px',
           left: '-260px',
           opacity: '0'
        },
        '49%':{
           top: '-90px',
           left: '-550px',
        },
        '50%':{
           top: '360px',
           left: '-550px',
        },
        '51%':{
           top: '360px',
           left: '64px',
           opacity: '0'
        },
        '66%':{
           top: '140px',
           left: '64px',
           opacity: '1'
        },
        '82%':{
           top: '140px',
           left: '64px',
           opacity: '1'
        },
        '97%':{
           top: '140px',
           left: '360px',
           opacity: '0'
        },
        '100%':{
           top: '140px',
           left: '360px',
           opacity: '0'
        }
      
      },
      go: {
         '0%':{
            top: '110px',
            left: '-440px',
            opacity: '0'
        },
        '16%':{
           top: '110px',
           left: '-215px',
           opacity: '1'
        },
        '32%':{
           top: '110px',
           left: '-215px',
           opacity: '1'
        },
        '48%':{
           top: '-60px',
           left: '-215px',
           opacity: '0'
        },
        '49%':{
           top: '-60px',
           left: '-440px',
        },
        '50%':{
           top: '300px',
           left: '-440px',
        },
        '51%':{
           top: '300px',
           left: '47px',
           opacity: '0'
        },
        '66%':{
           top: '110px',
           left: '47px',
           opacity: '1'
        },
        '82%':{
           top: '110px',
           left: '47px',
           opacity: '1'
        },
        '97%':{
           top: '110px',
           left: '320px',
           opacity: '0'
        },
        '100%':{
           top: '110px',
           left: '320px',
           opacity: '0'
        }
      }

      },
      fontSize: {
        xxs: ['0.7rem', { lineHeight: '1rem' }],
        md: ['1rem', { lineHeight: '1.75rem' }],
        '2.5xl': ['1.55rem', { lineHeight: '2.25rem' }],
        '2xl': ['1.5rem', { lineHeight: '31px' }],
        '3.5xl': ['33px', { lineHeight: '43px' }],
        base: ['1rem', { lineHeight: '1.625rem' }],
        wp: ['1.125rem', { lineHeight: '1.625rem' }],
      },
      letterSpacing: {
        widest: '0.175em',
      }
    },
  },
  plugins: [],
}
