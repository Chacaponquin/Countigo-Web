module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary_color: "rgb(0, 51, 102)",
                second_color: "rgb(250, 187, 70)",
            },
            fontFamily: {
                openSans: ["OpenSans"],
                openSansBold: ["OpenSans-Bold"],
            },
            screens: {
                esm: { max: "640px" },
            },
        },
    },
    plugins: [],
};