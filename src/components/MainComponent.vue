<script>

    import CardsSection from './CardsSection.vue';
    import ParallaxSection from './ParallaxSection.vue';
    import RecentWorkSection from './RecentWorkSection.vue';
    import CoreSection from './CoreSection.vue';
    import OwnerSection from './OwnerSection.vue';
    import NewsSection from './NewsSection.vue';
    import PartnersSection from './PartnersSection.vue';
    import BuildingSection from './BuildingSection.vue';

    export default {

        name: 'MainComponent',

        components: {
            CardsSection,
            ParallaxSection,
            RecentWorkSection,
            CoreSection,
            OwnerSection,
            NewsSection,
            PartnersSection,
            BuildingSection
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

    <PartnersSection />

    <BuildingSection />

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

</style>