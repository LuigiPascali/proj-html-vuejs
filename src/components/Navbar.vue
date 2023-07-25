<script>

    import { store } from '../store';
    import NavbarElement from './NavbarElement.vue';

    export default {
    name: 'AppMenu',
    components: {
        NavbarElement,
    },
    data() {
        return {
        store,
        selectedIndex: null,
        };
    },

        methods: {

            selectItem(idx) {
                if (store.navbarVoices[idx].selected) {
                    store.navbarVoices[idx].selected = false;
                    
                } else {
                
                if (store.selectedIndex !== null) {
                    store.navbarVoices[store.selectedIndex].selected = false;
                }
                store.navbarVoices[idx].selected = true;
                store.selectedIndex = idx; 
                }
            },
        },

    };

</script>

<template>

    <div class="menu">

        <ul class="orizontal">

            <li v-for="(voice, index) in store.navbarVoices" :key="index">
                <NavbarElement :voce="voice.nome" :i="index" @selected="selectItem"/>
            </li>
            <li>
                <button type="button" class="yellow">get quote</button>
            </li>

        </ul>

    </div>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    .menu{
        height: $h-header;
        .orizontal{
            height: 100%;
            font-size: 12px;
            color: gray;
            li{

                height: 100%;
                display: flex;
                align-items: center;
                position: relative;
                a{
                    color: $color-primary;

                }

            }
        }
    }

</style>