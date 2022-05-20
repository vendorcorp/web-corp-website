<template>
  <div class="main">
    <h1>Tickets</h1>
    <hr>

    <div class="centerItems">
      <b-card
        v-for="i in cards"
        :key="i.img"
        :title="i.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        class="card" 
        @click="triggerAlert(i.title)">
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Tickets',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      cards:[
        {img:"1", title:"Dev WRLD", page:""},
        {img:"2", title:"Interesting Event #927392", page:""},
        {img:"3", title:"Golf Tournament", page:""},
        {img:"4", title:"Reducing Developer Schlim Schlam", page:""},
      ],
    }
  },

  mounted() {
    


  },

  methods: {
    openPage: function(e) {
      this.$router.push("/"+e);
    },

    triggerAlert: function(e){
      alert('Ticket '+e+' Selected!')
    }




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  text-align: center;
  padding: 2vw;
}

.centerItems{
  align-items: stretch !important;
}

.card{
  width: 15vw;
  cursor: pointer;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);

}







</style>
