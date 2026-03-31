<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import FilmCard from '../components/FilmCard.vue';
import apiClient from '../api/apiClient';

const films = ref([]);
const isLoading = ref(true);
const router = useRouter();

const fetchFilms = async () => {
  try {
    const response = await apiClient.get('/movie/popular?language=fr-FR&page=1');
    
    films.value = response.data.results.map(movie => ({
      id: movie.id,
      titre: movie.title,
      annee: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
      img: movie.poster_path 
           ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
           : 'https://via.placeholder.com/500x750?text=Image+Indisponible',
      genre: 'Cinéma' 
    }));
  } catch (error) {
    console.error('Erreur de chargement :', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchFilms();
});

const allerAuDetail = (film) => {
  router.push({ name: 'FilmDetail', params: { id: film.id } }); 
};
</script>


<template>
  <main class="home-container">
    
    <header class="hero">
      <h1>Bienvenue sur MovieDeck 🎬</h1>
      <p>Voici les films les plus populaires du moment</p>
    </header>

    <div v-if="isLoading" class="loading">
      <p>Chargement des bobines...</p>
    </div>

    <div v-else class="movies-grid">
      <FilmCard 
        v-for="filmItem in films" 
        :key="filmItem.id" 
        :film="filmItem" 
        @select="allerAuDetail"
      />
    </div>

  </main>
</template>

<style scoped>
.home-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #42b883; 
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 50px 0;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  gap: 25px;
}
</style>