<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de gestión de bases de datos SGBD (DBMS)

    .row.justify-content-center.pb-5
      .col-12.tarjeta.tarjeta--gris
        pb-3 Los sistemas de gestión de bases de datos - SGBD (o DBMS por sus siglas en inglés: DataBase Management System) son fundamentales para la administración de la información de una organización. Son herramientas de software que permiten configurar, administrar y utilizar bases de datos y así sacar provecho de la información que allí se almacena.

    .row.justify-content-center.pb-5
      .col-10
        .row.tarjeta--azul.align-middle 
          .col-12.col-mt-5.justify-content-center
            p Al almacenar los datos en un SGBD en vez de en un conjunto de archivos del sistema operativo, se pueden utilizar las características del SGBD para gestionar los datos de un modo robusto y eficiente. A medida que crecen el volumen de los datos y el número de usuarios el apoyo de los SGBD se vuelve indispensable
            b.pt-5 (Ramakrishnan, 2011).
    b.pt-5 Los SGBD deben mantener cuatro propiedades en las transacciones para garantizar que los datos se procesen de manera fiable.


</template>

<script>
export default {
  name: 'Tema3',
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
