<template>
  <div class="footer">
    <div>
      <b>Social Media</b>
      <p>Twitter</p>
      <p>Facebook</p>
      <p>LinkedIn</p>
    </div>
    <div>
      <b>Products</b>
      <p>Buy Tickets</p>
      <p>Roadmap</p>
    </div>
    <div>
      <b>Venues</b>
      <p></p>
    </div>
    <div>
      <b>Company</b>
      <p>About Vendor Corp</p>
      <p>Press Releases</p>
      <p>Contact Us</p>
      <p>Legal</p>
      <p>Headquarters</p>
    </div>
    <div>
      <b>Disclaimers</b>
      <p>Terms of Service</p>
      <p>Privacy</p>
      <p>Event Terms and Conditions</p>
      <p>Do Not Sell My Information</p>
    </div>
    <div>
      <b>Copyright</b>
      <p>{{copyright}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    copyright: String
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
.footer{
  position: absolute;
  bottom: 0;
  right:0;
  width: 100vw;
  background-color: white;
  color: rgb(32, 32, 32);

  display: flex;
  justify-content: center;
  flex-wrap: nowrap; 
  /* flex-direction: column; */
  padding:12px;
}

.footer div{
  margin-right:50px;
}

.dropdown{
  margin: 8px
}

p,b{
  margin:0;
  cursor: pointer;
}

p:hover,b:hover {
  text-decoration: underline;
}













</style>
