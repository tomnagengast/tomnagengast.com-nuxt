<template>
    <div class="flex justify-between mb-24 pt-8 mt-4">
<!--        <NuxtLink-->
<!--            v-if="prev"-->
<!--            :to="prev.path"-->
<!--            class="text-blue-600 hover:underline"-->
<!--        >-->
<!--            ← {{ prev.title }}-->
<!--        </NuxtLink>-->
<!--        <span v-else>&nbsp;</span>-->
<!--        <NuxtLink-->
<!--            v-if="next"-->
<!--            :to="next.path"-->
<!--            class="text-blue-600 hover:underline"-->
<!--        >-->
<!--            {{ next.title }} →-->
<!--        </NuxtLink>-->
<!--        <span v-else>&nbsp;</span>-->
    </div>
</template>
<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
