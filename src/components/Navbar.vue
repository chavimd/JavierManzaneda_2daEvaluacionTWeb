<template>
  <div>
    <!-- Barra de navegación -->
    <nav class="bg-black text-yellow-400 p-4 shadow-md flex justify-between items-center">
      <!-- Título con fuente Orbitron -->
      <div class="text-2xl font-bold font-starwars">STAR WARS APP</div>

      <!-- Enlaces del navbar -->
      <div class="flex space-x-6 items-center">
        <router-link to="/" class="nav-link">Personajes</router-link>
        <router-link to="/naves" class="nav-link">Naves</router-link>
        <router-link to="/planetas" class="nav-link">Planetas</router-link>
      </div>
    </nav>

    <!-- Contenido dinámico -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
/* Aseguramos que la fuente Orbitron esté aplicada al texto del navbar */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;800&display=swap');

/* Estilo para el Navbar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #222;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-family: 'Orbitron', sans-serif; /* Aplica la fuente Orbitron a los enlaces */
  font-weight: 600;
  font-size: 1.1rem; /* Tamaño de letra un poco más grande */
  transition: background-color 0.3s ease;
}

/* Cambios de color en los enlaces del navbar */
.nav-link:hover {
  background-color: #f44336;
  color: white;
}

/* Estilo para el texto del título */
.font-starwars {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  font-size: 2rem; /* Tamaño de letra mayor para el título */
}
</style>
