<template>
  <div class="col-12 p-0 mb-2 yap">
    <div @click="lol" class="btn btn-outline-secondary p-2 w-100">
      <div class="col-12 row m-0 p-0">
        <div class="col-11 p-0 fontsize"> {{nombrePla}} </div>
        <div class="col-1 p-0 text-center">
          <b-icon icon="caret-down-fill"></b-icon>
        </div>
      </div>
    </div>
    <b-collapse v-bind:id="idPla" class="mt-2">
      <div class="container">
        <ol class="list-group list-group-flush">
          <ListItem @seleccionado="seleccionarLista(index)"></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>

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
    idPla:String
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
      this.$$emit('seleccionarDato',index);
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