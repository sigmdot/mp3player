<template>
  <div class="col-12 p-0 mb-2 yap">
    <div @click="lol" class="btn btn-secondary p-2 w-100">
      <div class="col-12 row m-0 p-0">
        <div class="col-11 p-0 fontsize"> {{nombrePla}} </div>
        <div class="col-1 p-0 text-center">
          <b-icon icon="caret-down-fill"></b-icon>
        </div>
      </div>
    </div>
    <b-collapse v-bind:id="idPla">
      <div class="container">
        <ol class="list-group">
          <ListItem v-for="(cancion,index) in arraySongs" @seleccionado="seleccionarLista(index)" :index="index" :seleccionadix="seleccionado" :key="index"></ListItem>
        </ol>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import ListItem from '@/components/item-list-song.vue'
export default {
  name: "List",
  props:{
    nombrePla:String,
    idPla:String,
    arraySongs:Array
  },
  components:{
    ListItem
  },
  data(){
    return{
      seleccionado:null
    }
  },
  methods:{
    lol(){
      this.$root.$emit('bv::toggle::collapse', this.idPla)
    },
    seleccionarLista(index){
      this.seleccionado = index;
      console.log(this.seleccionado);
      this.$emit('seleccionarDato',index);
      console.log("emitido 2");
    }
  }
};
</script>

<style>
.btn {
  font-size: 1.5rem !important;
}
.col-12{
  height: 100%;
}
</style>