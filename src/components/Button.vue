<template>
 <div class="col-12 p-0">
      <div class="btn-group w-100" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-dark rounded-0" @click="atras"> <b-icon icon="skip-backward-fill"></b-icon> </button>
        <button type="button" class="btn btn-dark" @click="play"><b-icon icon="play-fill"></b-icon></button>
        <button type="button" class="btn btn-dark" @click="adelante"><b-icon icon="skip-forward-fill"></b-icon></button>
        <button type="button" class="btn btn-dark" @click="aleatorio"><b-icon icon="shuffle"></b-icon></button>  
      </div>
    </div>
</template>

<script>
export default {
    name:"Button",
    props:{
        icono:String
    },
    methods:{
      play(){
       
        this.$emit('action',"play");
      },
      atras(){
        this.$emit('action','atras');
      },
      adelante(){
        this.$emit('action','adelante');
      },
      aleatorio(){
        this.$emit('action','aleatorio')
      }
    }
};
</script>

<style>
.heightlol{
    height: 90%;
}
</style>