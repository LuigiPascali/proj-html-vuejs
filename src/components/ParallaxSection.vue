<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';



export default {
    
    name: 'ParallaxSection',

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


  <section id="parallax">

    <div class="wave">
      <img src="../assets/images/wave.svg" alt="wave">
    </div>


    <div class="works d-flex justify-content-around align-items-center">

      <div v-for="(element, index) in store.works" :key="index">
        <SingleCard :card="element"/>
      </div>

    </div>

    <div class="wave">
      <img src="../assets/images/wave2.svg" alt="wave">
    </div>
    
  </section>
 

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    #parallax{

    background-image: url(../assets/images/home-244125289.jpg);
    background-size: cover;
    background-attachment: fixed;


        .wave{
            height: 300px;
            width: 100%;
        }

        .works{
            height: 100%;
            width: 80%;
            margin: 0 auto;
        }

    }

</style>