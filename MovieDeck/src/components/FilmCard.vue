<script setup>
defineProps({
  film: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="film.img" :alt="film.titre" />
    </div>
    <div class="info">
      <h3>{{ film.titre }}</h3>
      <p>{{ film.annee }} - {{ film.genre }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid white;
  padding: 2px;
  border-radius: 8px;
  background-color: black;
  color: white;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column; 
  height: 100%; 
  text-align: center;
}

.card:hover {
  transform: translateY(-5px); 
}
.card img {
  width:100%; 
  height: auto; 
  object-fit: cover;
  border-radius: 4px;
}

h3 {
  margin: 10px 0 5px 0;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>