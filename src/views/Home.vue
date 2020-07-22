<template>
  <div class="home container-fluid border">
     <div class="row m-0 p-2">
       <div class="col-lg-8 col-12 row border m-0 mb-2">
         <div class="col-12 p-0">
           <AudioAnalyzer></AudioAnalyzer>
         </div>
         <Formulario></Formulario>
       </div>
       <div class="col-lg-4 col-12 row border m-0">
         <List></List>
         <List></List>

       </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioAnalyzer from '@/components/Audioanalyzer.vue'
import Formulario from '@/components/Formulario.vue'
import List from '@/components/Listsong.vue'
export default {
  name: 'Home',
  components: {
    AudioAnalyzer,
    Formulario,
    List
  }
}
</script>
