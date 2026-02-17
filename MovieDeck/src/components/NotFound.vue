<script setup>
</script>

<template>
<div class="global">
  <div class="not-found">
    <h1>404</h1>
    <p>La page que vous souhaitez rejoindre est inacessible.   Veuillez vous rediriger. </p>
    
    <router-link to="/" class="btn">Retour à l'accueil</router-link>
  </div>
</div>
</template>a

<style scoped>

.global{
  font-family: Arial, Helvetica, sans-serif;
}

.not-found {
  text-align: center;
  margin-top: 50px;
}
h1 {
  font-size: 15rem;
  color: red;
}
.btn {
  color: black;
  border: solid black 1px;
  border-radius: 5px;
  
}
</style>