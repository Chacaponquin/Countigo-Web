module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#135194",
                second_color: "#ffd32a",
                success_color: "#26de81",
                error_color: "#fc5c65",
            },
            fontFamily: {
                openSans: ["OpenSans"],
                openSansBold: ["OpenSans-Bold"],
                myriadBold: ["Myriad-Bold"],
            },
            screens: {
                exsm: { max: "400px" },
                esm: { max: "640px" },
            },
        },
    },
    plugins: [],
};