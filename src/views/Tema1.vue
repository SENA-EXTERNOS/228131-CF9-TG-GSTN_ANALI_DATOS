<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la arquitectura de datos
    .row.justify-content-center.pb-5
      .col-12.tarjeta.tarjeta--azul
        pb-3 Avances tecnológicos como el internet de las cosas (IoT), el comercio electrónico y las redes sociales hacen que cada minuto se produzcan enormes cantidades de información de vital importancia para las organizaciones y para la vida diaria. Una parte de esta información es estructurada y tiene un modelo definido que se puede organizar en forma de tablas, hojas de cálculo y bases de datos relacionales. La otra parte de la información, la no estructurada, no tiene una estructura específica como lo son las fotografías, documentos de texto, videos y comentarios en redes sociales, pero al igual que la información estructurada, brinda elementos importantes para el análisis y toma de decisiones. La incorrecta administración de cantidad ingente de datos, hace que su manejo resulte abrumador.
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 1.
            span Ejemplo de Cohesión en Python
        .row
          .col-12
            img(src="@/assets/curso/temas/tema1/minuto.svg", alt="minuto_en_internet").img100
            figcaption Nota: tomada la información de https://www.statista.com            

    .row.justify-content-center.pt-5
      .col-12
        p Las empresas pueden (y deben) sacar provecho de los datos que generan día a día y esto es posible por medio de los sistemas de información, los cuales permiten recolectar, almacenar, procesar y explotar los datos disponibles para que sirvan de insumo para la planificación y la toma de decisiones. Así las decisiones estarán sustentadas en información y no en la intuición.
    #t_1_1.titulo-segundo.color-acento-contenido.pt-5
      h2 1.1  Conceptos básicos: datos e información
    .row.justify-content-center.pt-2
      .col-12
        p Los siguientes son algunos conceptos básicos necesarios para comprender cómo trabajar con los diversos tipos de datos que existen en cada organización y cómo se pueden gestionar a través de los sistemas de información para aprovecharlos en la gestión estratégica y en la toma de decisiones:

        // insertar infografias de puntos calientes
    .row.justify-content-center.pt-2
      .col-12.pb-3
        b Ejemplo: 
        span Dato Vs Información Vs Conocimiento
      .tabla-b.color-secundario
          tbody
            tr
              th Dato
              td 21
              td Sin un contexto e información adicional carece de sentido
            tr
              th Información
              td Utilidad año 2021: 21%
              td Al darle contexto como el nombre de la variable y tipo adquiere significado
            tr
              th Conocimiento
              td La empresa superó el año anterior el porcentaje de utilidad esperado
              td Se demuestra la comprensión y utilización de la información

    .row.justify-content-center.pt-5.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/tema1/datos_estructurados.svg", alt="datos_estructurados").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Datos estructurados: 
        .row.justify-content-center.pb-5  
          .col-7
            p Se consideran datos estructurados cuando tienen una estructura bien definida, siguen un orden y son de fácil acceso y uso para los sistemas de información y las personas. 
            p.pt-3 Se suelen mostrar en filas y columnas con títulos. Por ejemplo: transacciones de compra / venta, base de datos de contactos, inventario de implementos.
      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/tema1/dato_no_estructurados.svg", alt="alt").img50
        .row.justify-content-center.p-0  
          .col-8.pb-5
            b.title-like Datos no estructurados:
        .row.justify-content-center.pb-5  
          .col-7
            p Este tipo de datos no tienen un modelo o estructura muy definida y pueden tener diferentes formatos como texto, imágenes, sonido, video lo que hace más difícil su procesamiento y análisis. 
            p.pt-3 La mayor parte de la información relevante para la organización se puede clasificar como “no estructurada”. Por ejemplo: correos electrónicos, documentos de texto, imágenes de catálogo, audios, videos, comentarios en redes sociales.
  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
