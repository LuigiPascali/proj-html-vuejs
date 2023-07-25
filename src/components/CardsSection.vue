<script>

    import { store } from '../store';
    import SingleCard from './SingleCard.vue';

    export default {

        name: 'CardsSection',

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

    <section id="cards">

        <div id="top_cards">
            <span>Do You Have A Costruction Project We Can Help With?</span>
            <button type="button" class="gray big">get a free quote</button>
        </div>

        <div id="center_cards">
            <h5 class="section-title">Specialists In Modern Constriction</h5>
            <p class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.</p>
        </div>

        <div class="container d-flex justify-content-between" id="bottom_cards">

            <div class="cards" v-for="(card, index) in store.cards" :key="index">

                <SingleCard :card= "card"/>

            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    #cards{
    text-align: center;
    
        #top_cards{
            position: relative;
            padding: 40px 0;
            background-color: $color-primary;
            font-size: 1.875rem;
            font-weight: lighter;

            button{
                position: absolute;
                bottom: 0;
                left: 50%;
                border: 2px solid white;
                transform: translate(-50%, 50%);
            }
        }

        #center_cards{
            padding-top: 100px;
        }
    }

</style>