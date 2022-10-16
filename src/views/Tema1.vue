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
            p.pt-3.pb/3 La mayor parte de la información relevante para la organización se puede clasificar como “no estructurada”. Por ejemplo: correos electrónicos, documentos de texto, imágenes de catálogo, audios, videos, comentarios en redes sociales.
      Separador

    #t_1_2.titulo-segundo.color-acento-contenido.pt-3.pb-3
      h2 1.2   ¿Qué es la arquitectura de datos?

    .row.justify-content-center.pb-5  
      .col-10
        .row.justify-content-center.pb-5
          .figure.col-md-5.pt-5
            img(src="@/assets/curso/temas/tema1/arquitectura_datos.svg", alt="arquitectura_datos").img50                
          .col-md-7.mb-4.mb-md-0.ps-4.tarjeta.tarjeta--azul
            p.pb-3 La arquitectura de datos es un conjunto de métodos que permiten definir:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cómo va la organización a trabajar con los datos disponibles     
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cómo se van a almacenar, procesar y presentar estos datos teniendo en cuenta los recursos y necesidades de los interesados
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cómo se van a integrar modelos, políticas y reglas disponibles   
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Su principal objetivo es el de modelar el sistema de datos de la organización, identificando:     
            .row  
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Tipos de datos
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Fuentes de datos
              li 
                .lista-ol--cuadro__vineta
                  span c
                | Las relaciones entre los datos y cómo estos interactúan

        .row
          .col-10.col-md-4.tarjeta.tarjeta--azul
              p.pb-3 Realizar correctamente la definición de la arquitectura de datos de la organización permite:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Que se pueda sacar provecho a la cantidad de datos existentes
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Que los analistas realicen las actividades de procesamiento y análisis de una forma eficiente
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Una ventaja competitiva en comparación con las empresa u organizaciones que no cuentan con arquitecturas de datos claras  
          .col-md-8
            .figure
              img(src="@/assets/curso/temas/tema1/arquitectura_2.svg", alt="arquitectura_datos").img50                
     
    b La arquitectura de datos definida debe cumplir con las siguientes características:

    .row.justify-content-center.pt-5.pb-3
      .col-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Integración de datos:     
              p Se debe identificar las diversas fuentes de datos existentes en la organización y las relaciones entre los datos que ofrecen. Por medio del uso de interfaces de programación de aplicaciones (API: Application Programming Interface por sus siglas en inglés) se pueden brindar mecanismos que permitan la comunicación entre diferentes componentes el sistema de información.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/integracion.png', alt='integracion')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/seguridad.png', alt='seguridad')
            .col-md-6
              h3 Seguridad:     
              p Se deben identificar las amenazas existentes que puedan afectar la calidad, disponibilidad o confidencialidad de la información y desarrollar herramientas que disminuyan los riesgos de estas amenazas.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Escalabilidad:     
              p Los sistemas de información están en constante crecimiento. La arquitectura de datos definida debe estar preparada para el aumento en la cantidad de datos y en la capacidad de procesamiento. Las soluciones en la nube facilitan esta escalabilidad brindándole al usuario acceder a los recursos bajo demanda (en caso de necesitar más espacio o mayor capacidad de almacenamiento).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/escalabilidad.svg', alt='escalabilidad')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/adaptabilidad.png', alt='adaptabilidad')
            .col-md-6
              h3 Adaptabilidad:     
              p La arquitectura de datos debe ser flexible para ajustarse a las diferentes necesidades de la organización y para los diversos roles o tipos de usuario
      Separador
    #t_1_3.titulo-segundo.color-acento-contenido.pt-3.pb-3
      h2 1.3  Modelos, políticas y reglas
    .row.justify-content-center.mb-5
      .col-12.position-relative.pr-3
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/modelos.svg", alt="modelos", style="width: 500px;").img250
        .crd.crd--avatarHorizontal.crd-py-4.back-yellow
          .row.align-items-center
            .col-7.ms-4
              p La arquitectura de datos es una rama de la arquitectura empresarial que abarca los modelos, políticas, reglas y estándares que orientan la recolección, el almacenamiento, la disposición, integración y el uso de los datos al interior de las organizaciones y su objetivo es traducir las necesidades de la organización en requerimientos de datos y herramientas para aprovechar la información y así atender dichas necesidades.     
        .crd.crd--avatarHorizontal.crd--last.py-4.back-yellow-2
          .row.align-items-center
            .col-7.ms-4
              p Existen diferentes marcos de referencia que definen las reglas y características de los sistemas de información a desarrollar, así como las mejores prácticas para la realización de este proceso de diseño e implementación de una arquitectura de datos acorde a los requerimientos de la organización. Estos marcos de referencia sirven como guías para un entendimiento detallado de las alternativas de arquitecturas disponibles según las características de cada organización y cómo realizar su implementación paso a paso para lograr un uso adecuado de las TIC y la información, así como el cumplimiento de las necesidades de la organización.

    b El análisis y conocimiento de los diferentes marcos de referencia disponibles permitirá seleccionar la mejor opción según las necesidades de la organización, adaptando los modelos a las características particulares del negocio.

    .row.pt-5
      .container.tarjeta.tarjeta--blanca
        TabsC.color-primario
          .py-3.py-md-4(titulo="DMBOOK")
            .row
              .col-md-6
                h4.pb3 DMBOK (Data Management Book of Knowledge):
                p.pb-2 Creado por la Asociación de profesionales en gerencia de datos (DAMA Internacional), presenta una visión estándar sobre las funciones de la gestión de datos incluyendo: terminología y definiciones, funciones, procesos y prácticas, roles y responsabilidades, métricas.
                p.pb-2 Este marco de referencia propone las siguientes áreas de conocimiento: 
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Gobierno de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Arquitectura de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Almacenamiento y operación de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Seguridad de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Integración e interoperabilidad de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Documentación y contenido
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Referencias y datos maestros
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Bodega de datos e inteligencia de negocios
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Metadatos y calidad. 
                p.pb-2 Además, define elementos de contexto soportados sobre tres pilares que son: personas, procesos y tecnologías.
                b.tarjeta--azul.pb-2 Para profundizar más sobre el tema (DAMA Internacional, 2022)
              .col-md-6.p-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2
                  h5 Figura 2.
                  span Data Management Book of Knowledge 
                figure
                  img(src='@/assets/curso/temas/tema1/dmbok.png', alt='dmbok').img100
                p.tarjeta--azul.pb-2 Nota: Adaptada de Data Management Book of Knowledge. DAMA Internacional (2022). 

          .py-3.py-md-4(titulo="DGF")
            .row
              .col-md-6
                h4.pb3 DGF (Data Governance Framework):
                p.pb-2 Provee una estructura lógica para clasificar y ejecutar actividades para la toma de decisiones involucrando estructuras, personas y procesos de la organización. 
                p.pb-2 El marco de referencia DGF está formado por 10 componentes universales. Independiente del enfoque de la organización se incluirán estos 10 componentes en el modelo, aunque el énfasis de cada uno varía según los requerimientos de la organización. Estos componentes son: 
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Misión y visión
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Objetivos y métricas
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Reglas (definiciones y políticas)
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Derechos de decisión
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Responsabilidades
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Controles
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Stakeholders
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Oficina de gobierno de datos
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Administradores de datos y,
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Procesos de gobernanza     
                b.tarjeta--azul.pb-2 Para profundizar más sobre el tema lea DGF (Data Governance Framework) que encuentras en el material complemento
              .col-md-6.pb-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2.pb-3
                  h5 Figura 3.
                  span Marco de gobierno de datos de la DGI
                figure
                  img(src='@/assets/curso/temas/tema1/dgf.svg', alt='dgf').img100
                p.tarjeta--azul.pb-2.pt-3 Nota: Adaptada del Marco de gobierno de datos de la DGI. Data Governance Institute, (s.f.).  

          .py-3.py-md-4(titulo="TOGAF")
            .row
              .col-md-6
                h4.pb3 TOGAF (The Open Group Architecture Framework):
                p.pb-2 Define el proceso de creación de la arquitectura de datos como parte integral de la arquitectura de la organización.
                p.pb-2 Está sustentado bajo el modelo TAFIM (Technical Architecture Framework for Information Management) desarrollado por el Ministerio de Defensa de EEUU. y a la fecha es administrado por The Open Group en su versión 9.2.
                p.pb-2 Este modelo de referencia utiliza un modelo iterativo de buenas prácticas conocido como Método de desarrollo de arquitectura (Architecture Development Method – ADM en inglés) con las siguientes fases: 
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Fase preliminar
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Gestión de requerimientos:
            .row
              .col-md-6
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    | Visión de arquitectura
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Arquitectura de negocio
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    | Arquitectura de sistemas de información
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span d
                    | Arquitectura tecnológica
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span e
                    | Oportunidades y soluciones
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span f
                    | Plan de migración y,
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span g
                    | Gestión de cambio de la arquitectura   
                b.tarjeta--azul.pb-2 Para profundizar más sobre el tema lea DGF (Data Governance Framework) que encuentras en el material complemento
              .col-md-6.pb-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2.pb-3
                  h5 Figura 4.
                  span El estándar TOGAF
                .col-10.figure
                  img(src='@/assets/curso/temas/tema1/togaf.png', alt='togaf').img100
                p.tarjeta--azul.pb-2.pt-3 Nota: Adaptada de El estándar TOGAF. The Open Group (2018).   
          .py-3.py-md-4(titulo="COBIT")
            .row
              .col-md-6
                h4.pb3 COBIT (Control Objectives for Information and related Tecnology):
                p.pb-2 Es empleado como modelo para auditar la gestión y control de sistemas de información. Este marco de gestión de tecnologías de información, desarrollado por ISACA en 1996, permite a las organizaciones desarrollar, organizar e implementar sus estrategias en torno a la gestión de la información y la gobernanza.
                p.pb-2 Sus cinco componentes principales son: 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Marco
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Descripción de los procesos
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Objetivos de control
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Directrices de gestión y,
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Modelos de madurez     
                p.pt-2 Tiene como principios clave:
                ul.ps-3.lista-ul
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Cumplir con las necesidades clave de los interesados     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Cubrir la empresa de extremo a extremo
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Integrar múltiples marcos bajo un paraguas     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Fomentar un enfoque holístico para los negocios     
                  li 
                    i.fas.fa-angle-right.txt--orange
                    | Alejar el gobierno de la administración     
                b.tarjeta--azul.pb-2 Para profundizar más sobre el tema lea COBIT (Control Objetives for....) que encuentras en el material complemento
              .col-md-6.pb-4
                .titulo-sexto.color-acento-contenido.mb-2.pr-2.pb-3
                  h5 Figura 5.
                  span Principios de COBIT 5
                figure
                  img(src='@/assets/curso/temas/tema1/cobit.png', alt='cobit').img100
                p.tarjeta--azul.pb-2.pt-3 Nota: Adaptada de Principios de COBIT 5. Jiménez (2018).  Geniusitt.   
      Separador
    #t_1_4.titulo-segundo.color-acento-contenido.pt-3.pb-3
      h2 1.4  Ciclo de desarrollo de la arquitectura de datos

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
