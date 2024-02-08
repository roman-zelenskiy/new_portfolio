import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default <Partial<Config>>{
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "320px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
            "3xl": "1600",
            "4xl": "1800"
        },
        fontFamily: {
            // raleway: ["Raleway", "sans"],
        },
        extend: {
            dropShadow: {
                'icon_title': '-8px -10px 5px rgba(0, 0, 0, 0.3)',
            },
            opacity: {
                hover: '60%',
              },
              transitionDuration: {
                hover: '200ms',
              },
            colors: {
                'dark-transparent': '#00000094',
                'white-transparent': 'rgba(255, 255, 255, 0.7);'
            }
        },
    },
    plugins: [
        typography,
        forms,
        aspectRatio,
    ],
}
