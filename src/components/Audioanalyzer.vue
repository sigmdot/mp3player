<template>
  <div>
    <div id="mp3">
      <audio
        :src="source"
        id="audio"
        crossorigin="anonymous"
      ></audio>
    </div>
    <Button @action="accion"></Button>
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
  data() {
    return {
      heart: "heart-fill",
      disabled: false,
      colors: [
        "classic",
        "Relay",
        "rainbow",
        "Mini",
        "Learning",
        "Venice",
        "Feel",
        "Honey",
        "Rose",
        "Easy"
      ],
      audioMotionx: null,
    };
  },
  mounted() {
    console.log(this.source);
    const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("mp3"),
      {
        source: document.getElementById("audio"),
        showPeaks: true,
        showScale: false,
        showLeds: true,
        smoothing: 0.9,
        mode: 6,
        height: 0,
        width: 0,
      }
    );
    console.log(audioMotion);
    audioMotion.registerGradient("Relay", {
      colorStops: ["#3A1C71", "#D76D77", "#FFAF7B"],
      dir: "h",
    });
    audioMotion.registerGradient("Mini", {
      colorStops: ["#30E8BF", "#FF8235"],
      dir: "h",
    });
    audioMotion.registerGradient("Learning", {
      dir: "h",
      colorStops: ["#F7971E", "#FFD200"],
    });
    audioMotion.registerGradient("Venice", {
      dir: "h",
      colorStops: ["#6190E8", "#A7BFE8"],
    });
    audioMotion.registerGradient("Feel", {
      dir: "h",
      colorStops: ["#4568DC", "#B06AB3"],
    });
    audioMotion.registerGradient("Honey", {
      dir: "h",
      colorStops: ["#43C6AC", "#F8FFAE"],
    });
    audioMotion.registerGradient("Rose",{
      dir:"h",
      colorStops:["#E8CBC0","#636FA4"]
    });
    audioMotion.registerGradient("Easy",{
      dir:"h",
      colorStops:["#DCE35B","#45B649"]
    })
    this.audioMotionx = audioMotion;
  },
  methods: {
    accion(event) {
      if (event == "play") {
        var x = document.getElementById("audio");
        if (x.paused) {
          x.play();
        } else {
          x.pause();
        }
      }
      if (event == "atras") {
        console.log("oye culiao era pa atrás");
      }
      if (event == "adelante") {
        console.log("lol era pa adelante xd weon down");
      }
      if (event == "aleatorio") {
        const numero = Math.floor(Math.random() * this.colors.length);
        console.log(numero);
        this.audioMotionx.setOptions({
          gradient: this.colors[numero],
        });
      }
    },
  } ,
  props:{
    source:String
  }
};
</script>

<style>
canvas {
  width: 100% !important;
  height: 300px !important;
  -webkit-border-top-left-radius: 12px;
  -webkit-border-top-right-radius: 12px;
  -moz-border-radius-topleft: 12px;
  -moz-border-radius-topright: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
@media (max-width: 767px) {
  #mp3 {
    height: 300px;
  }
}
</style>