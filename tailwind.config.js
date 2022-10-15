// safelistConfig = process.env.APP_ENV === 'production' ? [] : [
//     {
//         pattern: /./, // the "." means "everything", remove this for production
//     },
// ];

module.exports = {
    // safelist: safelistConfig,
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
