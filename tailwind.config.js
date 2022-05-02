module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#135194",
                second_color: "rgb(250, 187, 70)",
                twitter_color: "",
                facebook_color: "",
                linkedin_color: "",
                instagram_color: "",
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