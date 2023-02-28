<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-12.col-md-4.col-lg-4
          .tarjeta.h-100.d-flex.align-items-center.p-4
            figure.max-width-80
              img(src="@/assets/curso/temas/introduccion.svg", alt="alt")
      .col-12.col-md-8.col-lg-8
        p.mb-4 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado a los fundamentos en el modelamiento de datos. Durante su desarrollo se abordarán los ejes temáticos de arquitectura y modelamiento de datos, sistemas de gestión de bases de datos, bases de datos relacionales y no relacionales. Al finalizar, estará en capacidad de modelar una base de datos conforme a los requerimientos. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:
        p.mb-4 <b>¡Le deseamos una experiencia de aprendizaje significativa y memorable!</b>

    .row
      .container.tarjeta.tarjeta--blanca
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
