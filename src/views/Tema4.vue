<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Titulo de primer nivel

    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Un modelo de datos relacional es una recopilación de elementos de datos con relaciones predefinidas. En este tipo de modelo los elementos se organizan en tablas con columnas y filas. Cada columna de la tabla almacena un determinado tipo de dato (atributo o característica) y cada campo almacena el valor de dicho atributo para cada registro (fila o tupla).
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema4/modelo_relacional.svg").img100

    .row.justify-content-center
      .col-12.col-md-6.col-lg-6.crd.clr-paleYellow.p-4 
          p Las bases de datos relacionales utilizan las restricciones para garantizar la integridad de los datos y las transacciones que allí se realizan, se manejan como secuencias de operaciones que forman una sola unidad lógica de trabajo. Esto quiere decir que, la transacción se debe ejecutar completamente y no de forma parcial para evitar así inconsistencias en la base de datos.
      .col-12.col-md-6.col-lg-6
        figure
          img(src="@/assets/curso/temas/tema4/modelo_relacional_1.svg").img100

    .row.justify-content-center.pb-5
      .col-12.col-md-6.col-lg-6
        figure
          img(src="@/assets/curso/temas/tema4/modelo_relacional_2.svg").img100
      .col-12.col-md-6.col-lg-6.crd.clr-paleYellow.p-4 
          p El lenguaje utilizado para comunicarse con las bases de datos relacionales es el lenguaje SQL o lenguaje de consulta estructurada. Este lenguaje es utilizado para agregar, actualizar o eliminar los datos de la base de datos, así como para recuperar subconjuntos de datos como consultas.

    h5.pb-3 Los siguientes son algunos términos y definiciones relacionados con este tipo de base de datos:

    .row 
      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h5 Tabla:
              p Arreglo bidimensional de datos. Está conformada por un encabezado con el nombre de las columnas y el cuerpo que contiene las filas de datos. Cada fila de la tabla representa un elemento independiente con los valores de sus atributos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_3.png', alt='alt')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h5 Tipo de dato:
              p.pb-3 Define el conjunto de valores que pueden tomar los atributos (columnas) de una tabla. Cada columna de la tabla se asocia con un tipo de dato. 
              p.pb-3 Los tipos de datos más comunes en SQL son: 
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check.txt--azul
                  | Char (texto de longitud fija)
                li 
                  i.fas.fa-check.txt--azul
                  | Varchar (texto de longitud variable)
                li 
                  i.fas.fa-check.txt--azul
                  | Float (datos numéricos con precisión flotante)
                li 
                  i.fas.fa-check.txt--azul
                  | Date/time (fecha y hora)
                li 
                  i.fas.fa-check.txt--azul
                  | Integer (enteros)
                li 
                  i.fas.fa-check.txt--azul
                  | Boolean (booleanos)
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_4.png', alt='alt')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h5 Relación:      
              p Conexión entre las filas de dos tablas. Se muestran mediante los valores de una columna en una tabla que coinciden con los valores de una columna en otra tabla.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_5.png', alt='alt')
          
      Separador

      #t_4_1.titulo-segundo.color-primario.p-3
        h2 4.1 Operadores de álgebra relacional

      p.pb-4 El álgebra relacional es un lenguaje que define una serie de operaciones que se realizan por medio de “operadores” aplicados sobre uno o varios conjuntos de datos (tablas), produciendo como resultado un nuevo conjunto de datos (una nueva tabla). Las operaciones de álgebra relacional son similares a las del álgebra numérica, pero en este caso se aplican a tablas y no a números. 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 8.
            br
            em Operadores álgebra relacional.
          figure
            img(src='@/assets/curso/temas/tema4/algebra_relacional.png', alt='alt')
      
      h5.pb-5 El álgebra relacional agrupa los operadores en tres categorías:

      .row.pb-5
        .col-12.col-md-12.col-lg-12
          TabsA.color-acento-botones       
            .tarjeta.tarjeta--azul.clr--azul.p-4(titulo="Operadores de restricción")
              .row 
                .col-8.pt-3.ps-5
                  h4 Operadores de restricción y proyección      
                  p.pb-2 Estos operadores generan subconjuntos de una tabla y son ampliamente usados, pues muchas veces los usuarios desean observar subconjuntos de una tabla que cumplan con ciertos criterios o condiciones.
                  p La restricción genera un subconjunto de renglones o filas del conjunto de datos, mientras que la proyección genera un subconjunto de columnas. La restricción usa una condición o expresión lógica para seleccionar las filas a mostrar. La proyección usa una lista de nombres de columnas para indicar las columnas a mostrar.
                .col-4
                  figure
                    img(src='@/assets/curso/temas/tema4/algebra_relacional_1.png', alt='alt')
            .tarjeta.tarjeta--azul.clr--gris.p-4(titulo="Operador de producto ")    
              .row 
                .col-8.pt-3.ps-5
                  h4 Operador de producto cruz extendido   
                  p Este operador puede combinar dos tablas. La tabla resultante muestra todas las posibles combinaciones de los datos de las dos tablas generando, en muchos casos, datos excesivos.
                .col-4
                  figure.tarjeta.tarjeta--gris.p-3
                    img(src='@/assets/curso/temas/tema4/algebra_relacional_2.png', alt='alt')

            .tarjeta.tarjeta--azul.clr--gris.p-4(titulo="Operador de unión o enlace")    
              .row 
                .col-8.pt-3.ps-5
                  h4 Operador de unión o enlace (join)    
                  p Es el operador más usado para combinar tablas, pues, a diferencia del operador de producto cruz extendido el operador, join requiere de una condición de coincidencia sobre las filas de dos tablas.
                .col-4
                  figure
                    img(src='@/assets/curso/temas/tema4/algebra_relacional_3.png', alt='alt')
            
      h5.pb-5 En la tabla se puede apreciar la equivalencia entre nomenclatura de álgebra relacional y SQL

      .titulo-sexto.color-acento-contenido.mb-2.pr-2
        h5 Tabla 4.
        br
        em Nomenclatura álgebra relacional.
      .row
        .col-12
          .tabla-b.color-acento-contenido
            table
              tr.tabla-b__header
                th.border-0.m-0.p-0.no-padding Operador
                th.border-0.m-0.p-0 Álgebra relacional
                th.border-0.m-0.p-0 SQL
              tr
                th.no-padding
                td 
                  img(src='@/assets/curso/temas/tema4/info_tabla_0.svg', alt='alt')
                td SELECT * FROM Estudiantes
              tr
                th.no-padding 
                  p.p-3 Restricción o selección
                td 
                  img(src='@/assets/curso/temas/tema4/info_tabla_1.svg', alt='alt')
                td SELECT * FROM Estudiantes WHERE edad > 18
              tr
                th.no-padding 
                  p.p-3 Proyección
                td 
                  img(src='@/assets/curso/temas/tema4/info_tabla_2.svg', alt='alt')
                td SELECT edad, nombre FROM Estudiantes
              tr
                th.no-padding 
                  p.p-3 Restricción o selección
                td 
                  img(src='@/assets/curso/temas/tema4/info_tabla_3.svg', alt='alt')
                td SELECT edad, nombre FROM Estudiantes WHERE edad > 18
              
      Separador

      #t_4_2.titulo-segundo.color-primario.p-3
        h2 4.2 Sintaxis SQL
      
      p SQL es el lenguaje estándar de consultas a las bases de datos. Estas consultas permiten almacenar, manipular y recuperar datos de bases de datos relacionales. Al ser SQL un lenguaje estandarizado permite desplegar implementaciones del mismo lenguaje SQL en diferentes sistemas con cambios mínimos.
      
      h5 Las sentencias SQL se pueden agrupar por funcionalidades:

      .tarjeta--container.row.mb-4.pb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema4/sintaxis_sql_1.svg', alt='alt')
            
          h5.text-center Lenguaje de manipulación de datos (DML): 
          p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        
        .col-md.tarjeta.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema4/sintaxis_sql_2.svg', alt='alt')
            
          h5.text-center Lenguaje de definición de datos (DDL): 
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
        
        .col-md.tarjeta.color-acento-contenido.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema4/sintaxis_sql_3.svg', alt='alt')
            
          h5.text-center Lenguaje de control de datos (DCL): 
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

      p.pb-4 Las sentencias en SQL no son sensibles a mayúsculas y minúsculas, pero se recomienda usar estos comandos en mayúsculas sostenidas para diferenciarlos de los nombres de tablas y columnas.

      p.pb-4 <b>Ejemplo:</b> <em>CREATE DATATABASE</em> nombrebasedatos;

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          figure
            img(src='@/assets/curso/temas/tema4/sintaxis_sql_4.svg', alt='alt')


</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
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
