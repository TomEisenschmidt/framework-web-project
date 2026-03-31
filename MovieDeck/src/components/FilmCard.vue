<script setup>
import { useFavorisStore } from '../stores/favoris';

defineProps({
  film: {
    type: Object,
    required: true
  }
});

const favorisStore = useFavorisStore();
</script>

<template>
  <div class="card" @click="$emit('select', film)">
    <div class="image-container">
      <img :src="film.img" :alt="film.titre" />
      
      <button 
        class="fav-btn" 
        @click="favorisStore.toggleFavori(film)"
      >
        {{ favorisStore.isFavorite(film.id) ? '❤️ Retirer' : '🤍 Favori' }}
      </button>
    </div>

    <div class="info">
      <h3>{{ film.titre }}</h3>
      <p>{{ film.annee }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column; 
  text-align: center;
  overflow: hidden; 
}

.image-container {
  position: relative;
}

.card img {
  width: 100%; 
  height: 300px;
  object-fit: cover;
}


.fav-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: bold;
}

h3 {
  margin: 10px 0 5px 0;
  font-size: 1.1rem;
}
</style>