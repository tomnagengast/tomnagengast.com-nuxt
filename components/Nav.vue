<template>
    <div class="flex justify-between flex-col sm:flex-row items-center py-8">
        <NuxtLink to="/" class="flex items-center space-x-4">
            <div class="font-bold text-4xl">Tom Nagengast</div>
        </NuxtLink>
        <div class="space-x-4 pt-2 nav-items">
            <NuxtLink to="/" class="hover:bg-blue-200 hover:text-blue-700 px-2 py-1 rounded text-base text-gray-500">README</NuxtLink>
            <NuxtLink to="/posts" class="hover:bg-blue-200 hover:text-blue-700 px-2 py-1 rounded text-base text-gray-500" v-if="true">Posts</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// console.log(process.env)
// const {APP_ENV} = process.env
// const is_production = APP_ENV === 'production'
// !is_production
</script>
