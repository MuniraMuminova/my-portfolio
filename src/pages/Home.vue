<template>
 
    <!-- <img class="image" src="/src/assets/images/Group1.png" alt="" /> -->
   <div class="home">
       <h1 class="home__text">
         ВАШ ВЕБ - РАЗРАБОТЧИК!
       </h1>
       <div class="home__buttons">
         <router-link to="/contact">
 
           <button class="home__buttons-btn" > Связаться со мной</button>
         </router-link>
        
         <button class="home__buttons-btn"> <a href="cv.docx" download="">

           Скачать резюме
         </a> 
        </button>
       </div>
       
     <div class="home__bottom">
       <img class="home__bottom-img" src="../assets/images/home-bottom.png" alt="">
   </div>
     
   </div>
   

  <main class="main">
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

   
  </main>
</template>

<script setup>
import About from "./Aboute.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contacts.vue";

</script>

<style>

</style>