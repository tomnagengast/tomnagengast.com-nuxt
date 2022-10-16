export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            appName : process.env.APP_NAME,
            appEnv: process.env.APP_ENV || 'development',
            appKey: process.env.APP_KEY,
            appDebug: process.env.APP_DEBUG || 'false',
            appUrl: process.env.APP_URL,
        },
    },
    modules: [
        '@nuxt/content'
    ],
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
        "~/assets/css/posts.css",
    ],
})
