<script>

    import 'bootstrap-icons/font/bootstrap-icons.css';
    import { store } from '../store';

    import Contact from './Contact.vue';

    export default {

        name: 'ContactSection',

        components: {
            Contact,
        },
        data() {
            return {
                store,
            }
        },
    };

</script>

<template>

  <section>
   
    <h4>contact us today</h4>

    <ul>

      <li v-for="(contatto, index) in store.contacts" :key="index">
        <Contact :contact= "contatto"/>
      </li>

    </ul>
    
  </section>
</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;
    
    section{
    color: rgb(115, 115, 115);

        ul{
            margin: 0;
                li{
                    margin-top: 15px;
                    cursor: pointer;
                        &:hover{
                            color: $color-primary;
                            text-decoration: underline;
                        }
                }
        }
    }

</style>