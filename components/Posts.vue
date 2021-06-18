<template>
    <div class="mt-10 mb-24">
        <div
            v-for="card in cards"
            :key="card.id"
        >
            <NuxtLink :to="/posts/card.slug">
                <PostCard :card="card"/>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            cards: [
                {
                    id: 1,
                    slug: 'not-just-what-you-read-but-how',
                    date: '2021-04-03',
                    title: 'Not just what you read but how',
                    summary: 'The concept of a media diet has gotten a lot of attention, and it\'s surely an important one. If you fill your mind with divel, it\'ll soak your thoughts in kind. but how you choose to fill your mind matters too. Even if the sources are ace. For many years, I consumed media in a continuous, never-ending stream from morning till night. I...'
                },
                {
                    id: 2,
                    date: '2021-06-18',
                    slug: 'who-owns-your-iphone',
                    title: 'Who owns your iPhone?',
                    summary: 'You can spend up to $1,399 on an iPhone 12 Pro Max in the US, but even though the button to commit to this extravagant purchase says "buy", the transaction isn\'t really a sale in the traditional sense. Because even if you pay lavishly for this magnificent pocket computer, it\'s never truly yours. The Right To Repair You\'d think that aft..'
                }
            ]
        }
    }
}
</script>
