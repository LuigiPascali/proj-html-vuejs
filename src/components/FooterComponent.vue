<script>

    import TweetSection from './TweetSection.vue';

    export default {

        name: 'FooterComponent',

        components: {
            TweetSection,
        },
    }

</script>

<template>

    <footer>

        <div class="container d-flex justify-content-beetween">

            <section id="learn_more">

                <div class="logo_container">

                    <img class="img-fluid" src="../assets/images/footer-logo.png" alt="footer_logo">

                </div>

                <p>
                    We are specialists in the construction of unique and exclusive properties. Our works inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.
                </p>

                <button type="button" class="yellow">
                    Learn More
                </button>

            </section>



            <TweetSection />

        </div>

        

    </footer>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

    footer {
        padding-top: 50px;
        border-top: 20px solid rgb(63, 63, 63);
        background-color: $color-secondary;

        .container {
            section {
                width: calc((100% / 4) - 30px);
            }
        }

        #learn_more {
            color: gray;
            font-size: .875rem;

            .logo {
                width: 60%;
                margin-bottom: 20px;
            }
        }

        .map{
            cursor: pointer;
        }

    }

    
</style>