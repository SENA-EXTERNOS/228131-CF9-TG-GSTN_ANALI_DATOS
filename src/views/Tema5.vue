<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Bases de datos NO relacionales

    .row.justify-content-center.pb-5
      .col-12.tarjeta.tarjeta--gris.p-4
        p Existen tipos de datos no estructurados. Como se indica, no tienen una estructura o arquitectura identificable y por esto no se ajustan a un modelo de datos predefinido. Por esta falta de organización, este tipo de datos no es apto para una base de datos relacional como las gestionadas con SQL. Un gran porcentaje de los datos que generan las organizaciones son datos no estructurados, lo que hace más compleja su gestión y explotación.

    .row.justify-content-center.pb-5
      .col-12
        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/tema5/datos.png", alt="datos").img400.m-auto
          .col-lg-8
            h5 Algunas fuentes de datos no estructuradas son: 

            SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-4 Imágenes
                  .col-8
                    img(src="@/assets/curso/temas/tema5/imagenes.png", alt="imagenes").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-4 Videos
                  .col-8
                    img(src="@/assets/curso/temas/tema5/videos.png", alt="videos").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-4 Informes
                  .col-8
                    img(src="@/assets/curso/temas/tema5/informes.png", alt="informes").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-2 Documentos de texto (Word, PDF)
                  .col-8
                    img(src="@/assets/curso/temas/tema5/documentos_de_texto.png", alt="documentos_de_texto").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-4 Audios
                  .col-8
                    img(src="@/assets/curso/temas/tema5/audios.png", alt="audios").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-4 Notas de voz
                  .col-8
                    img(src="@/assets/curso/temas/tema5/notas_de_voz.png", alt="notas_de_voz").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-2 Comentarios en redes sociales
                  .col-8
                    img(src="@/assets/curso/temas/tema5/comentarios.png", alt="comentarios").img100
              .tarjeta.tarjeta--slyder.p-4.border
                .row.justify-content-center.mb-3
                  p.text-center.pb-2 Correos electrónicos
                  .col-8
                    img(src="@/assets/curso/temas/tema5/correos.png", alt="correos").img100
                
    p.pt-3 Para poder aprovechar todos estos datos surgen las bases de datos no relacionales (NoSQL) ofreciendo nuevas formas de almacenamiento y de gestión de esta información.

    h3.pt-5 ¿Qué son las bases de datos NO relacionales?

    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0.italic Joyanes (2015), define las bases de datos NoSQL (Not only SQL) como “…una categoría de sistemas de gestión de bases de datos que no utilizan SQL como lenguaje de consulta principal. Estas bases de datos no requieren esquemas de tablas fijas y no soportan operaciones Join. Están optimizadas para operaciones de lectura/escritura escalables en lugar de pura consistencia”.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema5/bases_no_relacionales.png").img100
    P.pt-5 Las bases de datos NoSQL son más flexibles que las bases de datos relacionales ya que permiten gestionar información en otros formatos como grafos, documentos, clave-valor y columnas. Este tipo de bases de datos son idóneas para aplicaciones que requieren manipulación de grandes cantidades de datos y por esta razón es usada por empresas como Facebook, LinkedIn o Google.     
    
    h5 Las principales características de estas bases de datos son:

    .row.justify-content-center.pb-5
      .col-10
        .row
          .col-md-6
            .anexo__icono1
              img(src="@/assets/curso/temas/tema5/no_relacional_1.png")
            .anexo__texto.back-yellow.p-2
              p.m-5 <b>Capacidad de almacenamiento de grandes cantidades de datos</b>. 
          .col-md-6
            .anexo__icono1
              img(src="@/assets/curso/temas/tema5/no_relacional_3.png")
            .anexo__texto.back-yellow.p-2
              p.m-5 <b>Escalabilidad sin afectación del rendimiento</b>.                
          .col-md-6
            .anexo__icono1
              img(src="@/assets/curso/temas/tema5/no_relacional_2.png")
            .anexo__texto.back-yellow.p-2
              p.m-5 <b>Acceso rápido</b>. 
   
          .col-md-6
            .anexo__icono1
              img(src="@/assets/curso/temas/tema5/no_relacional_4.png")
            .anexo__texto.back-yellow.p-2
              p.m-5 <b>Distribución y manipulación de datos no estructurados</b>.
    h3.pt-5 Tipos de bases de datos NO relacionales
    .row
      .col-12
        b Existen cuatro categorías de bases de datos NoSQL:
        span  almacenes clave-valor, almacenes de documentos, almacenes de grafos y familia de bases de datos columnares.
    .row.justify-content-center
      .col-10.pt-5
        figure
          img(src="@/assets/curso/temas/tema5/categorias-.png").img100

    .row.justify-content-center.pt-5
      .col-12
        .row.justify-content-center
          .col-md-4
              figure
                img(src='@/assets/curso/temas/tema5/categorias_2.png', alt='categorias_2')
          .col-md-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Almacén clave - valor")
                .col-md-8.mb-4.mb-md-0
                  p Es la forma más sencilla de las bases de datos NoSQL. Los datos se representan como colecciones de pares clave-valor. Este tipo de base de datos es más rápido y óptimo para los accesos. En este caso la clave (<i>key</i>) sirve como identificador único.
                  p.pt-3 Las bases de datos NoSQL más populares de este tipo son: Amazon DynamoDB y Cassandra.
              div(titulo="Almacenes de documentos")
                .col-md-8.mb-4.mb-md-0
                  p Este tipo de base de datos guarda la información como un listado de documentos desestructurados. Aquí se combinan formatos de marcación estándar como XML (Lenguaje de marcado extensible o Extensible Markup Language) y JSON (Notación de objetos en JavaScript o JavaScript Object Notation) con formatos propietarios como PDF y Word de Microsoft.
                  p.pt-3 La base de datos de este tipo más utilizada es MongoDB.
              div(titulo="Almacenes de grafos")
                .col-md-8.mb-4.mb-md-0
                  p Este tipo de base de datos organiza la información en estructuras de grafos dirigidos. En estas estructuras los objetos se conocen como nodos y aristas (<i>edges</i>). El principal beneficio de estas bases de datos es la velocidad y se usan en aplicaciones de redes sociales como Twitter.
                  p.pt-3 Algunas bases de datos de grafos son: Neo4J y AllegroGraph.
              div(titulo="Bases de datos columnares")
                .col-md-8.mb-4.mb-md-0
                  p Consisten en un sistema de almacenamiento distribuido para manipulación de datos estructurados, diseñado para grandes volúmenes de datos. Son ampliamente utilizadas para aplicaciones de <i>Big data.</i>
                  p.pt-3 Algunas bases de datos de este tipo son: Apache HBase, Hypertable y Cassandra.

    .row.justify-content-center.pt-5.pb-5
      .col-12
        .row.tarjeta.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5.p-0.d-table-cell
            img(src="@/assets/curso/temas/tema4/sintaxis_sql_7.svg", alt="infografia").img100
            
          .col-12.col-md-8.col-lg-8.mt-5.mb-5
            .titulo-segundo.color-primario
              h3 Infografía motores de bases de datos NoSQL
            p.pb-4 La siguiente infografía permite ver los motores de bases de datos NoSQL y su clasificación:

            a.boton.boton--b(:href="obtenerLink('/downloads/Infografia_motores_de_bases_de_datos_NoSQL.pdf')" target="_blank")
              span Descargar 
              i.fas.fa-puzzle-piece

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema5',
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
