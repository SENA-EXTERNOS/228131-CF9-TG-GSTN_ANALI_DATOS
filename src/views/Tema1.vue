<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la arquitectura de datos
    .row.justify-content-center.pb-5
      .tarjeta.tarjeta.tarjeta--azul.p-4
        pb-3 Avances tecnológicos como el internet de las cosas (IoT), el comercio electrónico y las redes sociales hacen que cada minuto se produzcan enormes cantidades de información de vital importancia para las organizaciones y para la vida diaria. Una parte de esta información es estructurada y tiene un modelo definido que se puede organizar en forma de tablas, hojas de cálculo y bases de datos relacionales. La otra parte de la información, la no estructurada, no tiene una estructura específica como lo son las fotografías, documentos de texto, videos y comentarios en redes sociales, pero al igual que la información estructurada, brinda elementos importantes para el análisis y toma de decisiones. La incorrecta administración de cantidad ingente de datos, hace que su manejo resulte abrumador.
    .row.justify-content-center.pt-5
      .col-8
        .row.align-middle
          .titulo-sexto.color-acento-contenido.mb-2.pr-2
            h5 Figura 1
            br
            em Ejemplo de Cohesión en Python
        .row
          .col-12
            img(src="@/assets/curso/temas/tema1/1.svg", alt="minuto_en_internet").img100
            figcaption Nota: tomada la información de https://www.statista.com            

    .row.justify-content-center.pt-5
      .col-12
        p Las empresas pueden (y deben) sacar provecho de los datos que generan día a día y esto es posible por medio de los sistemas de información, los cuales permiten recolectar, almacenar, procesar y explotar los datos disponibles para que sirvan de insumo para la planificación y la toma de decisiones. Así las decisiones estarán sustentadas en información y no en la intuición.
    
    h3.pt-5 Conceptos básicos: datos e información
    .row.justify-content-center.pt-2
      .col-12
        p Los siguientes son algunos conceptos básicos necesarios para comprender cómo trabajar con los diversos tipos de datos que existen en cada organización y cómo se pueden gestionar a través de los sistemas de información para aprovecharlos en la gestión estratégica y en la toma de decisiones:

    
    .imgCont.m-auto
      .row.justify-content-center.mb-4
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/puntos_calientes.svg', alt='', style='')

          .tarjeta.color-acento-botones.p-4(x="16.8%" y="85%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Datos
            p.mb-0.text-center Un dato es una representación simbólica de un atributo o característica de un elemento o evento. Por sí solo carece de significado. Los datos pueden ser de diferentes tipos: números, letras, objetos, figuras, entre otros.

          
          .tarjeta.color-acento-botones.p-4(x="51.5%" y="13.5%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Información
            p.mb-0.text-center La información es un dato o conjunto de datos con un contexto que les da significado. Son datos que han sido organizados, etiquetados y puestos en contexto.

          
          .tarjeta.color-acento-botones.p-4(x="83%" y="85%" numero="" style='border-radius: 10px; background-color: #FFE8C8')
            h5.mb-3.text-center Conocimiento
            p.mb-0.text-center El conocimiento es la interpretación de la información. En el conocimiento se involucran la información, la reflexión, la experiencia para proporcionar valor.

    .row.justify-content-center.pt-2
      .col-12.pb-3.pt-5
        b Ejemplo: 
        span dato versus conocimiento    
      .tabla-b.color-secundario.col-10.pt-3
          tbody
            tr
              th Dato
              td 21
              td Sin un contexto e información adicional carece de sentido.
            tr
              th Información
              td Utilidad año 2021: 21 %
              td Al darle contexto como el nombre de la variable y tipo adquiere significado.
            tr
              th Conocimiento
              td La empresa superó el año anterior el porcentaje de utilidad esperado.
              td Se demuestra la comprensión y utilización de la información.

    .row.justify-content-center.pt-5.ps-3.pe-3.pb-5
      .col-12.col-md-6.tarjeta.back-like.p-0
        .row.justify-content-center.pt-5
          .figure.col-5.pt-0
            img(src="@/assets/curso/temas/tema1/datos_estructurados.svg", alt="alt").img50
        .row.justify-content-center.p-0.pt-3  
          .col-5.pb-3
            b.title-like Datos estructurados 
        .row.justify-content-center.pb-3
          .col-10
            p.pb-3.font-white Se consideran datos estructurados cuando tienen una estructura bien definida, siguen un orden y son de fácil acceso y uso para los sistemas de información y las personas. 
            p.font-white Se suelen mostrar en filas y columnas con títulos. Por ejemplo: transacciones de compra / venta, base de datos de contactos, inventario de implementos.
      .col-12.col-md-6.tarjeta.back-dislike.p-0
        .row.justify-content-center.pt-5
          .figure.col-5.p-0
            img(src="@/assets/curso/temas/tema1/dato_no_estructurados.svg", alt="alt").img50
        .row.justify-content-center.pt-3  
          .col-5.pb-3
            b.title-like Datos no estructurados
        .row.justify-content-center.pb-3
          .col-10
            p Este tipo de datos no tienen un modelo o estructura muy definida y pueden tener diferentes formatos como texto, imágenes, sonido, video lo que hace más difícil su procesamiento y análisis. 
            p.pt-3.pb-3 La mayor parte de la información relevante para la organización se puede clasificar como “no estructurada”. Por ejemplo: correos electrónicos, documentos de texto, imágenes de catálogo, audios, videos, comentarios en redes sociales.

    h3.pt-5 ¿Qué es la arquitectura de datos?

    .row.justify-content-center.pb-5  
      .col-10
        .row.justify-content-center.pb-5
          .figure.col-md-5.pt-5
            img(src="@/assets/curso/temas/tema1/arquitectura_datos.svg", alt="arquitectura_datos").img50                
          .col-md-7.mb-4.mb-md-0.ps-4.tarjeta.clr-paleYellow.p-4
            p.pb-3 La arquitectura de datos es un conjunto de métodos que permiten definir:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cómo va la organización a trabajar con los datos disponibles.     
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cómo se van a almacenar, procesar y presentar estos datos, teniendo en cuenta los recursos y necesidades de los interesados.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cómo se van a integrar modelos, políticas y reglas disponibles.   
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Su principal objetivo es el de modelar el sistema de datos de la organización, identificando:     
              ol.lista-ol--cuadro.ps-5             
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Tipos de datos.
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Fuentes de datos.
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | Las relaciones entre los datos y cómo estos interactúan.

        .row
          .col-10.col-md-4.tarjeta.clr-paleYellow.p-4
              p.pb-3 Realizar correctamente la definición de la arquitectura de datos de la organización permite:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Que se pueda sacar provecho a la cantidad de datos existentes.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Que los analistas realicen las actividades de procesamiento y análisis de una forma eficiente.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Una ventaja competitiva en comparación con las empresa u organizaciones que no cuentan con arquitecturas de datos claras.  
          .col-2
          .col-md-6
            .figure
              img(src="@/assets/curso/temas/tema1/arquitectura_2.svg", alt="arquitectura_datos").img50                
     
    b La arquitectura de datos definida debe cumplir con las siguientes características:

    .row.justify-content-center.pt-5.pb-3
      .col-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Integración de datos     
              p Se deben identificar las diversas fuentes de datos existentes en la organización y las relaciones entre los datos que ofrecen. Por medio del uso de interfaces de programación de aplicaciones (API: Application Programming Interface por sus siglas en inglés), se pueden brindar mecanismos que permitan la comunicación entre diferentes componentes del sistema de información.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/integracion.png', alt='integracion')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/seguridad.png', alt='seguridad')
            .col-md-6
              h3 Seguridad     
              p Se deben identificar las amenazas existentes que puedan afectar la calidad, disponibilidad o confidencialidad de la información y desarrollar herramientas que disminuyan los riesgos de estas amenazas.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Escalabilidad     
              p Los sistemas de información están en constante crecimiento. La arquitectura de datos definida debe estar preparada para el aumento en la cantidad de datos y en la capacidad de procesamiento. Las soluciones en la nube facilitan esta escalabilidad brindándole al usuario acceder a los recursos bajo demanda (en caso de necesitar más espacio o mayor capacidad de almacenamiento).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/escalabilidad.svg', alt='escalabilidad')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/adaptabilidad.png', alt='adaptabilidad')
            .col-md-6
              h3 Adaptabilidad     
              p La arquitectura de datos debe ser flexible para ajustarse a las diferentes necesidades de la organización y para los diversos roles o tipos de usuario.
    
    h3.pt-5 Modelos, políticas y reglas
    .row.mb-5
      .col-10.position-relative.pr-3
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/modelos.svg", alt="modelos", style="width: 350px;")
        .crd.crd--avatarHorizontal.crd-py-4.back-yellow
          .row.align-items-center
            .col-12.ms-4.mt-4
              p La arquitectura de datos es una rama de la arquitectura empresarial que abarca los modelos, políticas, reglas y estándares que orientan la recolección, el almacenamiento, la disposición, integración y el uso de los datos al interior de las organizaciones y su objetivo es traducir las necesidades de la organización en requerimientos de datos y herramientas para aprovechar la información y así atender dichas necesidades.     
        .crd.crd--avatarHorizontal.crd--last.py-4.back-yellow-2
          .row.align-items-center
            .col-12.ms-4
              p Existen diferentes marcos de referencia que definen las reglas y características de los sistemas de información a desarrollar, así como las mejores prácticas para la realización de este proceso de diseño e implementación de una arquitectura de datos acorde a los requerimientos de la organización. Estos marcos de referencia sirven como guías para un entendimiento detallado de las alternativas de arquitecturas disponibles según las características de cada organización y cómo realizar su implementación paso a paso para lograr un uso adecuado de las TIC y la información, así como el cumplimiento de las necesidades de la organización.

    h5 El análisis y conocimiento de los diferentes marcos de referencia disponibles permitirá seleccionar la mejor opción según las necesidades de la organización, adaptando los modelos a las características particulares del negocio.

    .row.pt-5
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="DMBOOK")
            .row.justify-content-center
              .col-md-6
                h4.pb3 DMBOK (Data Management Book of Knowledge)
                p.pb-2 Creado por la Asociación de profesionales en gerencia de datos (DAMA Internacional), presenta una visión estándar sobre las funciones de la gestión de datos incluyendo: terminología y definiciones, funciones, procesos y prácticas, roles y responsabilidades, métricas.
                p.pb-2 Este marco de referencia propone las siguientes áreas de conocimiento: 
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Gobierno de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Arquitectura de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Almacenamiento y operación de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Seguridad de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Integración e interoperabilidad de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Documentación y contenido.
                  li 
                    i.fas.fa-check.txt--azul
                    | Referencias y datos maestros.
                  li 
                    i.fas.fa-check.txt--azul
                    | Bodega de datos e inteligencia de negocios.
                  li 
                    i.fas.fa-check.txt--azul
                    | Metadatos y calidad. 
                p.pb-2 Además, define elementos de contexto soportados sobre tres pilares que son: personas, procesos y tecnologías.

              .col-md-6
                img.img-a.img-t(src='@/assets/curso/temas/tema1/dmbok-.png', alt='dmbok')
                figcaption Nota: adaptada de Data Management Book of Knowledge. DAMA Internacional (2022). 

          .py-3.py-md-4(titulo="DGF")
            .row.justify-content-center
              .col-md-6
                h4.pb3 DGF (Data Governance Framework)
                p.pb-2 Provee una estructura lógica para clasificar y ejecutar actividades para la toma de decisiones involucrando estructuras, personas y procesos de la organización. 
                p.pb-2 El marco de referencia DGF está formado por 10 componentes universales. Independientemente del enfoque de la organización, se incluirán los siguientes 10 componentes en el modelo, aunque el énfasis de cada uno varía según los requerimientos de la organización. Estos componentes son:  
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Misión y visión.
                  li 
                    i.fas.fa-check.txt--azul
                    | Objetivos y métricas.
                  li 
                    i.fas.fa-check.txt--azul
                    | Reglas (definiciones y políticas).
                  li 
                    i.fas.fa-check.txt--azul
                    | Derechos de decisión.
                  li 
                    i.fas.fa-check.txt--azul
                    | Responsabilidades.
                  li 
                    i.fas.fa-check.txt--azul
                    | Controles.
                  li 
                    i.fas.fa-check.txt--azul
                    p.mb-0 #[i Stakeholders].
                  li 
                    i.fas.fa-check.txt--azul
                    | Oficina de gobierno de datos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Administradores de datos. 
                  li 
                    i.fas.fa-check.txt--azul
                    p.mb-0 Procesos de gobernanza.

              .col-md-6
                img.img-a.img-t(src='@/assets/curso/temas/tema1/dgf-.svg', alt='dgf') 
                figcaption Nota: adaptada del Marco de gobierno de datos de la DGI (s.f.). 

          .py-3.py-md-4(titulo="TOGAF")
            .row.justify-content-center
              .col-md-6
                h4.pb3 TOGAF (The Open Group Architecture Framework)
                p.pb-2 Define el proceso de creación de la arquitectura de datos como parte integral de la arquitectura de la organización.
                p.pb-2 Está sustentado bajo el modelo TAFIM (Technical Architecture Framework for Information Management), desarrollado por el Ministerio de Defensa de EE.UU. y a la fecha es administrado por The Open Group en su versión 9.2.
                p.pb-2 Este modelo de referencia utiliza un modelo iterativo de buenas prácticas conocido como “Método de desarrollo de arquitectura” (Architecture Development Method – ADM en inglés), con las siguientes fases: 
                ul.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Fase preliminar.
                  li 
                    i.fas.fa-check.txt--azul
                    | Gestión de requerimientos:
                ol.lista-ol--cuadro.ps-5
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    | Visión de arquitectura.

                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Arquitectura de negocio.

                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    | Arquitectura de sistemas de información.

                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    | Arquitectura tecnológica.

                  li 
                    .lista-ol--cuadro__vineta
                      span e
                    | Oportunidades y soluciones.

                  li 
                    .lista-ol--cuadro__vineta
                      span f
                    | Plan de migración. 

                  li 
                    .lista-ol--cuadro__vineta
                      span g
                    | Gestión de cambio de la arquitectura.     
              .col-md-6
                img.img-a.img-t(src='@/assets/curso/temas/tema1/togaf-.png', alt='togaf') 
                figcaption Nota: adaptada de El estándar TOGAF (2018).   
          .py-3.py-md-4(titulo="COBIT")
            .row.justify-content-center
              .col-md-6
                h4.pb3 COBIT (Control Objectives for Information and related Tecnology)
                p.pb-2 Es empleado como modelo para auditar la gestión y control de sistemas de información. Este marco de gestión de tecnologías de información, desarrollado por ISACA en 1996, permite a las organizaciones desarrollar, organizar e implementar sus estrategias en torno a la gestión de la información y la gobernanza.
                p.pb-2 Sus cinco componentes principales son: 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Marco.

                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Descripción de los procesos.

                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Objetivos de control.

                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Directrices de gestión. 

                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Modelos de madurez.     
                p.pt-2 Tiene como principios clave:
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Cumplir con las necesidades clave de los interesados.     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Cubrir la empresa de extremo a extremo.
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Integrar múltiples marcos bajo un paraguas.     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Fomentar un enfoque holístico para los negocios.     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Alejar el gobierno de la administración.     

              .col-md-6.pb-4
                img.img-a.img-t(src='@/assets/curso/temas/tema1/cobit.png', alt='cobit').img100
                figcaption Nota: adaptada de Jiménez (2018).  Geniusitt. 

    h3.pt-5 Ciclo de desarrollo de la arquitectura de datos

    .row.justify-content-center.pb-5
      .col-10
        .row.align-middle 
          .col-md-4.col-lg-4
            .tarjeta.h-50.d-flex.p-4.align-middle
              figure
                img(src="@/assets/curso/temas/tema1/ciclos.png", alt="ciclos").img150
          .col-md-8.col-lg-8.mt-4
              p.pt-2 El proceso de arquitectura de datos se debe desarrollar durante las fases iniciales de diseño y planificación del sistema de información, con el fin de establecer de manera oportuna y clara cómo se procesarán, utilizarán y almacenarán los datos. De la correcta realización de esta actividad dependerá en gran parte el éxito o el fracaso del sistema a implementar. Un sistema de información sin claridad en el origen y tipo de datos que utiliza o sin conocimiento de las políticas de uso de la información no será de utilidad para la organización.
    b.pt-3 Este proceso está dividido en cuatro etapas, similares a las etapas de desarrollo de arquitectura de <i>software</i>, pero enfocadas en los datos:

    .row.justify-content-center.pt-5.pb-5
      .col-10
        .row.align-middle
          .col-12.pb-3
            figure
              img(src="@/assets/curso/temas/tema1/etapas.png", alt="etapas").img50

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido
        .row(titulo="Requerimientos")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/requerimientos.png', alt='Requerimientos')
          .col-md-8.mb-4.mb-md-0
            b Requerimientos
            p.pt-3 Se enfoca en la captura, documentación y priorización de requisitos que influyan en la arquitectura de datos. 
            p.pt-3 En esta etapa es importante:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Conocer las expectativas de los <i>stakeholders</i> (personas interesadas y/o impactadas por el proceso).

              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Los objetivos del sistema a desarrollar (qué información o <i>insights</i> se podrán obtener con la información procesada y analizada).

              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Los flujos de trabajo que describen cómo se mueve la información a través de los diferentes procesos de la organización.

              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Las condiciones o restricciones existentes en la organización para el uso y difusión de la información.      

              li 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 Aquí también se analizarán los orígenes de los datos (fuentes de información), su tipo (estructurados o no estructurados), dimensiones y periodicidad. 
            p.tarjeta--azul.p-4 Esta etapa debe ser documentada de forma clara y detallada para no omitir detalles que puedan impactar negativamente el diseño y desarrollo del sistema de información.
        .row(titulo="Diseño")
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/diseno.png', alt='diseno')
          .col-md-5.mb-4.mb-md-0
            b Diseño
            p.pt-3 En esta etapa se toman los requerimientos documentados y se definen las estructuras necesarias para el funcionamiento del sistema de información. 
            p.pt-3 Esta definición se hace utilizando patrones de diseños según las necesidades de la organización. En esta fase también se decide cuáles serán las tecnologías a utilizar para la gestión y almacenamiento de los datos y se identifican las relaciones entre los datos y cuál será el flujo de la información desde su origen hasta el final del proceso.
        .row(titulo="Documentación")
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/documentacion.png', alt='Documentación')
          .col-md-5.mb-4.mb-md-0
            b Documentación
            p.pt-3 Se documenta el diseño realizado, utilizando representaciones ya establecidas y estandarizadas para facilitar la comunicación del diseño a los demás actores del proceso.  
            p.pt-3 Algunas herramientas que permiten plasmar el diseño realizado son: 
            ul.ps-3.lista-ul
                  li 
                    i.fas.fa-check.txt--azul
                    | Mapas de procesos.
                  li 
                    i.fas.fa-check.txt--azul
                    | Diagramas de flujo.
                  li 
                    i.fas.fa-check.txt--azul
                    | Diagramas de entidad - relación.   
        .row(titulo="Evaluación")
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/evaluacion.png', alt='evaluacion')
          .col-md-5.mb-4.mb-md-0
            b Evaluación
            p.pt-3 Esta etapa permite detectar de manera temprana fallas y oportunidades de mejora en el diseño realizado. Esto permitirá identificar y corregir posibles problemas antes de pasar a la fase de desarrollo.

   


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
