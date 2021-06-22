<template>
    <article class="mx-4">
        <div class="mt-20 mb-12 mx-auto center text-center">
            <a class="inline-block" href="/">
                <img class="rounded-full w-20 shadow-lg border p-1 mb-2"
                     src="https://avatars.githubusercontent.com/u/260337?v=4"
                     alt="Profile Picture">
            </a>
            <a href="/">
                <div class="uppercase text-gray-600 tracking-widest text-sm">Tom Nagengast</div>
            </a>
        </div>
        <div class="text-sm text-center text-gray-400 ">{{ formatDate(post.publishedAt) }}</div>
        <nuxt-content :document="post"/>
         <prev-next :prev="prev" :next="next"/>
    </article>
</template>
<script>
export default {
    async asyncData({$content, params}) {
        const post = await $content('posts', params.slug).fetch()

        const [prev, next] = await $content('posts')
            .only(['title', 'slug'])
            .where({
                isArchived: false,
                publishedAt: {$lte: new Date()},
            })
            .sortBy('age', 'asc')
            .surround(params.slug)
            .fetch()

        return {post, prev, next}
    },

    methods: {
        formatDate(date) {
            const options = {year: 'numeric', month: 'long', day: 'numeric'}
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style>
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
    @apply font-bold;
    @apply text-gray-800;
    @apply text-center;
}

.nuxt-content h1 {
    @apply text-4xl;
    @apply pb-8;
}

.nuxt-content h2 {
    @apply text-3xl;
}

.nuxt-content h3 {
    @apply text-2xl;
    @apply text-left;
}

.nuxt-content h4 {
    @apply text-xl;
}

.nuxt-content {
    @apply text-lg;
    @apply text-gray-900;
}

.nuxt-content p, .nuxt-content div {
    @apply pb-6;
}

.nuxt-content-highlight {
    @apply text-sm;
}

.nuxt-content a {
    @apply text-blue-600;
    @apply underline;
}

.nuxt-content-highlight {
    @apply relative;
}

.nuxt-content-highlight .filename {
    @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}

code[class*="language-"], pre[class*="language-"] {
    @apply rounded;
    background-color: #2F495E;
}

.token {
    font-style: initial !important;
}
</style>
