<script setup>
</script>
<template>
  <header class="header">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        MovieDeck
      </router-link>

      <!-- <div class="nav-links">
        <router-link to="/" class="nav-item">Accueil</router-link>
        <router-link to="/about" class="nav-item">À Propos</router-link>
      </div> -->
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #1a1a1a; /*  style Cinéma */
  /* box-shadow: 0 2px 4px rgba(0,0,0,0.5); */
}

.nav-container {
  display: flex;
  justify-content: space-between; /* Espacement entre Logo et Liens */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b883; /* Vert Vue.js */
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #42b883;
}

/* Vue Router ajoute automatiquement cette classe au lien actif */
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #42b883;
}
</style>