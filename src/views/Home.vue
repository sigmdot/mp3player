<template>
  <div class="home container-fluid border">
     <div class="row m-0">
       <div class="col-lg-8 col-12 row border m-0">
         <div class="col-12 p-0">
           <AudioAnalyzer></AudioAnalyzer>
         </div>
         <div class="col-12" id="formulario">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae architecto, voluptates porro soluta, ex sed voluptate harum commodi rem id quas dolores fugit sit odio tempora, possimus sapiente doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores quas, cum illo minima, molestiae deserunt facere accusantium eveniet vel exercitationem quo facilis iure assumenda sunt odit porro perspiciatis beatae?</p>
         </div>
       </div>
       <div class="col-lg-4 col-12 row border m-0">
         <div class="col-12">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis. Provident sunt blanditiis accusantium magnam quisquam ex perspiciatis, quos vitae non! Placeat ut mollitia voluptatibus. Iusto nobis dolorum iste facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste numquam accusamus quo vitae, tempora incidunt. Ullam mollitia quos quaerat eligendi ex perferendis repellendus quia? Magni necessitatibus delectus aspernatur quia nisi!</p>
         </div>
         <div class="col-12">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates repellendus enim provident itaque quia perspiciatis, unde impedit. Veniam quae quos illum. Deleniti corrupti animi cupiditate, recusandae aspernatur numquam vel assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, in. Vel nostrum velit, exercitationem nihil quo doloremque, fuga ullam adipisci vitae, aliquid ea quas. Ratione sapiente eveniet aut itaque pariatur.</p>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioAnalyzer from '@/components/Audioanalyzer.vue'

export default {
  name: 'Home',
  components: {
    AudioAnalyzer
  }
}
</script>
