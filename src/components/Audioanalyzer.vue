<template>
<div>
  <div id="mp3">
    <audio src="../assets/music/1.mp3" id="audio"></audio>
  </div>
  <div class="col-12 p-0 border">
    <div class="row justify-content-center">
      <div class="col text-center"> <button> jajaj </button> </div>
      <div class="col">asd</div>
      <div class="col">sda</div>
      <div class="col">dfs</div>
      <div class="col">asd</div>
    </div>
  </div>
  </div>
</template>

<script>

import AudioMotionAnalyzer from "audiomotion-analyzer";

export default {
    name:'AudioAnalyzer',
    mounted(){
        const sizelol = document.getElementById('mp3').style.width;
        console.log(sizelol);
        const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("mp3"),
      {
        source: document.getElementById("audio"),
        gradient:'classic',
        showLeds:true,
        smoothing:0.9,
        mode:6,
        height:0,
        width:0

      })
      console.log(audioMotion)
    }
}
</script>

<style>
canvas{
  width: 100% !important;
  height: 300px !important;
}
</style>