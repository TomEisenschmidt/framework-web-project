import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useFavorisStore = defineStore('favoris', () => {
  const listeFavoris = ref([]);

  const isFavorite = computed(() => {
    return (id) => listeFavoris.value.some(film => film.id === id);
  });

  const toggleFavori = (film) => {
    if (isFavorite.value(film.id)) {
      listeFavoris.value = listeFavoris.value.filter(f => f.id !== film.id);
    } 
    else {
      listeFavoris.value.push(film);
    }
  };

  return { 
    listeFavoris, 
    isFavorite, 
    toggleFavori 
  };
});