import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/libs/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/use-svg-as-background-image-particle-strokes.svg')",
      },
      fontFamily: {
        josefin: ["Josefin Sans, sans-serif"],
        jost: ["Noto_Sans_Bengali"],

      },
      colors: {
        primaryColor: "#004225",
        hoverPrimaryColor: "#008080",
        blackColor: "#121212",
        whiteColor: "#fff",
        grayColor: "#eee",
        sidebarHoverColor: "#cccccc",
        textHighlighter: "#ed143d"
      },
      boxShadow: {
        cardShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
}
export default config
