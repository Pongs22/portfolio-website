import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        'dark-blue-05' : '#090F2C',
        'dark-blue-04' : '#111737',
        'dark-blue-03' : '#151C41',
        'dark-blue-02' : '#18214B',
        'dark-blue-01' : '#192353',

        'light-blue-05' : '#3772FF',
        'light-blue-04' : '#5C8CFF',
        'light-blue-03' : '#82A7FF',
        'light-blue-02' : '#AAC3FF',
        'light-blue-01' : '#D9E4FF',

        'light-orange-05' : '#FF8811',
        'light-orange-04' : '#FF952A',
        'light-orange-03' : '#FEA145',
        'light-orange-02' : '#FEB56B',
        'light-orange-01' : '#FFC286',

        'light-gray-01' : '#E5E9EC',

        
      },
    },
  },
  plugins: [],
};
export default config;
