<script>

    import 'bootstrap-icons/font/bootstrap-icons.css';
    import { store } from '../store';

    export default {

        name: 'TweetSection',

        data () {
            return {
                store,
            }
        },

    };

</script>

<template>

    <section>

        <h4 class="px-5">
            Latest Tweets
        </h4>

        <div class="container d-flex">

            <div class="logo_container">

                <div class="logo_post">
                    <img :src="store.tweets.logoURL" :alt="store.tweets.nome">
                </div>
                
            </div>

            <div class="post">

                <i class="bi bi-twitter"></i>
                <i class="bi bi-heart"></i>
                <i class="bi bi-box-arrow-right"></i>
                <i class="h">
                    22h
                </i>

                <h5>
                    {{ store.tweets.nome }}
                </h5>

                <h6>
                    {{ store.tweets.nomeAsh }}
                </h6>

                <p v-html="store.tweets.post">

                </p>

                <div class="attachment">
                    <img :src="store.tweets.imageURL" :alt="store.tweets.nome" class="img-fluid">
                </div>

            </div>
            
        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    section{
    color: white;
        .logo_post{
                height: 30px;
                width: 30px;
                border-radius: 50%;
                overflow: hidden;
                background-color: white;
                margin-right: 10px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        .post{
            padding-bottom: 30px;
            position: relative;
            i{
                cursor: pointer;
                position: absolute;
                filter: opacity(0.5);
                &.bi-twitter{
                    top: 0;
                    right: 0;
                }
                &.bi-heart, &.bi-box-arrow-right, &.h{
                    bottom: 0;
                }
                &.bi-heart{
                    left: 0;
                }
                &.bi-box-arrow-right{
                    left: 30px;
                }
                &.h{
                    right: 0;
                    text-decoration: underline;
                }
                &:hover{
                    color: $color-primary;
                    filter: opacity(1);
                }
            }
            
            h5,h6{
                font-size: 15px;
                font-weight: bold;
                margin-bottom: -1px;
            }
            h6{
                font-weight: lighter;
            }
            p{
                font-size: 14px;
            }
        }
    }

</style>