
# Portal SWAPI con Vue.js - Segunda Evaluación TWeb


Este proyecto es una plantilla de portal web desarrollada con Vue.js 3 que consume datos de la API pública SWAPI (Star Wars API) para mostrar información sobre personajes, planetas y naves espaciales del universo Star Wars.


##  Características
- Framework: Vue.js 3 (Composition API con <script setup>)

- Enrutamiento: Vue Router para navegación entre vistas (Inicio, Personajes, Planetas, Naves)

- Estilos: CSS puro con Flexbox y Grid. Diseño responsive y variables CSS para personalización.

- Peticiones HTTP: API Fetch nativa para consumir SWAPI.

- Componentes Reutilizables: Navbar, Footer, DataCard, LoadingIndicator, ErrorMessage.

- Manejo de Estado: ref de Vue para estado reactivo local (carga, error, datos).

- Paginación: Navegación entre páginas de resultados de la API.

- Manejo de Carga y Errores: Indicadores visuales y mensajes claros ante errores.


## API Consumida
- https://www.swapi.tech/api/people/ → Personajes

- https://www.swapi.tech/api/planets/ → Planetas

- https://www.swapi.tech/api/starships/ → Naves espaciales
## Installation

Requisitos
- Node.js y npm instalados → Descargar Node.js

```bash
  git clone https://github.com/chavimd/JavierManzaneda_2daEvaluacionTWeb.git
cd swapi_tecweb
npm install
npm run dev

```
    
##  Explicación Técnica
main.js
- Configura la app Vue, importa estilos globales (main.css), y aplica Vue Router.

App.vue
- Contiene la estructura principal con el <Navbar />, <router-view /> y <Footer />.

- Se definió un fondo oscuro y una fuente personalizada.

router/index.js
- Define las rutas a las vistas: / (personajes), /planetas, /naves.

- composables/useSwapiData.js
Hook personalizado que:

- Realiza la llamada a la API según el recurso (people, planets, starships)

- Controla el estado de carga (loading), error (error) y resultados (items)

- Permite cambiar de página (nextPage, previousPage)

- Expone la página actual (currentPage)

Vistas (views/)
- Personajes.vue, Planetas.vue, Naves.vue

- Usan el composable useSwapiData('recurso')

- Muestran spinner durante la carga, error si hay fallo, o tarjetas con datos

- Incluyen controles de paginación

Componentes
- Navbar.vue: Navegación entre las vistas

- Footer.vue: Pie de página estilizado con fuente y color temático

- DataCard.vue: Tarjeta para mostrar nombre, descripción u otros datos

- Spinner.vue: Indicador animado de carga

Estilos
- Se usaron estilos propios en assets/, sin frameworks externos

- Uso de CSS puro con Flexbox para diseño responsive

- Colores personalizados (#0f0f0f, #ffd700, etc.)

- Cada componente tiene <style scoped> para modularidad

