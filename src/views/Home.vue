<template>
  <div class="home container-fluid border">
     <div class="row m-0 p-2">
       <div class="col-lg-8 col-12 row border m-0">
         <div class="col-12 p-0">
           <AudioAnalyzer></AudioAnalyzer>
         </div>
         <Formulario></Formulario>
       </div>
       <div class="col-lg-4 col-12 row border m-0">
         <div class="col-12">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis. Provident sunt blanditiis accusantium magnam quisquam ex perspiciatis, quos vitae non! Placeat ut mollitia voluptatibus. Iusto nobis dolorum iste facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste numquam accusamus quo vitae, tempora incidunt. Ullam mollitia quos quaerat eligendi ex perferendis repellendus quia? Magni necessitatibus delectus aspernatur quia nisi!</p>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioAnalyzer from '@/components/Audioanalyzer.vue'
import Formulario from '@/components/Formulario.vue'
export default {
  name: 'Home',
  components: {
    AudioAnalyzer,
    Formulario
  }
}
</script>
