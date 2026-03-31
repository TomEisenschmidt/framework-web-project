<script setup>
import { useRouter } from 'vue-router';
import { useFavorisStore } from '../stores/favoris';
import FilmCard from '../components/FilmCard.vue';

const favorisStore = useFavorisStore();
const router = useRouter();

const allerAuDetail = (film) => {
  router.push({ name: 'FilmDetail', params: { id: film.id } }); 
};
</script>

<template>
  <main class="favoris-page">
    <h1>Mes Films Favoris</h1>

    <div v-if="favorisStore.listeFavoris.length === 0" class="empty-state">
      <p>Vous n'avez pas encore ajouté de films à vos favoris.</p>
      <router-link to="/" class="btn-retour">Découvrir des films</router-link>
    </div>

    <div v-else class="grid">
      <FilmCard 
        v-for="filmItem in favorisStore.listeFavoris" 
        :key="filmItem.id" 
        :film="filmItem"
        @select="allerAuDetail"
      />
    </div>
  </main>
</template>

<style scoped>
.favoris-page {
  padding: 20px;
}

.empty-state {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: #ccc;
}

.btn-retour {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b883;
  color: #111;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 20px;
  margin-top: 20px;
}
</style>