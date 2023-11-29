export default {
  global: {
    componenteFormativo:
      'Contaminantes atmosféricos y monitoreo de la calidad de aire',
    descripcionCurso:
      'Con el avance del presente Componente Formativo, el aprendiz tendrá los conocimientos básicos para identificar las fuentes de contaminación atmosférica, que es, para qué sirve y cómo se realiza el monitoreo de calidad de aire, los equipos y procedimientos empleados acorde a la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fuentes de contaminación atmosférica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contaminantes atmosféricos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Emisión e inmisión',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de control',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normatividad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Monitoreo de la calidad de aire',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Monitoreo manual',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Monitoreo automático',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Monitoreo híbrido',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Muestreo isocinético',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Analizador de gases y olores',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Tren de muestreo',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Estimación de emisiones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Refrigerantes y aceites',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Meteorología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Química de combustión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Presentación de resultados e informe',
        desarrolloContenidos: true,
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_011_231100.zip',
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
      tema: '1. Fuentes de contaminación atmosférica ',
      referencia:
        'Ministerio de Ambiente y. Desarrollo Sostenible- Colombia, M. (2017, agosto 11). Todo lo que debes saber sobre la calidad del aire. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FtKg9zJ6oNQ',
    },
    {
      tema: '2. Monitoreo de la calidad de aire',
      referencia:
        'Epm, F. (2020, agosto 24). ¿Sabes cómo se hacen las mediciones de la calidad del aire? YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=poAPG-Ek_6E',
    },
    {
      tema: '2. Monitoreo de la calidad de aire',
      referencia:
        'Teleantioquia. (2021, febrero 12). Crear Tiene Ingenio | Monitoreo de la Calidad del Aire | Teleantioquia. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A0sIX2tq8SI',
    },
  ],
  glosario: [
    {
      termino: 'Contaminantes atmosféricos',
      significado:
        'sustancia introducida generalmente producto de las actividades humanas y cuya presencia puede tener efectos nocivos para la salud o el ambiente.  ',
    },
    {
      termino: 'Emisión',
      significado:
        'descarga de sustancias contaminantes a la atmósfera, de forma continua o discontinua, directa o indirecta, puntual o difusa, en forma de gas, líquido, sólido o energía, con capacidad para afectar el aire, el suelo o el agua, de origen natural o antrópico.',
    },
    {
      termino: 'Fuentes de contaminación',
      significado:
        'causas, puntos o donde se origina la contaminación del aire y es producida por la emisión, acumulación y mezcla de contaminantes en el aire.',
    },
    {
      termino: 'Inmisión',
      significado:
        'transferencia de contaminantes de la atmósfera a un "receptor". La inmisión es la acción opuesta a la emisión. ',
    },
    {
      termino: 'Meteorología',
      significado:
        'ciencia que evalúa parámetros como la temperatura, la presión atmosférica, humedad, intensidad y dirección de los vientos y las precipitaciones para estudiar los fenómenos a corto plazo que tienen lugar en las capas bajas de la atmósfera.',
    },
    {
      termino: 'Monitoreo de calidad de aire',
      significado:
        'proceso continuo que consiste en recolectar y analizar información con el objetivo de realizar un seguimiento al estado de la calidad de aire en determinado sitio.',
    },
  ],
  referencias: [
    {
      referencia:
        'IDEAM. (2011). <em>Instituto de Hidrología, Meteorología y Estudios Ambientales.</em> Obtenido de Resolución 935 de 2011. ',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/resolucion_ideam_0935_2011.htm',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2011). <em>Determinación de las emisiones de material particulado en fuentes estacionarias.</em>',
      link:
        'http://www.ideam.gov.co/documents/51310/527666/M%C3%A9todo+5.pdf/aec60be6-b162-4e46-9497-0bf8af60a053',
    },
    {
      referencia:
        'Ministerio de ambiente y desarrollo sostenible. (2015). <em>Decreto 1076 de 2015 Sector Ambiente y Desarrollo Sostenible.</em> Obtenido de Decreto 1076 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=78153',
    },
    {
      referencia:
        'Ministerio de ambiente y desarrollo sostenible. (2017). <em>Resolución 2254. de 2017.</em>',
      link:
        'http://www.ideam.gov.co/documents/51310/527391/2.+Resoluci%C3%B3n+2254+de+2017+-+Niveles+Calidad+del+Aire..pdf/c22a285e-058e-42b6-aa88-2745fafad39f',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008). <em>Protocolo para el monitoreo y seguimiento de la calidad del aire.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Protocolo_Calidad_del_Aire_-_Manual_Diseno.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). <em>Política para la prevención y control de la contaminación del aire.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/04/Politica_de_Prevencion_y_Control_de_la_Contaminacion_del_Aire.pdf  ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008). <em>Resolución 909 de 2008.</em>',
      link:
        'http://www.ideam.gov.co/documents/51310/527650/Resolucion+909+de+2008.pdf/a3bcdf0d-f1ee-4871-91b9-18eac559dbd9',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008). <em>Resolución 910 de 2008.</em>',
      link:
        'http://www.ideam.gov.co/documents/51310/527825/Resoluci%C3%B3n+910+de+2008.pdf/cfa30330-66e9-41c2-b5b6-af2559c508eb',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. (1995). <em>Decreto 948 de 1995.</em> Obtenido de.',
      link:
        'http://www.ideam.gov.co/documents/51310/527621/Decreto+948+de+1995.pdf/670a0603-4d1f-454f-941e-08e6ba70666d',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2019). <em>Contaminación atmosférica.</em>',
      link: 'https://www.who.int/es/health-topics/air-pollution#tab=tab_2',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Sánchez Rodríguez ',
          cargo: 'Experto Temático ',
          centro: 'Regional Tolima - Centro Agropecuario La Granja.',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del Equipo de Desarrollo Curricular ',
          centro:
            'Regional Santander. Centro Industrial de Diseño y la manufactura.',
        },
        {
          nombre: 'Sandra Patricia Hoyos Seúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova',
          cargo: 'Experta Temática ',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
