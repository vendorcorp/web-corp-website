<template>
  <div class="menu">
    

  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    
  },

  data(){
    return{
      
    }
  },

  mounted() {
    
  },

  methods: {

    close: function(){
      this.$emit('closeSettings');   
    },


    fullReset: function() {
      localStorage.clear();
      window.location.reload()
    },

    replayIntro: function(){
      this.$root.$emit('WelcomeVideo'); 
      // this.$root.$emit('AllComplete'); 
    },

    setAllComplete: function(){
      let complete ={
        Cafeteria: true,
        Calculator: true,
        ClueFinder: true,
        Complete: false,
        Decoder: true,
        FamilyFeud: true,
        HangMan: true,
        PriceQuotes: true,
        RememberThePath: true,
        VRExplorer: true
      };

      this.$store.commit('setAllProgress', complete);
      localStorage.setItem("progress", JSON.stringify(complete));

    },
  


  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pane{
  position: absolute;
  z-index: 100;
  top: 50px;
  right: 10px;
  background: #1c1f22 ;
  /* border: 3px solid black; */
  border-radius: 8px;
  padding:15px;
  overflow:scroll;
  max-height: 300px;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   flex-direction: column; 
}

p{
  color: white;
  text-align: left;
  margin-bottom: 0px;;
}

hr{
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px 0px;
  width: 100%;
}

button{
  margin-top: 15px;
}










</style>
