<template>
  <div class="main">
    <img class="logo" @click="$root.$emit('goHome'); " :src="logo"/>

    <!-- ../../public/img/sonatype_logo.png -->
    <!-- <b-icon class="settingsButton" icon="gear-fill" font-scale="2" variant="dark"></b-icon> -->

    <div class="centerItems">
      <b-card
        v-for="i in cards"
        :key="i.img"
        :title="i.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        class="card" 
        @click="openPage(i.page)">

      </b-card>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'test',
  components: {

  },
  data(){
    return{
      cards:[
        {img:"1", title:"Vulnerability Sort", page:"vulnerabilitysort"},
        {img:"2", title:"other", page:""},
        {img:"3", title:"other2", page:""},
      ],
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

.logo{
  width: 12vw;
  display: block;
  margin: 15px auto;
  /* margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px; */

}

.card{
  width: 20vw;
  cursor: pointer;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}


</style>
