import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    prefix: "",
    separator: ":",
    theme: {
        screens: {
            sm: { min: "480px" },
            md: { min: "768px" },
            lg: { min: "1024px" },
            xl: { min: "1200px" },
            "xs-only": { max: "479.98px" },
            "sm-only": { min: "480px", max: "767.98px" },
            "md-only": { min: "768px", max: "1023.98px" },
            "lg-only": { min: "1024px", max: "1199.98px" },
            "xl-only": { min: "1200px", max: "1399.98px" },

            "sm-down": { max: "479.98px" },
            "md-down": { max: "767.98px" },
            "lg-down": { max: "1023.98px" },
            "xl-down": { max: "1199.98px" },
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                xs: "480px",
                sm: "480px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
            },
        },
        zIndex: (function getZIndex() {
            return Object.fromEntries(
                Array.from({ length: 100 }, (_, i) => [i, i.toString()])
            );
        })(),
        extend: {
            // Extend colors
            colors: {
                dark: "#191919",
                red: {
                    50: "#ff0000", // light red
                    100: "#9C0404", // dark red
                    200: "#FF5959",
                },
                gray: {
                    50: "#353535", //border
                    100: "#1F1F1F", //background
                    200: "#A5A5A5", //text color
                    300: "#303030", //border color
                },
            },
            fontFamily: {
                "fira-sans": ['"Fira Sans Condensed"'],
            },
            boxShadow: {
                sm: "0px 4px 50.6px 0px #D8000040",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(25, 25, 25, 1) 98%, rgba(0, 212, 255, 0) 100%)",
                background:
                    "linear-gradient(180deg, rgba(25, 25, 25, 0) 0%, #191919 105.06%)"
            },

            aftrelay: {
                content: "",
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                "z-index": "1",
                height: "100%",
                background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
                transition: "all 0.4s ease",
            },
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [
        require("@tailwindcss/container-queries"),
        plugin(function extractColorsVars({ addBase, theme }) {
            function extractColorVars(colorObj, colorGroup = "") {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];
                    const cssVariable =
                        colorKey === "DEFAULT"
                            ? `--color${colorGroup}`
                            : `--color${colorGroup}-${colorKey}`;

                    const newVars =
                        typeof value === "string"
                            ? { [cssVariable]: value }
                            : extractColorVars(value, `-${colorKey}`);

                    return { ...vars, ...newVars };
                }, {});
            }

            addBase({
                ":root": extractColorVars(theme("colors")),
            });
        }),
    ],
};
