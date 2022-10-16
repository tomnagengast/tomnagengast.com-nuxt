<template>
    <div class="mb-4">
        <div class="text-gray-800 text-7xl font-bold my-4 title">Posts</div>
        <p>Sometimes I write about things, sometimes they're interesting</p>
    </div>
    <hr>
    <div>
        <ContentList path="/posts" v-slot="{ list }">
            <div v-for="post in list" :key="post._path" class="text-center pt-14">
                <div v-if="currentDate > post.publishDate">
                    <NuxtLink :to="post._path" class="hover:text-blue-600 text-gray-800">
                        <div class="pb-1 text-gray-400">{{ formatDate(post.publishDate) }}</div>
                        <div class="pb-1 text-xl font-bold">{{ post.title }}</div>
                        <div class="text-gray-600">{{ post.description }}</div>
                    </NuxtLink>
                </div>
            </div>
        </ContentList>
    </div>
</template>

<script setup>
definePageMeta({ layout: "posts" });

const currentDate = new Date().toISOString()

const formatDate = (date) => {
    const d = new Date(date)
    const month = d.toLocaleString('default', {month: 'long'})
    const day = d.getDate()
    const year = d.getFullYear()
    return `${month} ${day}, ${year}`
}
</script>
