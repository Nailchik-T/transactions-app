/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: "#090917",
                    800: "#17163a",
                    700: "#2e2d74",
                    600: "#4543ae",
                    500: "#5c59e8",
                    400: "#7d7aed",
                    300: "#9d9bf1",
                    200: "#bebdf6",
                    100: "#dedefa",
                    50: "#efeffd",
                },
                neutral: {
                    white: "#fff",
                    black: {
                        500: "#667085",
                        600: "#4d5464",
                        700: "#333843",
                        800: "#1a1c21",
                        900: "#0a0b0d",
                    },
                    gray: {
                        25: "#f9f9fc",
                        50: "#f0f1f3",
                        75: "#eceef6",
                        100: "#e0e2e7",
                        200: "#c2c6ce",
                        300: "#a3a9b6",
                        400: "#858d9d",
                    },
                },
                secondary: {
                    yellow: {
                        50: "#fdf1e8",
                        100: "#fae1cf",
                        200: "#f4c3a0",
                        300: "#efa670",
                        400: "#e98841",
                        500: "#e46a11",
                        600: "#ab500d",
                        700: "#723509",
                        800: "#391b04",
                        900: "#170b02",
                    },
                    green: {
                        50: "#e7f4ee",
                        100: "#cfe7dc",
                        200: "#9ed0b9",
                        300: "#6eb895",
                        400: "#3da172",
                        500: "#0d894f",
                        600: "#0a673b",
                        700: "#074528",
                        800: "#032214",
                        900: "#010e08",
                    },
                },
            },
        },
    },
    plugins: [],
};
