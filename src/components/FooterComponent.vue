<script>

    import TweetSection from './TweetSection.vue';
    import ContactSection from './ContactSection.vue'

    export default {

        name: 'FooterComponent',

        components: {
            TweetSection,
            ContactSection
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

            <ContactSection />

            <section id="where">

                <h4>
                    find us
                </h4>

                <div class="map">
                    <img src="../assets/images/construction_map_pin.png" alt="map" class="img-fluid">
                </div>
                
            </section>

        </div>

        <div class="footer_bottom align-items-center text-uppercase">

            <div class="container d-flex justify-content-between align-items-center">

                <div class="footer_info">
                    copyright 2023 -2024 costruction theme by <strong>boolean theme</strong> | all rhights reserved | powered by <strong>vue js</strong>
                </div>

                <div class="social_logos_container d-flex">

                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>

                </div>

            </div>

        </div>

    </footer>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

    footer {
        padding-top: 50px;
        background-color: $color-secondary;

        .container {
            section {
                padding: 30px;
                width: calc(100% / 4);
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

        .footer_bottom {
            padding: 20px 0;
            margin-top: 50px;
            color: grey;
            background-color: rgb(17, 17, 17);
            font-size: .625rem;    
            
                .social_logos_container {
                    cursor: pointer;
                    gap: 10px;
                    font-size: .875rem;
                }
        }

    }
 
</style>