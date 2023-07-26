<script>

    import { store } from '../store';
    import SingleCard from './SingleCard.vue';

    export default {

        name: 'NewsSection',

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

    <section id="news">
    
        <h5 class="section-title mb-5">
            Latest News
        </h5>

        <p class="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
        </p>
        
        <div class="container d-flex justify-content-center gap-4 mb-5" id="bottom_card">

            <div class="my_card" v-for="(card, index) in store.news" :key="index">
                <SingleCard :card= "card"/>
            </div>

        </div>

        <div class="divider">
            <span>VIEW ALL ARTICLES</span>
        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    #news{
    text-align: center;
    padding-bottom: 100px;
    background-color: #F5F5F5;
    
        span{
            color: rgb(154, 154, 154);
            cursor: pointer;

            &:hover{
                color: $color-primary;
            }

        }

    }

</style>