<template>
    <div class="mx-4">
        <div
            class="border-2 px-8 py-10 my-8 shadow-md rounded max-w-2xl m-auto hover:shadow-lg cursor-pointer">
            <div class="text-sm text-center text-gray-500">{{ formatDate(post.publishedAt) }}</div>
            <div class="text-2xl font-bold text-center my-4 text-gray-800">{{ post.title }}</div>
            <div class="text-lg mb-6 text-gray-700">{{ post.description }}...</div>
            <div class="text-center text-sm pt-3">
                <span class="border py-2 px-4 rounded-4xl text-gray-700 hover:text-blue-600 hover:border-blue-600">Read more</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    methods: {
        formatDate(date) {
            const options = {year: 'numeric', month: 'long', day: 'numeric'}
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>
