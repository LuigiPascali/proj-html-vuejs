<script>

    export default {

        name: 'BuildingSection',

        components: {

        },
    };

</script>

<template>

    <section id="building">

        <div class="container d-flex align-items-center">

            <div class="text_area">

                <h5>
                    Building Inspiring Spaces
                </h5>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
                </p>

            </div>

            <div class="call_to_action">

                <button type="button" class="yellow big">
                    Get a free quote
                </button>

                <div>
                    <small>
                        Only takes a few second!
                    </small>
                </div>

            </div>

        </div>

    </section>

</template>

<style scoped lang="scss">

    @use '../scss/main.scss' as *;
    @use '../scss/partials/variables' as *;

    #building {
        background-image: url(../assets/images/about-call-to-action-57862405.jpg);
        background-size: cover;
        background-attachment: fixed;
        padding: 100px 0;
        color: white;
            .container {
                height: 100%;
                width: 70%;
                .text_area {
                    max-width: 60%;
                    text-align: left;

                    h5 {
                        position: relative;
                        margin-bottom: 30px;
                        padding-bottom: 30px;

                        &::after {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 25%;
                            height: 2px;
                            background-color: $color-primary;
                        }
                    }
                }

                .call_to_action {
                    width: 40%;
                    text-align: center;

                    button {
                        padding: 15px 30px;
                        margin-bottom: 10px;
                        font-size: 1.25rem;
                    }
                }
            }
        }

</style>