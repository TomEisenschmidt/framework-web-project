<script setup>
import { ref, onMounted } from 'vue';
import FilmCard from '../components/FilmCard.vue';
import apiClient from '../api/apiClient'; // Ajustez le chemin selon votre dossier

// La variable est vide au départ
const films = ref([]);

const fetchFilms = async () => {
  try {
    // On appelle la route des films populaires, en français
    const response = await apiClient.get('/movie/popular?language=fr-FR&page=1');
    
    // TMDB stocke la liste des films dans "response.data.results"
    const tmdbMovies = response.data.results;

    // On transforme les données de TMDB pour qu'elles collent parfaitement 
    // à ce qu'attend votre composant <FilmCard>
    films.value = tmdbMovies.map(movie => {
      return {
        id: movie.id,
        titre: movie.title,
        // On coupe la date "2024-03-01" pour ne garder que l'année "2024"
        annee: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
        // TMDB donne juste le chemin de l'image, on ajoute l'URL de base
        img: movie.poster_path 
             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
             : 'https://via.placeholder.com/500x750?text=Pas+d+image',
        // TMDB renvoie des IDs de genre. Pour l'instant, on met une valeur par défaut.
        genre: 'Cinéma' 
      };
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des films :', error);
  }
};

// On exécute la fonction dès que la page est chargée
onMounted(() => {
  fetchFilms();
});

</script>

<template>
  <main class="home">
    <h1>Bienvenue sur MovieDeck</h1>
    <h2>La cave à films (Populaires en ce moment)</h2>

    <div class="grid">
      <FilmCard 
        v-for="filmItem in films" 
        :key="filmItem.id" 
        :film="filmItem" 
      />
    </div>
  </main>
</template>

<style scoped>
.home {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 20px;
}
</style>