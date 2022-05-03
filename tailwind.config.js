module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#135194",
                second_color: "rgb(250, 187, 70)",
            },
            fontFamily: {
                openSans: ["OpenSans"],
                openSansBold: ["OpenSans-Bold"],
                myriadBold: ["Myriad-Bold"],
            },
            screens: {
                esm: { max: "640px" },
            },
        },
    },
    plugins: [],
};