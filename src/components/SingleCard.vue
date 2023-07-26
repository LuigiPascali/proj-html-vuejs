<script>

    import 'bootstrap-icons/font/bootstrap-icons.css';

    export default {

        props: {
            card: Object,
        },

    };

</script>

<template>

    <div class="my_card">

        <div class="image" v-html="card.foto"></div>

        <h5 class="mt-3 mb-3">
           {{ card.title }}
        </h5>

        <small v-if="card.data">
            {{ card.data }}
        </small>

        <p class="mt-3 mb-3">
            {{ card.content }}
        </p>

    </div>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;
    @use '../scss/partials/singleCard' as *;

</style>