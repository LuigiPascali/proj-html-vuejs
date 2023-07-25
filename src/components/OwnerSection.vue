<script>

    import { store } from '../store';

    export default {

        name: 'SectionOwners',

        components: {

        },

        data() {
            return {
                store,
            };
        },
    };

</script>

<template>

    <section id="owners">

        <div class="wave">
            <img src="../assets/images/wave3.svg" alt="wave">
        </div>

        <div class="quote" @click="store.ownerQuote = !store.ownerQuote">

            <h5 class="section-title">
                Our Home Owners Say
            </h5>

            <div class="first_owner" v-if="store.ownerQuote">
       
                <div class="img_container">
                    <img src="../assets/images/home-testimonial-113165296.jpg" alt="owner_img">
                </div>
            
                <blockquote>
                    <em>&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam error, ullam vitae iure harum eligendi sapiente veritatis ex a quia pariatur corporis. Sunt facilis nobis perspiciatis repudiandae delectus numquam qui!.&quot;</em>
                    <br>
                    <br>
                    <cite class="owner_name">HARRY SMITH - NEW HOME OWNER</cite>
                </blockquote>

                <div class="selector">
                    <i class="bi bi-circle-fill"></i>
                    <i class="bi bi-circle"></i>
                </div>

            </div>

            <div class="second_owner" v-else>
            
                <div class="img_container">
                    <img src="../assets/images/home-testimonial-84268399.jpg" alt="owner_image">
                </div>
            
                <blockquote>
                    <em>&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptate autem ullam quia voluptates earum. Illum alias repellat ducimus at? &quot;</em>
                    <br>
                    <br>
                    <cite class="owner_name"> TIZIO INCOGNITO - OLD OWNER </cite>
                </blockquote>

                <div class="selector">
                    <i class="bi bi-circle"></i>
                    <i class="bi bi-circle-fill"></i>
                </div>

            </div>

        </div>
    
        <div class="wave">
            <img src="../assets/images/wave4.svg" alt="wave">
        </div>
        
    </section>
   
  
</template>
  
<style scoped lang="scss">

  @use '../scss/main.scss'as * ;
  @use '../scss/partials/variables' as *;
  
  #owners{
    background-image: url(../assets/images/home-parallax-144609983.jpg);
    background-size: cover;
    background-attachment: fixed;
  
        .wave{
            height: 300px;
            width: 100%;
        }
        .quote{
            cursor: pointer;
            text-align: center;
            color: white;
            .img_container{
                height: 150px;
                width: 150px;
                margin: 0 auto;
                margin-bottom: 20px;
                border-radius: 50%;
                    img{
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                    }
            }
            blockquote{
                margin: 0 auto;
                max-width: 40%;
                font-weight: bolder;
                font-size: 1.25rem;
            }
            .selector{
                margin-top: 40px;
                font-size: .875rem;
        
                    i{
                        margin: 0 5px;
                    }
            }
        }
  
    }
  
</style>