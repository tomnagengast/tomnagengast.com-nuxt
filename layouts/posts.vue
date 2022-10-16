<template>
    <div class="container mx-auto max-w-4xl px-4 lg:px-0 text-gray-800">
        <Nav/>
        <div class="max-w-xl mx-auto">
            <slot/>
        </div>
    </div>
</template>

<script setup>
useMeta({
    meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
        {charset: 'utf-8'}
    ],
    title: 'Tom Nagengast',
    link: [
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: "/yeehaw.png"},
        {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap"},
    ]
})
</script>
