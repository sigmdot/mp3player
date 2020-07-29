<template>
  <div class="col-12 mt-3 p-0">
    <button v-b-toggle.collapse-1 class="btn text-light w-100 loljaja">¿Quieres dejar tú marca?</button>
    <b-collapse id="collapse-1" class="mt-2">
      <form @submit.prevent="subirAporte" class="container border p-3 jiojio">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="nombreCancion"
            placeholder="Nombre de tú canción"
            v-model="dataAporte.nombre"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="autorCancion"
            placeholder="Autor"
            v-model="dataAporte.autor"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="apodoQuien"
            placeholder="Apodo de quien la publico"
            v-model="dataAporte.quien"
          />
        </div>
        <div class="form-group">
          <input
            type="file"
            class="form-control-file"
            id="audiofile"
            hidden="hidden"
            @change="previewFiles"
            accept="mp3/ogg/m4a/*"
          />
          <div class="form-group">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                v-bind:style="{width: progress +'%'}"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button type="button" class="btn btn-secondary" @click="abrirfile">
            <b-icon icon="music-note-beamed"></b-icon>Sube tú canción acá
          </button>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary" :disabled="!files">Subela subela!</button>
        </div>
      </form>
    </b-collapse>
  </div>
</template>

<script>
import { storage, visitas } from "@/api/firebase.js";
export default {
  name: "Formulario",
  data() {
    return {
      files: null,
      src: null,
      dataAporte: {
        nombre: null,
        autor: null,
        quien: null,
        url: null,
      },
      progress: 0,
    };
  },
  computed: {},
  methods: {
    abrirfile() {
      const audioFile = document.getElementById("audiofile");

      console.log("xd", audioFile.value);

      audioFile.click();
    },
    previewFiles(events) {
      console.log(events.target.files[0].name.split("."));
      var lol = events.target.files[0].name.split(".");
      console.log(lol[lol.length - 1]);
      if (
        lol[lol.length - 1] != "mp3" &&
        lol[lol.length - 1] != "m4a" &&
        lol[lol.length - 1] != "ogg"
      ) {
        alert("No permitimos estos archivos , perdona");
        this.files = null;
        events.target.files[0] = null;
      } else {
        this.files = events.target.files[0];
      }
    },
    subirAporte(event) {
      console.log(event);
      var storageRef = storage.ref("anonimo/" + this.files.name);
      let uploadTask = storageRef.put(this.files);
      var id = null;
      try {
        visitas.add(this.dataAporte).then((docRef) => {
          id = docRef.id;
        });

      } catch (error) {
        alert(error);
      }
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var load = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.progress = load;
        },
        function (error) {
          alert(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            visitas.doc(id).update({
              url: downloadURL,
            });
            alert('Subido');
            event.target.reset();
            this.dataAporte.nombre = this.dataAporte.autor = this.dataAporte.quien = this.dataAporte.url = null;
            this.files = null;
            this.progress = 0;
          });
        }
      );
    },
  },
};
</script>

<style>
.jiojio {
  background-color: #bca000;
}
</style>