<template>
  <div class="col-12 mt-3 p-0">
    <b-button v-b-toggle.collapse-1 variant="primary" class="w-100">¿Quieres dejar tú huella?</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <p class="text-center">Publica tú canción favorita</p>
      <form class="container border p-3">
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
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>
      </form>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Formulario",
};
</script>

<style>
</style>