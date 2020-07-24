<template>
  <li class="list-group-item ">
    <div class="col-12 p-0 row m-0 " @click="seleccionar">
      <div class="col-12 p-0" :class="{scrolll : seleccionadix == index}">
        <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem quas amet magnam necessitatibus quisquam ad porro dolorem ipsum consequatur, in vel. Atque quasi ipsa iste consequuntur? Fugiat, ipsam quod.</span>
      </div>
      <div class="col-6 p-0 " style="overflow: hidden !important;
    white-space: nowrap !important;"> Autor </div>
      <div class="col-6 p-0 "> Quien lo publico</div>
    </div>
  </li>
</template>

<script>
export default {
  name:"ListItem",
  methods:{
    seleccionar(){
      this.$emit('seleccionado');
      console.log("emitido 1")
    }
  },
  props:{
    seleccionadix:Number,index:Number
  }
}
</script>

<style>
li{
    overflow: hidden !important;
    white-space: nowrap !important;
}
.list-group-item{
    max-height: 275px !important;
    max-width: 100% !important;
}
.scrolll{
  padding-left: 100%;
  animation: scroll 11s infinite linear;
}
@keyframes scroll{
  0%{
    -webkit-transform: translate(0,0);
  }
  100%{
    -webkit-transform: translate(-100%,0);

  }
}
</style>