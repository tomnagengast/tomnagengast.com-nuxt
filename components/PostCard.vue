<template>
    <div class="border-2 px-8 py-12 my-8 shadow-md rounded max-w-2xl m-auto">
        <div class="text-sm text-center text-gray-500">{{ card.date }}</div>
        <div class="text-2xl font-bold text-center my-4">{{ card.title }}</div>
        <div>{{ card.summary }}</div>
        <div>Read more</div>
    </div>
</template>

<script>
export default {
    props: ['card'],
}
</script>
