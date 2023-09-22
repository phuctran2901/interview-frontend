/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard']
      },
      spacing: {
        1: '2px',
        2: '4px',
        3: '8px',
        4: '10px',
        5: '12px',
        6: '16px',
        7: '18px',
        8: '20px',
        9: '24px',
        10: '28px',
        11: '32px',
        12: '40px',
        13: '48px',
        14: '56px',
        15: '64px'
      },
      colors: {
        boxShadow: {
          basic: '2px 6px 12px 12% #000000'
        },
        primary: {
          100: '#6713EF',
          90: '#762bf1',
          80: '#8542f2',
          70: '#955af4',
          60: '#a471f5',
          50: '#b389f7',
          40: '#c2a1f9',
          30: '#d1b8fa',
          20: '#e1d0fc',
          10: '#f0e7fd'
        },
        neutral: {
          0: '#202020',
          1: '#353C49',
          2: '#505866',
          3: '#B1B8C0',
          4: '#D9E0E8',
          5: '#E9EDF1',
          6: '#F2F4F6',
          7: '#F8F8F9',
          8: '#FFFFFF'
        },
        text: {
          0: '#353C49',
          1: '#676E7B',
          2: '#9198A0',
          3: '#B1B8C0',
          4: '#D1D6DA',
          5: '#FFFFFF'
        }
      },
      fontSize: {
        '2xl': [
          '30px',
          {
            lineHeight: '30px',
            fontWeight: '600'
          }
        ],
        xl: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '600'
          }
        ],
        lg: [
          '18px',
          {
            lineHeight: '22px',
            fontWeight: '600'
          }
        ],
        md: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '600'
          }
        ],
        sm: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '400'
          }
        ],
        xs: [
          '14px',
          {
            lineHeight: '18px',
            fontWeight: '400'
          }
        ]
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
        h4: { fontSize: config('theme.fontSize.md') },
        p: { fontSize: config('theme.fontSize.sm') },
        span: { fontSize: config('theme.fontSize.xs') }
      })
    })
  ]
}
