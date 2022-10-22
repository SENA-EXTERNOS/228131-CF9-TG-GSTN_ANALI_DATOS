<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos de datos

    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 El modelado de datos es un proceso que permite analizar y definir los datos generados por la organización y la relación entre estos, con el fin de identificar sus características y dependencias. Un modelo de datos bien definido permite crear sistemas de información eficientes con estructuras de datos simplificadas mejorando así el rendimiento del sistema y por consiguiente los resultados que arroja.
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema2/modelo_datos.png").img100

    .row
      .col-12.col-md-8.col-lg-8
        TabsA.color-acento-botones       
          .tarjeta.tarjeta--azul.clr--azul.p-4(titulo="Niveles de abstracción ")
            h4 Niveles de abstracción
            p Existen tres niveles de abstracción de modelado de datos que son:
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.txt--azul
                |  Modelado conceptual
              li 
                i.fas.fa-check.txt--azul
                | Modelado lógico
              li 
                i.fas.fa-check.txt--azul
                | Modelado físico
            P Estos modelos permiten determinar y visualizar cómo se gestionan los datos de la organización.

          .tarjeta.tarjeta--azul.clr--gris.p-4(titulo="Modelo conceptual")    
            h4 Modelo conceptual
            p.pb-2 El modelo conceptual es el nivel de abstracción más alto en el cual se representa la estructura general y el contenido, pero sin mucho detalle. En este se identifican los conjuntos de datos y el flujo de estos en la organización. La herramienta utilizada para esta representación es el diagrama entidad - relación.
            p En este modelo se pueden encontrar:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-check.txt--azul
                | Datos del sistema de información
              li 
                i.fas.fa-check.txt--azul
                | Atributos de los datos (condiciones y restricciones)
              li 
                i.fas.fa-check.txt--azul
                | Reglas empresariales (relaciones entre los datos)
              li 
                i.fas.fa-check.txt--azul
                | Cómo se organizan los datos
              li 
                i.fas.fa-check.txt--azul
                | Requerimientos de seguridad e integridad de datos

          .tarjeta.tarjeta--azul.clr--gris.p-4(titulo="Modelo Lógico")    
            h4 Modelo Lógico
            p.pb-2 Este modelo describe los datos con más detalles que el modelo conceptual, pero sin incluir especificaciones propias de la base de datos. Esto con el fin de poder aplicar el modelo a diferentes tecnologías. En este modelo se describen los atributos de los elementos modelados en el nivel de modelo conceptual.
            p En este modelo se pueden encontrar:
            ul.lista-ul.mb-4
              li 
                i.fas.fa-check.txt--azul
                | Tipos de datos de los atributos (número, cadena, fecha)
              li 
                i.fas.fa-check.txt--azul
                | Relaciones de datos
              li 
                i.fas.fa-check.txt--azul
                | Llaves primarias de los datos
          
          .tarjeta.tarjeta--azul.clr--gris.p-4(titulo="Modelo físico")    
            h4 Modelo físico
            p.pb-2 En el modelo físico se describe de forma detallada cómo se implementará el modelo lógico. Incluye las estructuras de almacenamiento y método de acceso a los datos y depende del sistema de gestión de bases de datos (SGBD) específico que se haya seleccionado. De un solo modelo lógico se pueden derivar varios modelos físicos según el SGBD a utilizar. 
            p En este modelo se pueden encontrar: 
            ul.lista-ul.mb-4
              li 
                i.fas.fa-check.txt--azul
                | Tipos de datos de los atributos (según el SGBD seleccionado)
              li 
                i.fas.fa-check.txt--azul
                | Relaciones de datos (según el SGBD seleccionado)
              li 
                i.fas.fa-check.txt--azul
                | Información adicional del modelo
      
      .col-12.col-md-4.col-lg-4
        .tarjeta.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/temas/tema2/modelo_datos_2.png", alt="alt")

    Separador

    #t_2_1.titulo-segundo.color-primario.p-3
      h2 2.1  Pensamiento computacional 
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-12.col-md-4.col-lg-4
        figure.max-width-80.ms-5
          img(src="@/assets/curso/temas/tema2/que_son_modelos.svg", alt="alt")
      .col-12.col-md-6.col-lg-6
        p.mb-4 Un modelo de datos es una representación visual del sistema de información para identificar las estructuras de datos que lo componen, así como las conexiones entre estas estructuras.
        p.mb-4 Estos modelos pueden tener diferentes niveles de abstracción según la etapa del proceso de diseño en la que se encuentren. Los modelos de datos conceptuales (de más alto nivel) permiten visualizar las relaciones entre los datos mientras que los modelos lógicos representan mejor la forma en la que serán almacenados los datos en el servidor.
    
    
    Separador

    #t_2_2.titulo-segundo.color-primario.p-3
      h2 2.2  Pensamiento computacional 
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-12.col-md-5.col-lg-5
        figure.max-width-80.ms-5
          img(src="@/assets/curso/temas/tema2/tipo_modelos_datos.svg", alt="alt")
      .col-12.col-md-6.col-lg-6
        p.mb-4 Existen varios tipos de modelos de datos que se diferencian por la forma en la que se vinculan los registros entre sí: 
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Modelo jerárquico
          li 
            i.fas.fa-check
            | Modelo de red
          li 
            i.fas.fa-check
            | Modelo relacional
          li 
            i.fas.fa-check
            | Modelo orientado a objetos, entre otros

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Modelo relacional
            p.pb-2.pe-5 Clasifica los datos en tablas que constan de columnas y filas. Las columnas son los atributos del elemento en cuestión (conocido también como entidad). Uno de los atributos (o una combinación de ellos) será la llave primaria. Cada fila de la tabla (también conocida como tupla o registro) recoge los datos sobre una instancia específica de la entidad.
            p.pe-5 En el ejemplo de la imagen, se observa que, en el caso de la primera tabla, la llave primaria es el “ID Vendedor” el cual es un atributo único (no se repite en las otras filas). Esa llave primera se usa en la segunda tabla para relacionar la información del vendedor con las ventas realizadas. El vendedor con el ID 577856 tiene dos registros en la segunda tabla (ventas). Para el vendedor con el ID 1203565 no se registran ventas en la tabla.
          .col-md-6
            .titulo-sexto.color-acento-contenido.mb-2.pr-2
              h5 Tabla 1.
              br
              em Modelo relacional.
            figure.border-end-5.border-light
              img(src='@/assets/curso/temas/tema2/tipo_modelo_datos_1.svg')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h5 Modelo jerárquico
            p.pb-2.pe-5 El modelo jerárquico organiza los datos en una estructura similar a un árbol, donde cada registro tiene un solo padre o raíz. Cada padre puede tener varios hijos, pero cada hijo viene de un solo padre (relación 1: N también llamada 1 a muchos).
            p.pb-5.pe-5 En el ejemplo de la imagen, se observa que el DEPTO1 es el padre de los elementos PROFESOR 1, PROFESOR 2 y PROFESOR 3. Cada elemento “Profesor” pertenece solo a 1 departamento (un solo padre).
            h5 Modelo en red <em>(Network)</em> 
            p.pb-2.pe-5 Es una expansión del modelo jerárquico basado en la teoría de conjuntos. Este modelo, a diferencia del modelo jerárquico si permite relaciones muchos a muchos (N: N)
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tipo_modelo_datos_2.svg')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h5 Modelo entidad - relación (ER) 
            p.pb-2.pe-5 Este modelo utiliza diagramas para representar las relaciones entre las entidades (personas, objetos, conceptos) de una base de datos. Existen diferentes herramientas para la realización de este tipo de modelos entre ellas:<em> GitMind, Lucidchart y Visual Paradigm.</em>
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tipo_modelo_datos_3.svg')

    h5 Elementos del modelo entidad - relación (ER)

    p.pb-3 El modelo entidad relación, tiene los siguientes elementos:

    .row.justify-content-center.pb-5
      .col-9.pb-5
        figure
          img(src='@/assets/curso/temas/tema2/modelo_entidad_relacion.svg')

    
    .row.justify-content-center.mb-5
      .col-lg-11.position-relative
        .avatar-2
          figure
            img(src="@/assets/curso/temas/tema2/avatar.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4.back-yellow
          .row.align-items-center
            .col-auto
              figure.first-item-avatar-tema2
                img(src="@/assets/curso/temas/tema2/conectada_1.svg", alt="alt").img100
            .col.ms-5
              h5 Calidad de la información
              p Es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, la cual le permitirá obtener información concreta, clara y medible. Es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido. 
        .crd.crd--avatarHorizontal.py-4.back-yellow-2
          .row.align-items-center
            .col-auto
              figure.second-item-avatar-tema2
                img(src="@/assets/curso/temas/tema2/conectada_2.svg", alt="alt").img100
            .col.ms-5
              h5 Aplicación de técnicas
              p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos.
        .crd.crd--avatarHorizontal.crd--last.py-4.back-yellow
          .row.align-items-center
            .col-auto
              figure.third-item-avatar-tema2
                img(src="@/assets/curso/temas/tema2/conectada_3.svg", alt="alt").img100
            .col.ms-5
              h5 Comunicación correcta de los resultados
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información. 

    Separador

    #t_2_3.titulo-segundo.color-primario.p-3
      h2 2.3  Selección del modelo de datos adecuado para el negocio

    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Es necesario analizar las fortalezas de cada modelo en particular y los requerimientos del negocio para seleccionar los modelos que mejor describan a la organización. No existe un modelo más idóneo que otro, pero sí algunos que por sus características permiten describir mejor los datos que tiene la organización y las relaciones entre estos.
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema2/seleccion_modelo_datos.svg").img100
    
    p De la correcta selección y elaboración del modelo de datos de la organización dependerá el éxito del sistema a desarrollar. Aquí, es importante tener en cuenta el sistema de gestión de base de datos que se esté utilizando (si ya existe uno en uso en la organización) para validar que sea compatible con el modelo de datos a utilizar.

    h5 La siguiente tabla compara algunos de los modelos de datos disponibles para facilitar su análisis:

    .row.justify-content-center.pt-4.pb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-2.pr-2
          h5 Tabla 2.
          br
          em Comparación de modelos de datos
        .col-12
          .tabla-b.color-acento-contenido
            table
              tr.tabla-b__header
                th.border-0.m-0.p-0.no-padding Modelo
                th.border-0.m-0.p-0 Ventajas
                th.border-0.m-0.p-0 Desventajas
              tr
                th.no-padding 
                  p.p-3 <b>Jerárquico</b>
                td En este modelo las relaciones son uno a uno y por tanto la estructura de la base de datos es fácil de entender incluso para personas sin previa experiencia.
                td Existe poca independencia entre los registros. Para acceder a un registro debo recorrer todos los nodos padres, limitando la flexibilidad en la navegación.
              tr
                th.no-padding 
                  p.p-3 <b>Relacional</b>
                td Es un modelo sencillo que permite manejar grandes cantidades de datos con relaciones entre ellos de forma segura y uniforme.
                td Presenta falencias a la hora de gestionar datos de diversos tipos como son gráficos, multimedia e información geográfica.
              tr
                th.no-padding 
                  p.p-3 <b>Entidad - relación</b>
                td 
                  p.pb-2 Permite un diseño de alto nivel que permite modelar con precisión el esquema de datos.
                  p Usa diagramas estandarizados que facilitan su comunicación.
                td 
                  p.pb-2 No es implementado directamente por el SGBD.
                  p Por lo general es necesario otro modelo adicional de más bajo nivel para su implementación.


        

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema2',
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
