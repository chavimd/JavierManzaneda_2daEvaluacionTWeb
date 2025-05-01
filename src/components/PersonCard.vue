<template>
    <div class="card">
      <h2>{{ person.name }}</h2>
      <p>Altura: {{ person.height }}</p>
      <p>Género: {{ person.gender }}</p>
      <p>Nacimiento: {{ person.birth_year }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PersonCard',
    props: ['person']
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    width: 200px;
    background-color: #f4f4f4;
  }
  </style>
  