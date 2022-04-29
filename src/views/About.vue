<template>
  <div class="main">
    <h1>About Vendor Corp</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo veritatis eaque. Sapiente similique odit harum, error reprehenderit labore itaque repellat officia impedit inventore eos explicabo aperiam possimus dolorem necessitatibus!</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    
  },
  components: {

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
