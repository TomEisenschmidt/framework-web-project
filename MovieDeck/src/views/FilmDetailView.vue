<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import apiClient from '../api/apiClient';
import { useFavorisStore } from '../stores/favoris';

const route = useRoute();
const router = useRouter();
const favorisStore = useFavorisStore();

const film = ref(null);
const fetchFilmDetail = async () => {
  try {
    const filmId = route.params.id; 
    
    const response = await apiClient.get(`/movie/${filmId}?language=fr-FR`);
    const data = response.data;

    film.value = {
      id: data.id,
      titre: data.title,
      annee: data.release_date ? data.release_date.split('-')[0] : 'N/A',
      img: data.poster_path 
           ? `https://image.tmdb.org/t/p/w500${data.poster_path}` 
           : 'https://via.placeholder.com/500x750?text=Pas+d+image',
      synopsis: data.overview || "Aucun synopsis disponible pour ce film.",
      genres: data.genres.map(g => g.name).join(', '),
      note: Math.round(data.vote_average * 10) / 10
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des détails :', error);
  }
};

onMounted(() => {
  fetchFilmDetail();
});

const goBack = () => {
  router.back(); 
};
</script>

<template>
  <main class="detail-page">
    <div v-if="film" class="film-container">
      <button @click="goBack" class="back-btn">⬅ Retour à la cave</button>

      <div class="layout">
        <div class="poster-col">
          <img :src="film.img" :alt="film.titre" class="poster" />
        </div>

        <div class="info-col">
          <h1>{{ film.titre }} <span class="annee">({{ film.annee }})</span></h1>
          <p class="genres">{{ film.genres }}</p>
          <p class="note">⭐ {{ film.note }} / 10</p>

          <div class="actions">
            <button 
              class="fav-btn" 
              @click="favorisStore.toggleFavori(film)"
              :class="{ 'is-active': favorisStore.isFavorite(film.id) }"
            >
              {{ favorisStore.isFavorite(film.id) ? '❤️ Retirer des favoris' : '🤍 Ajouter aux favoris' }}
            </button>
          </div>

          <div class="synopsis">
            <h3>Synopsis</h3>
            <p>{{ film.synopsis }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="message">
      <h2>Chargement</h2>
      <button @click="goBack" class="back-btn">Retour</button>
    </div>

  </main>
</template>

<style scoped>
.detail-page {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  color: white;
}

.message {
  text-align: center;
  margin-top: 50px;
}

.back-btn {
  background: transparent;
  color: #42b883;
  border: 1px solid #42b883;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: bold;
}

.back-btn:hover {
  background: #42b883;
  color: #111;
}

.layout {
  display: flex;
  gap: 40px;
  background-color: #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.poster {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.info-col {
  flex: 1;
}

h1 {
  margin-top: 0;
  font-size: 2.5rem;
}

.annee {
  color: #888;
  font-weight: normal;
}

.genres {
  color: #42b883;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.note {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.fav-btn {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: all 0.2s;
}

.fav-btn.is-active {
  background-color: white;
  color: black;
}

.synopsis h3 {
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.synopsis p {
  line-height: 1.6;
  color: #ccc;
}

/* Rendre le tout responsive pour mobile */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .synopsis {
    text-align: left;
  }
}
</style>