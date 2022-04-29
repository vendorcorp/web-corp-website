<template>
  <div class="main">
    <img class="logo" @click="$root.$emit('goHome'); " :src="logo"/>
    <!-- ../../public/img/sonatype_logo.png -->
    <!-- <b-icon class="settingsButton" icon="gear-fill" font-scale="2" variant="dark"></b-icon> -->

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cupiditate voluptates error ipsam tempore, eaque non voluptatem facere ad odit delectus vel cumque explicabo illo eos ab voluptatum velit illum.</p>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      
      logo:"/img/vendor-corp-logo-primary.png"
    }
  },
  methods:{
    openPage: function(e) {
      // console.log(e)
      this.$router.push('/'+e);
    }
  }
}
</script>

<style scoped>
.main{
  padding-top: 10px;
  /* overflow-x:scroll; */
}






</style>
