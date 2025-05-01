<template>
  <div>
    <!-- Barra de navegación -->
    <nav>
      <router-link to="/">Personajes</router-link>
      <router-link to="/naves">Naves</router-link>
      <router-link to="/planetas">Planetas</router-link>
    </nav>

    <!-- Contenido dinámico -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-black text-yellow-400 p-4 mt-10">
      <div class="flex justify-center items-center">
        <p class="text-lg font-medium">
          &copy; 2025 STAR WARS APP. QUE LA FUERZA TE ACOMPAÑE.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* Estilo para el Navbar */
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #222;
}

a {
  color: white;
  text-decoration: none;
}

/* Estilo para el Body */
body {
  background-color: #0f0f0f; /* Fondo oscuro tipo Vader */
  color: #ffffff;            /* Texto blanco */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Estilo para el Footer */
footer {
  font-family: 'Orbitron', sans-serif;
}
footer .text-lg {
  font-size: 1.25rem;
  letter-spacing: 1px;
}
footer p {
  text-align: center;
}
</style>
