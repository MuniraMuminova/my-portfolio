<template>
<div class="container">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue"

</script>

<style>


</style>