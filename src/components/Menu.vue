<template>
  <div class="menu">
    <b-dropdown id="dropdown-right" text="Menu" right variant="primary" class="m-2">
      
      <b-dropdown-item @click="openPage('')">Home</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item @click="openPage('Products')">Products</b-dropdown-item>
      <b-dropdown-item @click="openPage('Company')">Company</b-dropdown-item>
      <b-dropdown-item @click="openPage('Tickets')">Tickets</b-dropdown-item>
      <b-dropdown-item @click="openPage('Venues')">Venues</b-dropdown-item>

      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="openPage('About')">About</b-dropdown-item>
      <b-dropdown-item @click="openPage('Press')">Press</b-dropdown-item>
      <b-dropdown-item @click="openPage('Contact')">Contact</b-dropdown-item>
    </b-dropdown>

    <!-- <b-dropdown variant="primary" class="dropdown" >
      <template #button-content id="dropdown-right">
        <b-icon icon="grid3x3-gap-fill" aria-hidden="true"></b-icon> 
      </template>
      <b-dropdown-item-button>Products</b-dropdown-item-button>
      <b-dropdown-item-button>Company</b-dropdown-item-button>
      <b-dropdown-item-button>Tickets</b-dropdown-item-button>
      
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>About</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
  
    </b-dropdown> -->

  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  },

  data(){
    return{
      
    }
  },

  mounted() {
    
  },

  methods: {
    openPage: function(e) {
      // console.log(e)
      this.$router.push('/'+e);
    }
  


  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  position: absolute;
  top: 0;
  right:0;
  /* width: 100vw;
  background-color: white;
  color: white;

  display: flex;
  justify-content: center;
  flex-wrap: nowrap; */
  /* flex-direction: column;  */
}

.dropdown{
  margin: 8px
}












</style>
