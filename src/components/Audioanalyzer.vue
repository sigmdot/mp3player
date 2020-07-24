<template>
  <div>
    <div id="mp3">
      <audio src id="audio"></audio>
    </div>
    <div class="col-12 p-0 border sizeRe">
      <div class="row justify-content-center m-0 h-100">
        <Button icono="skip-backward-fill" @click="atras" :disabled="disabled" class="border-right"></Button>
        <Button icono="play-fill" @click="play" class="border-right"></Button>
        <Button icono="skip-forward-fill" @click="adelante" class="border-right"></Button>
        <Button :icono="heart" @click="like" class="border-right"></Button>
        <Button icono="shuffle" @click="aleatorio"></Button>
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
      heart:"heart-fill"
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