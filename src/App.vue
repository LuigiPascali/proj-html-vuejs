<script>

  import { store } from './store';

  import HeaderComponent from './components/HeaderComponent.vue';
  import HeroComponent from './components/HeroComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  

  export default {
    components:{
      HeaderComponent,
      HeroComponent,
      MainComponent,
      FooterComponent
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

    <header>

      <HeaderComponent />

    </header>

    <main>

      <HeroComponent />

      <MainComponent />

    </main>

    <footer>

      <FooterComponent />

    </footer>

  </div>

</template>

<style lang="scss">

  @use './scss/main.scss' as *;
  @use './scss/partials/variables' as *;



</style>
