import axios from 'axios';

const apiClient = axios.create({
  // URL de base de l'API TMDB
  baseURL: 'https://api.themoviedb.org/3', 
  timeout: 5000,
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmI5N2FjNzBlZjVlZTFjODI0OTVkYmEwZWRhZjJmYyIsIm5iZiI6MTc3NDg2OTE3MS4yNTUsInN1YiI6IjY5Y2E1YWIzYjY2ZGI2ZjVmOTYzNzBkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wnzwAAawyJRhTPJJUAvYpBYPcinuE7CagYThuPcl-es',
    'accept': 'application/json'
  }
});

export default apiClient;