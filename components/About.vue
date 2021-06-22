<template>
    <div class="px-4">
        <div class="text-6xl font-bold my-24 mb-16 text-gray-800">Hi! I'm Tom Nagengast</div>
        <div class="font-serif font-light leading-10 text-2xl text-right text-gray-700">
            <div>I like to make things and solve prolems</div>
<!--            <div class="py-4">-->
<!--                <div>I'm a <span class="text-blue-600 border-b-8 border-blue-100">{{ identity }}</span> living on the California Central Coast</div>-->
<!--            </div>-->
            <div>This is mostly nonsense, Cheers!</div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            identity: 'butterfly therapist',
            occupations: [
                "data scientist", "musician", "web developer", "creative",
                "woodworker", "fisherman", "athlete", "nerd", "badass",
                "winemaker", "hero", "comedian", "brother", "dreamer",
                "programmer", "data scientist", "tank cleaner", "designer",
                "audiophile", "movie watcher", "trusted advisor",
                "drinking buddy", "floor sweeper", "web developer",
                "world traveler", "man of mystery", "mad scientist",
                "fashionable dude", "gardener", "farmer", "analyst",
                "city slicker", "local yocal", "book reader", "writer",
                "backpacker", "chef", "night owl", "force of nature",
                "salesman", "consumer", "hermit", "socialite", "renaissance man",
                "web developer", "son", "neat freak", "romantic", "tough s.o.b.",
                "n00b", "expert", "thinker", "pontificator", "winemaker"
            ]
        }
    },
    mounted() {
        window.setInterval(() => {
            this.updateIdentity();
        }, 1500);
    },
    methods: {
        updateIdentity() {
            this.identity = this.occupations[Math.floor(Math.random() * this.occupations.length)];
        },
    },
}
</script>
