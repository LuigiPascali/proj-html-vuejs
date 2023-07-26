<script>


    export default {

        name: 'RecentWorkSection',
        
        components: {

        },
    };

</script>

<template>

    <section id="recent_work">
  
        <h5 class="section-title mt-3">Explore Recent Work</h5>

        <p class="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
        </p>
      
        <div class="work_foto d-flex justify-content-center gap-4">

            <div class="img_container">
                <img src="../assets/images/project2-featured-15013609-400x400.jpg" alt="project1">
            </div>
            <div class="img_container">
                <img src="../assets/images/project1-featured-294276386-400x400.jpg" alt="project1">
            </div>
            <div class="img_container mb-5">
                <img src="../assets/images/project3-featured-189023420-400x400.jpg" alt="project1">
            </div>
        
        </div>

        <div class="divider">
            <span class="wiew_projects mt-3">VIEW ALL PROJECTS</span>
        </div>

    </section>

</template>
  
<style scoped lang="scss">

    @use '../scss/main.scss'as * ;
    @use '../scss/partials/variables' as *;
    
    #recent_work{
        text-align: center;
        padding-bottom: 100px;
            .work-foto{
        
                .img_container{
                    width: 300px;
                    padding-bottom: 50px;
            
                    
                    &:first-child, &:last-child {
                        border-bottom: 2px solid rgb(244, 244, 244);
                    }
                    img{
                        width: 100%;
                    }
                }
            }
            .wiew_projects{
                color: rgb(161, 161, 161);
                cursor: pointer;

                &:hover{
                    color: $color-primary;
                }
            }
    }
  
</style>