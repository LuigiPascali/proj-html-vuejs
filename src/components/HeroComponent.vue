<script>

    import { store } from '../store';

    export default {

        name: 'HeroComponent',

        components: {
        
        },

        data() {
            return {
            store,
            selectedIndex: null,
            };
        },

    };

</script>

<template>

    <div class="jumbotron d-flex justify-content-center align-items-center">

        <div class="info">

            <div class="square">
        
                <i class="bi bi-collection-play-fill"></i>

                <div>
                    Demos
                </div>

            </div>

            <div class="square">

                <div class="green">

                    <span>$</span>
                    <span>39</span>

                </div>

                <div>
                    On Sale
                </div>

            </div>

        </div>

        <div class="container-buttons">
      
            <h1>BUILDING INSPRING SPACES</h1>

            <p>We Build Ispiring Residential &amp; Commercial Spaces</p>

            <div class="jumbobuttons">
                <button type="button" class="gray big">EXPLORE RECENT WORK</button>
                <button type="button" class="yellow big">GET A QUOTE TODAY</button>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    .jumbotron{
        position: relative;
        height: 500px;
        width: 100%;
        color: white;
        background-image: url('../assets/images/home-slider-62528242.jpg');
        background-size: cover;

        .info{
            position: absolute;
            top: 20px;
            right: 20px;
            .square{
                height: 50px;
                width: 50px;
                padding: 5px;
                cursor: pointer;
                border-radius: 5px;
                margin-bottom: 5px;
                background-color: #fff;
                color: black;
                font-size: 10px;
                text-align: center;

                i, .green{
                font-size: 1.125rem;
                    span:first-child{
                        font-size: 10px;
                        vertical-align: top;
                    }
                }
            }
        }

        .container-buttons{
        text-align: center;
            h1{
                font-weight: bold;
            }
            p{
                color: $color-primary;
                font-weight: lighter;
                font-size: 1.125rem;
            }
            button{
                margin: 0 10px;
            }
        }
    }

</style>