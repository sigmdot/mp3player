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

.jiojio{
  background-color: #BCA000;
}
</style>