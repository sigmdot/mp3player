<template>
  <div
    class="col text-center border p-0 h-100 w-100 align-center"
    style="background:black;color:white;"
  >
    <b-icon class="col-12 p-0 heightlol" :icon="icono" style="color:white"></b-icon>
  </div>
</template>

<script>
export default {
    name:"Button",
    props:{
        icono:String
    }
};
</script>

<style>
.heightlol{
    height: 90%;
}
</style>