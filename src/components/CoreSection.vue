<script>

    import { store } from '../store';
    import SingleCard from './SingleCard.vue';

    export default {

        name: 'CoreSection',

        components: {
            SingleCard,
        },

        data() {
            return {
                store,
            };
        },
    };

</script>

<template>

    <section id="core">

        <div class="texts">

            <h5 class="section-title">
                Our Core Values
            </h5>

            <p class="subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
            </p>

        </div>

        <div class="container d-flex justify-content-center gap-4" id="bottom_card">

            <div class="my_card" v-for="(card, index) in store.core" :key="index">
                <SingleCard :card= "card"/>
            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    #core{
        padding-top: 80px;
        text-align: center;
        background-color: rgb(245, 245, 245);
    }

</style>