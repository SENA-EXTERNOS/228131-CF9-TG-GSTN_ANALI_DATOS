<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelo relacional de datos

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

    figure.mb-5 
      img(src="@/assets/curso/temas/tema4/modelo_relacional_1.svg").img100
    .clr-paleYellow.p-4.mb-5 
      p Las bases de datos relacionales utilizan las restricciones para garantizar la integridad de los datos y las transacciones que allí se realizan, se manejan como secuencias de operaciones que forman una sola unidad lógica de trabajo. Esto quiere decir que, la transacción se debe ejecutar completamente y no de forma parcial para evitar así inconsistencias en la base de datos.


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
              h5 Tabla
              p Arreglo bidimensional de datos. Está conformada por un encabezado con el nombre de las columnas y el cuerpo que contiene las filas de datos. Cada fila de la tabla representa un elemento independiente con los valores de sus atributos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_3.png', alt='alt')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h5 Tipo de dato
              p.pb-3 Define el conjunto de valores que pueden tomar los atributos (columnas) de una tabla. Cada columna de la tabla se asocia con un tipo de dato. 
              p.pb-3 Los tipos de datos más comunes en SQL son: 
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check.txt--azul
                  | char (texto de longitud fija).
                li 
                  i.fas.fa-check.txt--azul
                  | varchar (texto de longitud variable).
                li 
                  i.fas.fa-check.txt--azul
                  | float (datos numéricos con precisión flotante).
                li 
                  i.fas.fa-check.txt--azul
                  | date/time (fecha y hora).
                li 
                  i.fas.fa-check.txt--azul
                  | integer (enteros).
                li 
                  i.fas.fa-check.txt--azul
                  | boolean (booleanos).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_4.png', alt='alt')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h5 Relación      
              p Conexión entre las filas de dos tablas. Se muestran mediante los valores de una columna en una tabla que coinciden con los valores de una columna en otra tabla.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/modelo_relacional_5.png', alt='alt')
          
    h3.pt-5 Operadores de álgebra relacional

    p.pb-4 El álgebra relacional es un lenguaje que define una serie de operaciones que se realizan por medio de “operadores” aplicados sobre uno o varios conjuntos de datos (tablas), produciendo como resultado un nuevo conjunto de datos (una nueva tabla). Las operaciones de álgebra relacional son similares a las del álgebra numérica, pero en este caso se aplican a tablas y no a números. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
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
          
    h5.pb-5 En la siguiente tabla, se puede apreciar la equivalencia entre nomenclatura de álgebra relacional y SQL:
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
                img.img-a.img-t(src='@/assets/curso/temas/tema4/info_tabla_0.svg', alt='alt')
              td SELECT * FROM Estudiantes
            tr
              th.no-padding 
                p.p-3 Restricción o selección
              td 
                img.img-a.img-t(src='@/assets/curso/temas/tema4/info_tabla_1.svg', alt='alt')
              td SELECT * FROM Estudiantes WHERE edad > 18
            tr
              th.no-padding 
                p.p-3 Proyección
              td 
                img.img-a.img-t(src='@/assets/curso/temas/tema4/info_tabla_2.svg', alt='alt')
              td SELECT edad, nombre FROM Estudiantes
            tr
              th.no-padding 
                p.p-3 Restricción o selección
              td 
                img.img-a.img-t(src='@/assets/curso/temas/tema4/info_tabla_3.svg', alt='alt')
              td SELECT edad, nombre FROM Estudiantes WHERE edad > 18
              
    h3.pt-5 Sintaxis SQL
      
    p SQL es el lenguaje estándar de consultas a las bases de datos. Estas consultas permiten almacenar, manipular y recuperar datos de BD relacionales. Al ser SQL un lenguaje estandarizado permite desplegar implementaciones de este mismo lenguaje, en diferentes sistemas con cambios mínimos. (Orbegozo, 2019)
    
    h5.pb-2 Las sentencias SQL se pueden agrupar por funcionalidades:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema4/1.svg', alt='alt')
          
    p.pb-4 Las sentencias en SQL no son sensibles a mayúsculas y minúsculas, pero se recomienda usar estos comandos en mayúsculas sostenidas para diferenciarlos de los nombres de tablas y columnas.

    p.pb-4 <b>Ejemplo:</b> CREATE DATATABASE nombrebasedatos;

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema4/sintaxis_sql_4.svg', alt='alt')
    
    .row.justify-content-center.align-items-center.mb-5
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="Consultas y operaciones básicas con SQL")
            .row
              .col-md-8
                h4.pb-3 Consultas y operaciones básicas con SQL
                
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Traer TODAS las columnas de una tabla:

                .crd.tarjeta--azul
                  p.ms-5 SELECT * FROM tabla; 
                
                ul.ps-3.lista-ul  
                  li 
                    i.fas.fa-check.txt--azul
                    | Traer dos o más columnas de una tabla (los nombres de los atributos o columnas se separa con comas):
                
                .crd.tarjeta--azul
                  p.ms-5 SELECT atributo1, atributo2 FROM tabla; 

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Traer dos columnas de la base de datos y ordenar por una de ellas de forma descendente (Por defecto el comando GROUP BY ordena de forma ascendente):

                .crd.tarjeta--azul
                  p.ms-5  SELECT atributo1, atributo2 FROM tabla ORDER BY atributo2 DESC; 

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | ALIAS (AS): Permiten renombrar una columna o una tabla.

                .crd.tarjeta--azul
                  p.ms-5  SELECT atributo1 AS nuevonombre FROM tabla; 

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Filtros: Se pueden usar filtros en las consultas para traer solo los registros que cumplen con estos:

                .crd.tarjeta--azul
                  p.ms-5 SELECT nombre FROM estudiante WHERE edad > 10; 
                  p.ms-5 SELECT nombre FROM estudiante WHERE edad > 10 AND ciudad = “Cali”; 

              .col-md-4.p-4
                figure
                  img(src='@/assets/curso/temas/tema4/sintaxis_sql_5.svg', alt='alt').img100

          .py-3.py-md-4(titulo="Funciones de agregación:")
            .row
              .col-md-6
                h4.pb-3 Consultas y operaciones básicas con SQL
                
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | AVG (promedio de los valores).

                .crd.tarjeta--azul
                  p.ms-5 SELECT AVG (salario) FROM nomina.
                
                ul.ps-3.lista-ul  
                  li 
                    i.fas.fa-check.txt--azul
                    | COUNT (contar elementos)
                
                .crd.tarjeta--azul
                  p.ms-5 SELECT COUNT (salario) FROM nomina.

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | MAX (valor máximo)

                .crd.tarjeta--azul
                  p.ms-5 SELECT MAX (salario) FROM nomina.

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | MIN (valor mínimo)

                .crd.tarjeta--azul
                  p.ms-5 SELECT MIN (salario) FROM nomina.

                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | SUM (sumar valores)

                .crd.tarjeta--azul
                  p.ms-5 SELECT SUM (salario) FROM nomina.
                
              .col-md-6.pb-4
                figure.ms-3.mt-5
                  img(src='@/assets/curso/temas/tema4/sintaxis_sql_6.svg', alt='alt').img100

    .row.justify-content-center.pt-5.pb-5
      .col-12
        .row.tarjeta.tarjeta--azul.align-middle 
          .col-12.col-md-4.col-lg-4.mt-5.p-0.d-table-cell
            img(src="@/assets/curso/temas/tema4/sintaxis_sql_7.svg", alt="infografia").img100
            
          .col-12.col-md-8.col-lg-8.mt-5.mb-5
            .titulo-segundo.color-primario
              h3 Infografía comandos del lenguaje de consulta SQL
            p.pb-4 La siguiente infografía resume los principales comandos del lenguaje de consulta SQL con ejemplos de su forma de uso.

            a.boton.boton--b(:href="obtenerLink('/downloads/Infografia_comandos_del_lenguaje_de_consulta_SQL.pdf')" target="_blank")
              span Descargar 
              i.fas.fa-puzzle-piece

    h3.py-5 Procedimientos almacenados y disparadores
      
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-12.col-md-4.col-lg-4
        figure.max-width-80.ms-5
          img(src="@/assets/curso/temas/tema4/triggers.svg", alt="alt")
      .col-12.col-md-6.col-lg-6
        p.mb-4 Los procedimientos almacenados son programas recolectados en la base de datos y su implementación depende del sistema de gestión de bases de datos que se emplee. 
        p.mb-4 Este tipo de procedimientos se ejecuta directamente en el SGBD y por tanto tiene acceso directo a los datos. Esto mejora el tiempo de respuesta.

    .crd.back-example-yellow-2
      .row.ms-3.mt-3.mb-3.pt-3
        h4 Ejemplo:

      .crd.back-example-yellow.ms-4
        .row.ps-3.pt-3
          p CREATE PROCEDURE nombre([parámetro1, parámetro2,....])
          p [Atributos]
          p BEGIN Instrucciones
          p END

    p.pt-4.pb-5 Los disparadores son un tipo de procedimiento almacenado que se invoca o ejecuta automáticamente en respuesta a una modificación concreta en la base de datos. Este tipo de procedimientos están compuestos de tres partes:
    p Evento: modificación en la BD que activa el procedimiento.
    p Condición: consulta o verificación que se ejecuta al activar el disparador.
    p.pb-4 Acción: comandos que se ejecutan al activar el procedimiento y verificar que la condición se cumple.
    
    .crd.back-example-yellow-2
      .row.ms-3.mt-3.mb-3.pt-3
        h4 Ejemplo:

      .crd.back-example-yellow.ms-4
        .row.ps-3.pt-3
          p CREATE TRIGGER contar AFTER INSERT ON estudiantes
          p.ps-3 WHEN (edad > 10)
          p.ps-3 FOR EACH ROW
          p.ps-3 BEGIN
          p.ps-5 cuenta = cuenta + 1;
          p.ps-3 END


    p.pb-3.mt-5 En el siguiente video, podrá aprender más sobre la creación de Bases de datos con SQL y la realización de consultas:

    .row
      .container.tarjeta.tarjeta--blanca
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/moSBcxEgaIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

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
