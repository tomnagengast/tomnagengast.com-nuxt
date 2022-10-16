<template>
    <div>
        Pulling from the API
        {{ data }}
    </div>
</template>

<script setup>
const {data} = await useAsyncData('count', () => $fetch('/api/count'))
</script>
