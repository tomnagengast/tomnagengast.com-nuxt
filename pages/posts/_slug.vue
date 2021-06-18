<template>
    <article>
        <nuxt-content :document="post"/>
        <p>Article last updated: {{ formatDate(post.publishedAt) }}</p>
    </article>
</template>
<script>
export default {
    async asyncData({$content, params}) {
        const post = await $content('posts', params.slug).fetch()

        return {post}
    },
    methods: {
        formatDate(date) {
            return date
            // const options = {year: 'numeric', month: 'long', day: 'numeric'}
            // return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>
