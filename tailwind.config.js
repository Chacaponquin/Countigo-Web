module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#135194",
                second_color: "rgb(250, 187, 70)",
                success_color: "#26de81",
                error_color: "#fc5c65",
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