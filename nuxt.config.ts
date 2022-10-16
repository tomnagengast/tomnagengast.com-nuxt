export default defineNuxtConfig({
    modules: [
        '@nuxt/content'
    ],
    // content: {
    //     documentDriven: true
    // },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/tailwind.css",
    ],
})
