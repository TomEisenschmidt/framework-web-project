<script setup>
const recherche = defineModel();

defineEmits(['submit']);
</script>

<template>
  <div class="search-container">
    <input 
      type="text" 
      v-model="recherche" 
      placeholder="Rechercher un film (ex: Batman)..."
      @keyup.enter="$emit('submit')" 
    />
    <button @click="$emit('submit')" class="search-btn">🔍 Chercher</button>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

input {
  padding: 10px 15px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #222;
  color: white;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #42b883;
}

.search-btn {
  padding: 10px 20px;
  background-color: #42b883;
  color: #111;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.search-btn:hover {
  background-color: #33a06f;
}
</style>