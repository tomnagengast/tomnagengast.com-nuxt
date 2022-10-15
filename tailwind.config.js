module.exports = {
    safelist: [
        {
            pattern: /./, // the "." means "everything", remove this for production
        },
    ],
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            minHeight: {
                '5': '5em',
            },
            maxHeight: {
                '10': '10em',
            },
        },
    },
    plugins: [],
}
