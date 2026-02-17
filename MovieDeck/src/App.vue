<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from './components/Nav.vue';
</script>

<template>
  <header>
    <div>
    </div>
  </header>
  <Navbar /> 
  <main>
    <router-view />
  </main>
</template>

<style scoped>
</style>
