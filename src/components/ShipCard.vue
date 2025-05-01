<template>
    <div class="card">
      <div class="card-title">{{ ship.name }}</div>
      <div class="card-text">
        <p><strong>Modelo:</strong> {{ ship.model }}</p>
        <p><strong>Fabricante:</strong> {{ ship.manufacturer }}</p>
        <p><strong>Capacidad de pasajeros:</strong> {{ ship.passengers }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShipCard",
    props: {
      ship: Object
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  