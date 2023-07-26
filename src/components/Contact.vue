<script>

    import 'bootstrap-icons/font/bootstrap-icons.css';

    export default {

        name: 'Contact',

        props: {
            contact: Object,
        },

    };

</script>

<template>

    <div class="d-flex contact_container">

        <div v-html="contact.img"></div>

        <div>

            <div v-if="contact.nome">{{ contact.nome }}</div>

            <div>{{ contact.valore }}</div>

        </div>  

    </div>

</template>

<style scoped lang="scss">
@use '../scss/main.scss' as *;
@use '../scss/partials/variables' as *;


.contact_container{
    gap: 15px;
    font-size: .75rem;
}
 
</style>