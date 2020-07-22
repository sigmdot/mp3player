<template>
  <div class="col-12 p-0">
    <div v-b-toggle="'songs'" class="btn btn-outline-secondary p-2 w-100">
      <div class="col-12 row m-0 p-0">
        <div class="col-11 p-0 fontsize">Mi playlist!</div>
        <div class="col-1 p-0 text-center">
          <b-icon icon="caret-down-fill"></b-icon>
        </div>
      </div>
    </div>
    <b-collapse id="songs" class="mt-2">
      <div class="container">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style>
.btn {
  font-size: 1.5rem !important;
}
</style>