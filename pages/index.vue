<template>
    <div class="container mx-auto grid">
        <About/>
        <div class="mt-10 mb-24">
            <div v-for="post in posts" :key="post.id">
                <NuxtLink :to="post.path">
                    <PostCard :post="post"/>
                </NuxtLink>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    async asyncData({$content, params}) {
        const posts = await $content('posts')
            .where({
                isArchived: false,
                publishedAt: { $lte: new Date() },
              })
            .sortBy('age', 'asc')
            .fetch()
        return {posts}
    }
}
</script>
