<script>

    export default {

        name: 'PartnersSection',

        components: {

        },

        data () {

            return {
                imageURL: [
                '/home-logo1-219096700-320x202.png',
                '/home-logo2-219096700-320x202.png',
                '/home-logo9-219096700-320x202.png',
                '/home-logo10-219096700-320x202.png',
                '/home-logo11-219096700-320x202.png'
                ]
            }

        },
    };

</script>

<template>

    <section id="partners">

        <h5 class="section-title">
            Trusted Partners
        </h5>

        <p class="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
        </p>

        <div class="logos_container d-flex justify-content-center gap-4">
            <div class="single_logo" v-for="(item, index) in this.imageURL" :key="index">
                <img :src="item" alt="logo">
            </div>
        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;

    #partners{

    text-align: center;
    padding-top: 50px;
        .logos_container{
            width: 70%;
            margin: 0 auto;

            .single_logo{
                width: 300px;
                padding-bottom: 50px;

                    img{
                        width: 100%;
                    }
            }
        }
    }

</style>