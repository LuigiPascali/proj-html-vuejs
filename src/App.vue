<script>

  import { store } from './store';

  import HeaderComponent from './components/HeaderComponent.vue';
  import HeroComponent from './components/HeroComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import MainComponent from './components/MainComponent.vue';

  export default {
    components:{
      HeaderComponent,
      HeroComponent,
      FooterComponent,
      MainComponent
    },

    data() {
      return {
        store,
      }
    },

  }
  
</script>

<template>

  <div>
    
    <HeaderComponent />

    <HeroComponent />

    <MainComponent />

    <FooterComponent />
    
  </div>

</template>

<style lang="scss">

  @use './scss/main.scss' as *;
  @use './scss/partials/variables' as *;



</style>
