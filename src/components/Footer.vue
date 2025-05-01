<template>
  <footer class="bg-black text-yellow-400 p-4 mt-10">
    <div class="flex justify-center items-center">
      <p class="text-lg font-medium">
        &copy; 2025 STAR WARS APP. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* Aseguramos que el texto esté centrado y sea legible */
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
