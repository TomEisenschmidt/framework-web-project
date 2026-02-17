<script setup>

import { ref } from 'vue';
import FilmCard from '../components/FilmCard.vue'

const films = ref([
  
  {
    id: 1,
    titre: "Interstellar",
    annee: 2014,
    //img: "@/assets/img/films/Interstellar.jpg",
    img: "https://fr.web.img6.acsta.net/r_1920_1080/img/08/fe/08feaecbc56c480c082003c632f3bc2f.jpg",
    genre: "Science Fiction"
  },
  {
    id: 2,
    titre: "The Dark Knight",
    annee: 2008,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    genre: "Action"
  },
  {
    id: 3,
    titre: "Oppenheimer",
    annee: 2023,
    img: "https://www.universalpictures.fr/tl_files/content/movies/oppenheimer/posters/01.jpg",
    genre: "Thriller"
  },
  {
    id: 4,
    titre: "Inception",
    annee: 2010,
    img: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg", 
    genre: "Science Fiction"
  },

  {
    id: 5,
    titre: "L'Odyssée",
    annee: 2026,
    img: "https://fr.web.img3.acsta.net/img/06/c7/06c7db695682d649705879f4569b56e5.jpg",
    genre: "Action/Cinéma de Fantasy"
  },

]);

</script>


<template>
  <main class ="home">
    <h1>Bienvenue sur MovieDeck</h1>

    <h2>La cave à films</h2>
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