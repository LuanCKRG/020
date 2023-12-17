import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/patterns/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-extra-light": "var(--color-primary-extra-light)",
        secundary: "var(--color-secundary)",
        inverted: "var(--text-color-primary)",
      },
      colors: {
        primary: "var(--color-primary)",
        secundary: "var(--color-secundary)"
      },
      textColor: {
        primary: "var(--text-color-primary)",
        secundary: "var(--color-secundary)",
        inverted: "var(--color-primary)",
      },
      fill: {
        secundary: "var(--color-secundary)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
export default config
