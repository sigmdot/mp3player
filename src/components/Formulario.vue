<template>
  <div class="col-12 mt-3 p-0">
    <button v-b-toggle.collapse-1 class="btn text-light w-100 loljaja ">¿Quieres dejar tú marca?</button>
    <b-collapse id="collapse-1" class="mt-2">
      <form class="container border p-3 jiojio">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="nombreCancion"
            placeholder="Nombre de tú canción"
          />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="autorCancion" placeholder="Autor" />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="apodoQuien"
            placeholder="Apodo de quien la publico"
          />
        </div>
        <div class="form-group">
          <input type="file" class="form-control-file" id="audiofile" hidden="hidden" @change="previewFiles" accept="audio/*" />
          <button type="button" class="btn btn-secondary" @click="abrirfile"> <b-icon icon="music-note-beamed"> </b-icon> Sube tú canción acá </button>
          
        </div>
        <div class="text-right">
          <button type="button" class="btn btn-primary" :disabled="!src">Subela subela!</button>
        </div>
      </form>
     
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data(){
    return{
      files: null,
      src:null
    }
  },
  computed:{
    
  },
  methods:{
    abrirfile(){
      const audioFile = document.getElementById("audiofile");

      console.log('xd',audioFile.value);

      audioFile.click();
    },
    previewFiles(events){
      console.log(events.target.files[0].name.split("."));
      var lol = events.target.files[0].name.split(".");
      console.log(lol[lol.length-1]);
      var reader = new FileReader();
      reader.readAsDataURL(events.target.files[0]);
      reader.onload = e=> {
        this.src = e.target.result;
        console.log(this.src)
      }
      this.files = events.target.files[0];
    }
  }
};
</script>

<style>

.jiojio{
  background-color: #BCA000;
}
</style>