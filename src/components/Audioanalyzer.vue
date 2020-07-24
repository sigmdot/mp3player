<template>
  <div>
    <div id="mp3">
      <audio src="https://firebasestorage.googleapis.com/v0/b/mp3player-9f953.appspot.com/o/miplaylist%2F08%20-%20Jarabe%20para%20la%20tos.mp3?alt=media&token=00b6e474-92e8-43ec-b694-7c8539678ffd" id="audio" crossorigin="anonymous"></audio>
    </div>
    <div class="col-12 p-0 border sizeRe">
      <div class="row justify-content-center m-0 h-100">
        <Button icono="skip-backward-fill" @click.native="atras" class="border-right"></Button>
        <Button icono="play-fill" @click.native="play" class="border-right"></Button>
        <Button icono="skip-forward-fill" @click.native="adelante" class="border-right"></Button>
        <Button :icono="heart" @click.native="like" class="border-right"></Button>
        <Button icono="shuffle" @click.native="aleatorio"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import AudioMotionAnalyzer from "audiomotion-analyzer";
import Button from "@/components/Button.vue";
export default {
  name: "AudioAnalyzer",
  components: {
    Button,
  },
  data(){
    return{
      heart:"heart-fill",
      disabled:false
    }
  },
  mounted() {
    const sizelol = document.getElementById("mp3").style.width;
    console.log(sizelol);
    const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("mp3"),
      {
        source: document.getElementById("audio"),
        gradient: "classic",
        showLeds: true,
        smoothing: 0.9,
        mode: 6,
        height: 0,
        width: 0,
      }
    );
    console.log(audioMotion);
  },
  methods:{
    atras(){
      console.log('Atras');
    },
    play(){
      console.log('Play!');
      var x = document.getElementById("audio");
      if( x.paused){
        x.play();
      }
      else{
        x.pause();
      }
    },
    adelante(){
      console.log('Adelante');
    },
    like(){
      console.log('Like');
    },
    aleatorio(){
      console.log('Aleatorio');
    }
  }
};
</script>

<style>
canvas {
  width: 100% !important;
  height: 300px !important;
}
.sizeRe {
  height: 50px !important;
}
#mp3 {
  height: 600px;
}
@media (min-width: 768px) {
  canvas {
    height: 600px !important;
  }
}
@media (max-width:767px){
  #mp3{
    height: 300px;
  }
}
</style>