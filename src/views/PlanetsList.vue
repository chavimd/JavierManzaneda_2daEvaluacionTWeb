<template>
    <div class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h2 class="text-4xl font-bold mt-6">Planetas de Star Wars</h2>
  
      <div v-if="loading" class="spinner mt-10"></div>
      <div v-else-if="error" class="text-red-500 mt-10">{{ error }}</div>
  
      <div class="card-container mt-10" v-else>
        <div class="card-wrapper">
          <PlanetCard
            v-for="(planet, index) in planets"
            :key="index"
            :planet="planet"
          />
        </div>
      </div>
  
      <div class="pagination mt-16">
        <button
          :disabled="!prev"
          @click="fetchPlanets(prev)"
          class="button"
        >
          Anterior
        </button>
        <button
          :disabled="!next"
          @click="fetchPlanets(next)"
          class="button"
        >
          Siguiente
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import PlanetCard from "../components/PlanetCard.vue";
  import "../assets/spinner.css";
  
  export default {
    name: "PlanetsList",
    components: {
      PlanetCard
    },
    data() {
      return {
        planets: [],
        loading: true,
        error: null,
        next: null,
        prev: null,
        apiUrl: "https://swapi.tech/api/planets/"
      };
    },
    methods: {
      fetchPlanets(url) {
        this.loading = true;
        this.error = null;
  
        axios
          .get(url)
          .then(response => {
            this.planets = response.data.results;
            this.next = response.data.next;
            this.prev = response.data.previous;
          })
          .catch(() => {
            this.error = "Error al cargar los planetas.";
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    mounted() {
      this.fetchPlanets(this.apiUrl);
    }
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .card-wrapper {
    background-color: #333;
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    background-color: #2d2d2d;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    width: 200px;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(255, 0, 0, 1);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #f44336;
  }
  
  .card-text {
    font-size: 1rem;
    color: #ddd;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #444;
    border: none;
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #f44336;
  }
  
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .button:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
  </style>
  