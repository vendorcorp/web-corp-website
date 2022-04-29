<template>
  <div id="main">
    <img class="logo" :src="logo"/>
    <!-- We could utilize tensorflow in this app as an ML framework to identify certain body motions.
        Left arm out and right arm out for example. -->
    <video id="videoFeed" autoplay></video>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TensorflowTrainer',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      logo:"/img/vendor-corp-logo-primary.png",

    }
  },
  created() {
  
  },

  mounted() {

    window.addEventListener('keydown', (e) => {
      if(e.key == "ArrowRight" || e.key == "ArrowLeft" ){
        this.getUserInput(e.key)
      }
      
    });

    

    this.startVideoFeed();
  },


  methods: {
    openPage: function(e) {
      this.$router.push("/"+e);
    },


    getUserInput: function(key){
      // console.log(key)
      switch(key){
        case 'ArrowLeft':
          
        break;
        case 'ArrowRight':
          
        break;
      }
    },

    startVideoFeed: async function(){
      var video = document.getElementById('videoFeed');

      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        await navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
          video.srcObject = stream;
          video.play();
        }) //sound:true
      }
      // https://www.youtube.com/watch?v=nhX9EUGIZ6o

      
      const resp = await axios.post('https://httpbin.org/post', { hello: 'world' })
      console.log(resp.data.json)
      // setInterval(function(){
      //   axios.post()
      // }, 100);
    }


  },

  beforeRouteLeave (to, from, next) {
    //Turn off camera
    var video = document.getElementById('videoFeed');
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks.forEach(track => track.stop())
    next();
  },

   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
  text-align: center;
  /* padding: 2vw; */
  background-color: transparent;
  transition: background-color .3s ease-out;
}

#videoFeed{
  /* position: fixed;
  left:10px;
  bottom: 10px; */
  width: 50vw;
  margin: 10px auto;
}

</style>
