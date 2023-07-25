<script>

    import Navbar from './Navbar.vue';

    export default {

        name: 'HeaderComponent',

        components: {
            Navbar,
        },
    }

</script>

<template>

  <header>
    
    <div class="container d-flex justify-content-between align-items-center">

        <div class="logo">
            <img src="../assets/images/construction_logo.png" alt="logo" class="img-fluid">
        </div>

        <div class="menu">
            <Navbar />
        </div>

    </div>

  </header>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

    header{
    height: $h-header;
        .container{
            height: 100%;
            .logo{
            width: 150px;
            }
        }
    }

</style>