<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de gestión de bases de datos SGBD (DBMS)

    .row.justify-content-center.pb-5
      .tarjeta.tarjeta--gris.p-4
        pb-3 Los sistemas de gestión de bases de datos - SGBD (o DBMS por sus siglas en inglés: DataBase Management System) son fundamentales para la administración de la información de una organización. Son herramientas de software que permiten configurar, administrar y utilizar bases de datos y así sacar provecho de la información que allí se almacena.

    .row.justify-content-center
      .col-10
        .bloque-texto-f.color-primario.pt-4.px-5
          .bloque-texto-f__comillas.color-acento-botones
            i.fas.fa-quote-left
            i.fas.fa-quote-right
            p.em.text-center.text-regular.bloque-texto-f__texto <em>Al almacenar los datos en un SGBD en vez de en un conjunto de archivos del sistema operativo, se pueden utilizar las características del SGBD para gestionar los datos de un modo robusto y eficiente. A medida que crecen el volumen de los datos y el número de usuarios el apoyo de los SGBD se vuelve indispensable</em> 
            p.text-center.text-regular.bloque-texto-f__texto <b>(Ramakrishnan, 2011).</b> 
  
    h5 Los SGBD deben mantener cuatro propiedades en las transacciones para garantizar que los datos se procesen de manera fiable.

    .row.justify-content-center.pt-5
      .col-10
        img(src="@/assets/curso/temas/tema3/sgbd.svg", alt="sgbd").img100

    p.pt-5 Estas propiedades son conocidas como ACID, por sus siglas en inglés, y son:  

    .row.justify-content-center.pt-3
      .col-8
        .row.justify-content-center
          .col-md-8  
            .figure
              img(src="@/assets/curso/temas/tema3/acid.png", alt="acid").img50
          .col-md-4
            ul.lista-ul.m-0
                li.mb-0
                  i.fas.fa-angle-right
                  | Atomicidad
                li.mb-0
                  i.fas.fa-angle-right
                  | Consistencia
                li.mb-0
                  i.fas.fa-angle-right
                  | Aislamiento
                li.mb-0
                  i.fas.fa-angle-right
                  | Durabilidad

    .row.pt-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/atomicidad.png', alt='atomicidad')

          h3.text-center Atomicidad:   
          p.text-center.text-small Un cambio se debe realizar en su totalidad o no modificar nada en absoluto.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/consistencia.png', alt='consistencia')

          h3.text-center Consistencia:    
          p.text-center.text-small Todo cambio debe conducir o terminar en un estado válido de la base de datos.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/isolation.png', alt='isolation')

          h3.text-center Isolation (Aislamiento): 
          p.text-center.text-small Un cambio no debe afectar a otros cambios que se estén realizando sobre la base de datos de manera concurrente.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/durabilidad.png', alt='durabilidad')

          h3.text-center Durabilidad: 
          p.text-center.text-small Una vez realizado el cambio, sus efectos deben persistir incluso si se producen fallos en la base de datos.

    Separador

    #t_3_1.titulo-segundo.color-primario.pt-5
      h2 3.1  Evolución de los sistemas de gestión de bases de datos

    p.pt-3 Los sistemas de gestión de bases de datos (SGBD) vienen en evolución desde sus inicios como sistemas manuales hasta los sistemas actuales en línea y distribuidos, que permiten la gestión de enormes cantidades de información.  

    .row.justify-content-center.pt-3
      .col-10
        .row.justify-content-center
          .col-12
            .figure
              img(src="@/assets/curso/temas/tema3/evolucion.png", alt="evolucion").img50

    p.pt-3 El siguiente es un listado de los SGBD más utilizados en el mercado:

    .row.justify-content-center.pt-4.pb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Tabla 3.
          br
          em listado de los SGBD
        .col-12
          .tabla-b.color-acento-contenido
            table
              tr.tabla-b__header
                th.border-0.m-0.p-0.no-padding SGBD
                th.border-0.m-0.p-0 Nombre
                th.border-0.m-0.p-0 Tipo
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_1.png', alt='alt')
                th.text-center MySQL
                th.text-center Relacional
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_2.png', alt='alt')
                th.text-center PostgreSQL
                th.text-center Relacional y orientado a objetos
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_3.png', alt='alt')
                th.text-center ORACLE
                th.text-center Relacional
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_4.png', alt='alt')
                th.text-center Microsoft Access
                th.text-center Relacional
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_5.png', alt='alt')
                th.text-center Microsoft SQL Server
                th.text-center Relacional
              tr
                th.p-3
                  figure.p-3.max-width-80.ms-5
                    img(src='@/assets/curso/temas/tema3/tabla_6.png', alt='alt')
                th.text-center MariaBD
                th.text-center Relacional
              tr
                th.p-3.max-width-80
                  figure.p-5
                    img(src='@/assets/curso/temas/tema3/tabla_7.png', alt='alt')
                th.text-center MySQL
                th.text-center Relacional
              tr
                th.p-3.max-width-80
                  figure.p-5
                    img(src='@/assets/curso/temas/tema3/tabla_8.png', alt='alt')
                th.text-center MongoDB
                th.text-center Orientado a documentos
              tr
                th.p-3.max-width-80
                  figure.p-5
                    img(src='@/assets/curso/temas/tema3/tabla_8.png', alt='alt')
                th.text-center Redis
                th.text-center Almacenamiento clave - valor

    Separador

    #t_3_2.titulo-segundo.color-primario.pt-5
      h2 3.2  Componentes de los SGBD

    b.pt-5 Los siguientes son algunos de los componentes que hacen parte de los sistemas de gestión de bases de datos:  
    
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-secundario.mb-2.pr-2
            h5 Figura 7.
            span Componentes de una base de un SGBD

    .row.justify-content-center.pt-3
      .col-8
        .row.justify-content-center
          .col-12
            .figure
              img(src="@/assets/curso/temas/tema3/componentes.png", alt="componentes").img50

    .row.justify-content-center.pt-5
      .col-12
        .row.justify-content-center
          .col-md-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Diccionario de datos")
                .col-md-8.mb-4.mb-md-0
                  b Diccionario de datos     
                  p.pt-5 Es un conjunto de esquemas que reflejan las características de los datos incluidos en la base de datos (nombre, tipo, tamaño y relaciones entre datos). En el diccionario de datos se incluye, además, la información de los permisos de uso que tiene cada usuario que utiliza el sistema.

              div(titulo="Lenguajes de datos")
                .col-md-8.mb-4.mb-md-0
                  b Lenguajes de datos    
                  p.pt-5.pb-3 Son los lenguajes disponibles para los diversos tipos de manipulación de datos: 
                  ul.lista-ul.ps-3
                    li 
                      i.fas.fa-angle-right.txt--orange
                      |   Definición (DDL) que permite crear, eliminar y modificar estructuras
                    li 
                      i.fas.fa-angle-right.txt--orange
                      |   Control (DCL) que permite especificar permisos sobre los objetos y crear o eliminar usuarios
                    li 
                      i.fas.fa-angle-right.txt--orange
                      |   Manipulación (DML) que permite la inserción, actualización, eliminación y consulta de datos 

                  P.PT-3 Estos tres lenguajes se engloban en el lenguaje SQL (Structured Query Language o Lenguaje de consulta estructurada).

              div(titulo="Herramientas de administración")
                .col-md-8.mb-4.mb-md-0
                  b Herramientas de administración   
                  p.pt-5.pb-3 Son las herramientas que permiten gestionar tareas como: seguridad, control de recuperación, gestión de diccionarios de datos, importación y exportación de datos, programación de aplicaciones. 

              div(titulo="Objetos")
                .col-md-8.mb-4.mb-md-0
                  b Objetos   
                  p.pt-5.pb-3 Son los elementos que permiten la definición y manipulación de datos: tablas, consultas, funciones, disparadores.

              div(titulo="Planificadores")
                .col-md-8.mb-4.mb-md-0
                  b Planificadores   
                  p.pt-5.pb-3 Herramientas que permiten programar y automatizar la ejecución de tareas como puede ser cálculo de resultados o copias de seguridad.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/diccionario.png', alt='diccionario')

    Separador

    #t_3_3.titulo-segundo.color-primario.pt-5
      h2 3.3  Funciones del SGBD

    b Las características de un SGDB posibilitan el cumplimiento de unas funciones que pueden agruparse de la siguiente manera:

    .row.justify-content-center.pt-5
      .col-10
        .row.justify-content-center
          .col-12
            .figure
              img(src="@/assets/curso/temas/tema3/funciones.png", alt="funciones").img50

    .row.justify-content-center.pt-5
      .col-12
        .row.justify-content-center
          .col-md-4
              .figure
                img(src="@/assets/curso/temas/tema3/funciones2.png", alt="funciones2").img50
          .col-md-8
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento ")
                h4 Almacenamiento de los datos     
                p.pt-3 La base de datos debe almacenar textos, documentos, contraseñas y demás datos digitales de forma segura para que puedan consultarse.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Manipulación")
                h4 Manipulación de los datos      
                p.pt-3 La base de datos debe permitir la edición de los datos almacenados según los permisos de los usuarios. Se podrán realizar operaciones de adición, supresión, actualización, extracción, consulta, entre otras.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad")
                h4 Seguridad e integridad de los datos    
                p.pt-3 La base de datos debe garantizar la seguridad de la información evitando el acceso a personas no autorizadas. Además de cifrar la información, deberá tener un esquema de permisos de diferentes niveles para acceder a ésta. También se deben garantizar la coherencia e integridad de la información almacenada por medio del cumplimiento de las cuatro propiedades de las transacciones (ACID).
              .tarjeta.color-acento-botones--borde.p-4(titulo="Recuperación")
                h4 Restauración de los datos   
                p.pt-3 La base de datos debe brindar herramientas para el respaldo y recuperación de la información en caso de posibles fallos. 





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
