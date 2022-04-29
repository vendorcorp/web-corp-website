<template>
  <div id="app">
    <Menu/>
    <router-view class="router-view"/>
    <Footer :copyright="copyrightItem"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data(){
    return{
      copyrightItem: "Copyright @ Sonatype 2022"
    }
  },
  created() {
    this.$root.$on('goHome', this.$router.push('/'));
  },

  mounted(){
    
  },

  methods:{



  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image:
    linear-gradient(to bottom, rgb(255, 255, 255), rgb(196, 212, 255)); 

  /* border-top: 5px solid rgb(20, 20, 20); */
  /* padding-bottom:100px; */
  margin: 0; 
  height: 100vh; 
  overflow: hidden;
}

a{
  cursor: pointer;
}

h1,h2,h3{
  all: none;
  font-weight: 100;
  letter-spacing: 1px;
  color: black;
  margin: 30px;
}

/* .router-view {
  margin-top: 30px;
} */

.main{
  text-align: center;
  padding: 2vw;
}

.logo{
  width: 12vw;
  display: block;
  margin: 15px auto;
  cursor: pointer;
  /* margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px; */

}

.centerItems{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.returnToHomeButton{
  position: fixed;
  left: 10px;
  top: 10px;
  cursor: pointer;
}





</style>
