<template>
  <div class="main">
    <h1>Venues</h1>
    <hr>

    <Carousel/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo veritatis eaque. Sapiente similique odit harum, error reprehenderit labore itaque repellat officia impedit inventore eos explicabo aperiam possimus dolorem necessitatibus!</p>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Venues',
  props: {
    
  },
  components: {
    Carousel
  },
  data(){
    return{
      
    }
  },

  mounted() {
    


  },

  methods: {
    openPage: function(e) {
      this.$router.push("/"+e);
    },




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  text-align: center;
  padding: 2vw;
}









</style>
