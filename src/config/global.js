export default {
  global: {
    componenteFormativo: 'Fundamentos de modelamiento de datos',
    descripcionCurso:
      'El proceso de modelamiento de datos es fundamental para el éxito del sistema de información de la organización, para esto, es importante definir los datos necesarios, qué decisiones se esperan tomar con ellos y cómo deben ser almacenados y procesados. En este módulo se presentarán los conceptos básicos y herramientas que permitirán realizar estas actividades, familiarizando al aprendiz con las metodologías y técnicas para su aplicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la arquitectura de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos: datos e información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué es la arquitectura de datos?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelos, políticas y reglas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ciclo de desarrollo de la arquitectura de datos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué son modelos de datos?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de modelos de datos y marcos de referencia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Selección del modelo de datos adecuado para el negocio',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Pseudocódigo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de gestión de bases de datos SGBD (DBMS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evolución de los sistemas de gestión de bases de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Componentes de los SGBD',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Funciones del SGBD',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modelo relacional de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Operadores de álgebra relacional',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sintaxis SQL',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Procedimientos almacenados y disparadores',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Bases de datos NO relacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '5.1  ¿Qué son las bases de datos NO relacionales?',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de bases de datos NO relacionales',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco de referencia DAMA Internacional',
      referencia:
        'DAMA Internacional (2022). <em>Publicaciones DMBOK - Data Management Body of Knowledge.</em> DAMA Internacional.',
      tipo: 'Sitio Web',
      link: 'https://www.dama.org/cpages/body-of-knowledge',
    },
    {
      tema: 'Herramientas de modelado: <em>GitMind</em>',
      referencia:
        'GitMind. (sf.). <em>Mejor programa para hacer mapa mental y conceptual.</em>GitMind.',
      tipo: 'Sitio Web',
      link: 'https://gitmind.com/es/',
    },
    {
      tema: 'Marco de referencia COBIT',
      referencia:
        'ISACA (2022). <em>COBIT Control objectives for Information Technologies.</em> ISACA Resources.',
      tipo: 'Sitio Web',
      link: 'https://www.isaca.org/resources/cobit',
    },
    {
      tema: 'Herramientas de modelado: <em>Lucidchart</em>',
      referencia:
        'Lucidchart. (sf.) <em>Intelligent diagramming.</em> Lucidchart.',
      tipo: 'Sitio Web',
      link: 'https://www.lucidchart.com/pages/',
    },
    {
      tema: 'Marco de referencia <em>Governance Institute</em>',
      referencia:
        'The Data Governance Institute (2022). <em>Data Governance Framework & Components. The Data Governance Institute</em>',
      tipo: 'Sitio Web',
      link: 'https://datagovernance.com/data-governance-framework-components/',
    },
    {
      tema: 'Marco de referencia TOGAF',
      referencia: '<em>The Open Group (2022). TOGAF. The Open Group</em>',
      tipo: 'Sitio Web',
      link: 'https://www.opengroup.org/togaf',
    },
    {
      tema: 'Herramientas de modelado: Visual Paradigm',
      referencia:
        '<em>Visual Paradigm (sf). Design database with professional ERD Software. Visual Paradigm</em>',
      tipo: 'Sitio Web',
      link:
        'https://www.visual-paradigm.com/features/database-design-with-erd-tools/',
    },
  ],
  glosario: [
    {
      termino: 'Datos',
      significado:
        'un dato es una representación simbólica de un atributo o característica de un elemento o evento.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'se consideran datos estructurados cuando tienen una estructura bien definida, siguen un orden y son de fácil acceso y uso para los sistemas de información y las personas.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'este tipo de datos no tiene un modelo o estructura muy definida y puede tener diferentes formatos como texto, imágenes, sonido, video lo que hace más difícil su procesamiento y análisis.',
    },
    {
      termino: 'Información',
      significado:
        'la información es un dato o conjunto de datos con un contexto que les da significado.',
    },
    {
      termino: 'JSON',
      significado:
        'notación de objetos en <em>JavaScript</em> o <em>JavaScript Object Notation</em> en inglés.',
    },
    {
      termino: 'Modelado de datos',
      significado:
        'es un proceso que permite analizar y definir los datos generados por la organización y la relación entre estos con el fin de identificar sus características y dependencias.',
    },
    {
      termino: 'NoSQL',
      significado:
        '<em>Not only SQL</em> son una categoría de sistemas de gestión de bases de datos que no utilizan SQL como lenguaje de consulta principal.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'es un conjunto de componentes interrelacionados que trabajan juntos para recopilar, procesar, almacenar y difundir información para apoyar la toma de decisiones.',
    },
    {
      termino: 'SQL',
      significado: 'es el lenguaje estándar de consultas a las bases de datos.',
    },
    {
      termino: 'XML',
      significado:
        'lenguaje de marcado extensible o <em>Extensible Markup Language</em> en inglés.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bisson, A. (2021). SQL - Fundamentos del lenguaje con ejercicios corregidos. 3ra edición.',
      link:
        'https://www-eni-training-com.bdigital.sena.edu.co/portal/client/mediabook/home',
    },
    {
      referencia:
        'DAMA Internacional. (2022). Imágenes de rueda DMBOK v2. Obtenido de',
      link: 'https://www.dama.org/cpages/dmbok-2-wheel-images',
    },
    {
      referencia:
        'Data Governance Institute. (s.f.). Marco de Gobierno de Datos de la DGI. Obtenido de',
      link: 'https://datagovernance.com/the-dgi-data-governance-framework/',
    },
    {
      referencia:
        'Fernández, A. (2020). Ciencia de datos para la ciberseguridad. 1ra. Edición. RAMA.',
      link:
        'https://www.alphaeditorialcloud.com/reader/ciencia-de-datos-para-la-ciberseguridad-1628020600?location=eyJjaGFwdGVySHJlZiI6IngwMiIsImNmaSI6Ii80W3gwMl0vMi8yW19pZENvbnRhaW5lcjAwMl0vMiJ9',
    },
    {
      referencia:
        'García, J. (2018). Ciencia de datos Técnicas analíticas y aprendizaje estadístico en un enfoque práctico. Editorial Altaria.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/ciencia-de-datos?location=1',
    },
    {
      referencia: 'Jiménez, F. (2018). Principios de COBIT 5. Obtenido de',
      link: 'https://geniusitt.com/blog/que-es-cobit-5/',
    },
    {
      referencia: 'The Open Group. (2018). El estándar TOGAF. Obtenido de',
      link: 'https://www.opengroup.org/togaf',
    },
    {
      referencia:
        'Jones, H. (2019). Ciencia de los datos: la guía definitiva sobre análisis de datos, minería de datos, almacenamiento de datos, visualización de datos. Publicación independiente. ',
      link:
        'https://biblioteca.sena.edu.co/F/QK1UI7RDS4Q5XCEJHTEG681M74XTARHJQABMVRV1F1YV8U8ELM-13705?func=full-set-set&set_number=003407&set_entry=000001&format=999',
    },
    {
      referencia:
        'Joyanes, L. (2015). Sistemas de información en la empresa. Alfaomega',
    },
    {
      referencia:
        'Mannino, M. V. (2007). Administración de bases de datos. McGraw-Hill Irwin.',
    },
    {
      referencia:
        'Orbegozo Arana, Borja. (2019). Gestión de bases de datos con SQL, MySQL y Access: curso práctico. Alfaomega.',
    },
    {
      referencia:
        'Piattini, M., Ruiz, F. (2020). Gobierno      y      gestión de las      tecnologías y los      sistemas de      información. Ra-Ma.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/gobierno-y-gestion-de-las-tecnologias-y-los-sistemas-de-informacion-1591724977',
    },
    {
      referencia:
        'Ramakrishnan, R. (2011). Sistemas de gestión de bases de datos. McGraw-Hill España.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
