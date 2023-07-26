<script>

    import CardsSection from './CardsSection.vue';
    import ParallaxSection from './ParallaxSection.vue';
    import RecentWorkSection from './RecentWorkSection.vue';
    import CoreSection from './CoreSection.vue';
    import OwnerSection from './OwnerSection.vue';
    import NewsSection from './NewsSection.vue';

    export default {

        name: 'MainComponent',

        components: {
            CardsSection,
            ParallaxSection,
            RecentWorkSection,
            CoreSection,
            OwnerSection,
            NewsSection,
        },
    }

</script>

<template>

    <CardsSection />

    <ParallaxSection />

    <RecentWorkSection />

    <CoreSection />
   
    <OwnerSection />

    <NewsSection />

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

</style>