<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fuentes de contaminación atmosférica
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las fuentes de contaminación atmosférica son diversos puntos de origen de los contaminantes presentes en la atmósfera, cada uno con características distintivas. Es fundamental que los gobiernos identifiquen estas fuentes para implementar políticas destinadas a mejorar tanto la calidad del aire como la salud pública. Las fuentes de contaminación atmosférica se pueden clasificar en tres categorías principales:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Emisión:] estas fuentes son responsables de la liberación directa de contaminantes en la atmósfera. Esto puede incluir procesos industriales, quema de combustibles fósiles en vehículos o plantas de energía, y otras actividades humanas que generan emisiones directas de contaminantes.
            br
            li 
              i.lista-ul__vineta
              | #[b Acumulación:] la acumulación de contaminantes en la atmósfera se refiere a la presencia sostenida de sustancias contaminantes en ciertas áreas debido a factores como condiciones climáticas, topografía o la falta de dispersión de los contaminantes. Esto puede dar lugar a problemas de calidad del aire localizados.
            br
            li 
              i.lista-ul__vineta
              | #[b Mezcla de contaminantes:] este tipo de fuente de contaminación atmosférica se refiere a la combinación y reacción de diferentes contaminantes en la atmósfera, lo que puede dar lugar a nuevos contaminantes o a la intensificación de los efectos adversos para la salud.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Según sus características pueden ser fuentes naturales o fuentes antropogénicas y de acuerdo con su movimiento pueden ser fuentes fijas o fuentes móviles, como se muestra a continuación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 1.
          span  #[i  Imágenes utilizadas por el SGA con indicaciones de peligro]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='En la figura 1 se muestran las diferentes fuentes de contaminación y la explicación de cada una de ellas.')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='En la figura 1 se muestran las diferentes fuentes de contaminación y la explicación de cada una de ellas.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las actividades humanas son las principales fuentes de contaminación atmosférica en la actualidad. Estas actividades incluyen:
    
    .tarjeta.tarjeta--amarilla.p-4.mb-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividades industriales
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Las actividades industriales son una fuente significativa de contaminación atmosférica. Las instalaciones industriales liberan diversos contaminantes, como Compuestos Orgánicos Volátiles (COVs) y metales pesados, como resultado de los procesos de fabricación y producción. Además, la quema de combustibles fósiles en la generación de energía industrial emite contaminantes como dióxido de azufre, óxidos de nitrógeno y partículas finas. Estos contaminantes pueden tener efectos adversos en la calidad del aire y la salud.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividades de transporte
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los vehículos a motor, como automóviles, camiones y aviones, son una fuente importante de contaminantes atmosféricos, incluyendo óxidos de nitrógeno, monóxido de carbono y compuestos orgánicos volátiles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividades agropecuarias
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p La agricultura es una fuente de emisión de gases contaminantes, como amoníaco y metano, debido a la actividad ganadera y al uso de fertilizantes y pesticidas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividades de manejo de residuos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p La gestión de residuos, incluyendo la incineración de basura, puede tener un impacto significativo en la contaminación atmosférica. La incineración de residuos libera una serie de contaminantes atmosféricos, que incluyen dióxido de azufre, óxidos de nitrógeno, compuestos orgánicos volátiles (COVs), partículas finas (PM2.5) y otros contaminantes gaseosos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividades domésticas
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p En muchos hogares, el uso de carbón como combustible para cocinar, calefacción e iluminación sigue siendo común. Sin embargo, esta práctica genera una gran cantidad de dióxido de carbono (CO2) en el aire, lo que contribuye a la contaminación y al cambio climático.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En cuanto a las fuentes naturales de contaminación atmosférica, estas incluyen:
    
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Erupciones volcánicas
              p.text-normal Las erupciones volcánicas liberan grandes cantidades de gases y partículas en la atmósfera, lo que puede tener un impacto significativo en la calidad del aire a nivel regional.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h4 Polvo del desierto
              p.text-normal Las tormentas de polvo en regiones desérticas pueden transportar partículas finas a largas distancias, lo que afecta la calidad del aire en áreas circundantes.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 Incendios forestales
              p.text-normal Los incendios forestales naturales pueden liberar partículas y gases, incluyendo dióxido de carbono y monóxido de carbono, en la atmósfera.
      
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h4 Emisiones biogénicas
              p.text-normal Las emisiones naturales de gases como el terpeno de las plantas también pueden contribuir a la formación de partículas y compuestos orgánicos volátiles en la atmósfera.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Si bien las fuentes naturales pueden tener un impacto significativo, las actividades humanas suelen ser la principal causa de la contaminación del aire en las áreas urbanas y altamente industrializadas. La gestión efectiva de estas fuentes es esencial para reducir la contaminación atmosférica y sus efectos negativos en la salud y el medio ambiente. 
        p Es importante destacar que el ruido y el calor son considerados factores de contaminación ambiental. El ruido, generado por actividades como el tráfico y la industria, puede tener efectos perjudiciales en la calidad de vida de las personas, causando estrés, pérdida de audición y trastornos del sueño. Por otro lado, el calor, relacionado con la "isla de calor urbano," es resultado del aumento de la temperatura en áreas urbanas debido a actividades humanas, lo que puede afectar la calidad del aire, la salud y la eficiencia energética en las ciudades. Ambos aspectos son cruciales en la gestión de la calidad ambiental en entornos urbanos.
    Separador
    .row
      .col-xl-12       
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Contaminantes atmosféricos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A toda sustancia introducida generalmente producto de las actividades humanas y cuya presencia puede tener efectos nocivos para la salud o el ambiente, es lo que se conoce como contaminantes atmosféricos.
        p Según la Organización Mundial de la Salud (OMS, 2019) se consideran contaminantes atmosféricos a las siguientes sustancias:
    
    .row.justify-content-center.align-items-center
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span  #[i  Contaminantes atmosféricos ]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.desktop
        .tabla-b
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th.text-center Contaminante             
                th.text-center Fuente natural
                th.text-center Fuente Antropogénica
                th.text-center Efectos
            tbody
            tr
              td.text-small Partículas en suspensión (PM, del inglés #[i Particulate Matter]).
              td.text-small Polen de las plantas y erosión de la tierra y rocas.
              td.text-small Combustión y procesos industriales.
              td.text-small Las partículas en suspensión, especialmente las de tamaño inferior a 10 micras, representan una preocupación importante en la contaminación atmosférica. Estas partículas, liberadas por muchas actividades humanas, pueden ingresar al sistema respiratorio, causando problemas de salud como alergias, daños pulmonares y mortalidad prematura. Además, estas partículas transportan contaminantes como metales pesados y compuestos orgánicos perjudiciales para la salud y el medio ambiente.
            tr
              td.text-small Monóxido de Carbono (CO).
              td.text-small Incendios forestales y reacciones químicas.
              td.text-small La combustión de diversas fuentes de energía, como gasolina, querosene, carbón, petróleo, gas y madera, así como la quema de residuos en diversas actividades, como el transporte y las cocinas, es una fuente significativa de emisiones de contaminantes atmosféricos.
              td.text-small Al entrar en el cuerpo, el CO reduce la capacidad de la sangre para transportar oxígeno, lo que resulta en dificultad para respirar y una sensación de ahogamiento. La exposición prolongada a concentraciones elevadas de CO puede ser mortal, causando daño cerebral y a otros órganos debido a la falta de oxígeno.
            tr
              td.text-small Ozono a nivel del suelo (O3).
              td.text-small Se forma de la reacción de compuestos que tienen oxígeno con otros contaminantes en presencia de luz solar.
              td.text-small Utilización de fotocopiadoras.
              td.text-small Puede causar problemas respiratorios, exacerbación de enfermedades pulmonares, daño a los cultivos y a los ecosistemas, y contribuir a la formación de #[i smog].
            tr
              td.text-small Dióxido de Nitrógeno (NO2).
              td.text-small Erupciones volcánicas, reacciones biológicas en el suelo y agua.
              td.text-small Quema de combustibles fósiles y fertilizantes nitrogenados.
              td.text-small Contribuye a la formación de lluvia ácida, lo que afecta suelos, bosques y cuerpos de agua. Además, la exposición al NO2 puede irritar los pulmones, empeorar problemas respiratorios preexistentes como el asma y aumentar la susceptibilidad a infecciones respiratorias en los seres humanos. 
            tr
              td.text-small Dióxido de Azufre (SO2).
              td.text-small Erupciones volcánicas.
              td.text-small Generado por el uso de petróleo, carbón y diésel que se utilizan en el transporte, fundiciones de metales y refinerías.
              td.text-small Este gas contribuye a la lluvia ácida al reaccionar con otros compuestos en la atmósfera, lo que puede dañar suelos, cuerpos de agua y estructuras. Además, la exposición a altas concentraciones de SO2 puede irritar las vías respiratorias y empeorar problemas respiratorios en los seres humanos. 

      .col-lg-12.movil
        .tabla-b
          table(border=1)
            tbody
              tr
                th(style="background-color:#FFAE7E;").text-center Contaminante
                td.text-small Partículas en suspensión (PM, del inglés #[i Particulate Matter]).
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente natural
                td.text-small Polen de las plantas y erosión de la tierra y rocas.
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente Antropogénica
                td.text-small Combustión y procesos industriales.
              tr
                th(style="background-color:#FFAE7E;").text-center Efectos
                td.text-small Las partículas en suspensión, especialmente las de tamaño inferior a 10 micras, representan una preocupación importante en la contaminación atmosférica. Estas partículas, liberadas por muchas actividades humanas, pueden ingresar al sistema respiratorio, causando problemas de salud como alergias, daños pulmonares y mortalidad prematura. Además, estas partículas transportan contaminantes como metales pesados y compuestos orgánicos perjudiciales para la salud y el medio ambiente.
              tr
                th(style="background-color:#FFD2B7;").text-center Contaminante
                td.text-small Monóxido de Carbono (CO).
              tr
                th(style="background-color:#FFD2B7;").text-center Fuente natural
                td.text-small Incendios forestales y reacciones químicas.
              tr
                th(style="background-color:#FFD2B7;").text-center Fuente Antropogénica
                td.text-small La combustión de diversas fuentes de energía, como gasolina, querosene, carbón, petróleo, gas y madera, así como la quema de residuos en diversas actividades, como el transporte y las cocinas, es una fuente significativa de emisiones de contaminantes atmosféricos.
              tr
                th(style="background-color:#FFD2B7;").text-center Efectos
                td.text-small Al entrar en el cuerpo, el CO reduce la capacidad de la sangre para transportar oxígeno, lo que resulta en dificultad para respirar y una sensación de ahogamiento. La exposición prolongada a concentraciones elevadas de CO puede ser mortal, causando daño cerebral y a otros órganos debido a la falta de oxígeno.
              tr
                th(style="background-color:#FFAE7E;").text-center Contaminante
                td.text-small Ozono a nivel del suelo (O3).
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente natural
                td.text-small Se forma de la reacción de compuestos que tienen oxígeno con otros contaminantes en presencia de luz solar.
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente Antropogénica
                td.text-small Utilización de fotocopiadoras.
              tr
                th(style="background-color:#FFAE7E;").text-center Efectos
                td.text-small Puede causar problemas respiratorios, exacerbación de enfermedades pulmonares, daño a los cultivos y a los ecosistemas, y contribuir a la formación de smog.
              tr
                th(style="background-color:#FFD2B7;").text-center Contaminante
                td.text-small Dióxido de Nitrógeno (NO2).
              tr
                th(style="background-color:#FFD2B7;").text-center Fuente natural
                td.text-small Erupciones volcánicas, reacciones biológicas en el suelo y agua.
              tr
                th(style="background-color:#FFD2B7;").text-center Fuente Antropogénica
                td.text-small Quema de combustibles fósiles y fertilizantes nitrogenados.
              tr
                th(style="background-color:#FFD2B7;").text-center Efectos
                td.text-small Contribuye a la formación de lluvia ácida, lo que afecta suelos, bosques y cuerpos de agua. Además, la exposición al NO2 puede irritar los pulmones, empeorar problemas respiratorios preexistentes como el asma y aumentar la susceptibilidad a infecciones respiratorias en los seres humanos. 
              tr
                th(style="background-color:#FFAE7E;").text-center Contaminante
                td.text-small Dióxido de Azufre (SO2).
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente natural
                td.text-small Erupciones volcánicas.
              tr
                th(style="background-color:#FFAE7E;").text-center Fuente Antropogénica
                td.text-small Generado por el uso de petróleo, carbón y diésel que se utilizan en el transporte, fundiciones de metales y refinerías.
              tr
                th(style="background-color:#FFAE7E;").text-center Efectos
                td.text-small Este gas contribuye a la lluvia ácida al reaccionar con otros compuestos en la atmósfera, lo que puede dañar suelos, cuerpos de agua y estructuras. Además, la exposición a altas concentraciones de SO2 puede irritar las vías respiratorias y empeorar problemas respiratorios en los seres humanos. 
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2 Emisión e inmisión
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los términos "emisión" e "inmisión" son esenciales en el contexto de la contaminación atmosférica y la calidad del aire, y tienen definiciones específicas:
              
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Emisión:] se refiere a la liberación de sustancias contaminantes en la atmósfera, ya sea de forma continua o intermitente, de manera directa o indirecta, desde fuentes puntuales o difusas. Estas emisiones pueden ser en forma de gases, líquidos, sólidos o incluso energía. Las fuentes de estas emisiones pueden ser tanto naturales como de origen humano (antropogénicas).            
            br
            li 
              i.lista-ul__vineta
              | #[b Inmisión:] en contraste, la inmisión se refiere a la transferencia de contaminantes atmosféricos desde la atmósfera hacia un receptor o área en particular. Representa la entrada de contaminantes a un área específica, que puede ser una región geográfica o un punto de referencia. En esencia, la inmisión es el proceso opuesto a la emisión, donde los contaminantes se depositan o se transportan hacia un lugar determinado.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Estos conceptos son fundamentales para comprender cómo los contaminantes se liberan en la atmósfera (emisión) y cómo afectan a las áreas circundantes o receptores (inmisión). El monitoreo de emisiones e inmisiones es crucial para evaluar la calidad del aire, identificar fuentes de contaminación y tomar medidas para mitigar los efectos negativos de la contaminación atmosférica.

    Separador
    .row
      .col-xl-12       
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 Técnicas de control
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El control de emisiones en las industrias es fundamental para reducir la contaminación atmosférica y cumplir con las normativas vigentes. Para lograrlo, se aplican diversas técnicas de control, que pueden variar según el tipo de contaminantes y la naturaleza de las operaciones industriales. Algunas de las técnicas de control más comunes incluyen:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Combustión")
        .col-md-6.mb-4.mb-md-0
          p Es una reacción química que ocurre cuando una sustancia se oxida en presencia de oxígeno y calor, generando dióxido de carbono y vapor de agua. Se utiliza en diversas industrias, como pinturas, productos químicos, limpieza y desengrase, para secado, curado y generación de energía. Se emplean tecnologías como incineradores térmicos, incineración catalítica, llamas, calderas y calentadores industriales. Sin embargo, es crucial controlar la combustión para reducir las emisiones de contaminantes y cumplir con las regulaciones ambientales.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')
      .row(titulo="Adsorción")
        .col-md-6.mb-4.mb-md-0
          p Es un proceso en el que las moléculas de un gas contaminante se adhieren a una sustancia adsorbente, generalmente carbón activado, debido a fuerzas de atracción. Estas moléculas son luego eliminadas mediante una corriente de vapor, nitrógeno o reducción de presión. Los adsorbedores de carbón activado se utilizan para llevar a cabo este proceso, con ventajas como la reutilización de compuestos absorbidos, pero con la desventaja de generar residuos sólidos. Esta técnica es eficaz para eliminar una variedad de contaminantes gaseosos en aplicaciones industriales y ambientales.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')
      .row(titulo="Absorción")
        .col-md-6.mb-4.mb-md-0
          p Es un proceso en el que un gas contaminante se disuelve en un líquido, generalmente agua. Es una técnica eficaz y de bajo costo para eliminar contaminantes gaseosos, pero no funciona para todos los compuestos. Se utiliza en diversas aplicaciones industriales y ambientales.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema1/img15.jpg', alt='Imagen decorativa')
      .row(titulo="Condensación")
        .col-md-6.mb-4.mb-md-0
          p Es un proceso en el que un gas contaminante se enfría, transformándose en un líquido, lo que permite la eliminación de los contaminantes del gas. Se utilizan condensadores de contacto, donde el gas se pone en contacto con un líquido frío, o condensadores de superficie, donde el gas fluye sobre una superficie fría con líquido refrigerante. Esta técnica es eficaz para la eliminación de contaminantes gaseosos que se condensan a temperaturas específicas y es utilizada en diversas aplicaciones industriales.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema1/img16.jpg', alt='Imagen decorativa')

    Separador
    .row
      .col-xl-12       
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4 Normatividad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img18.jpg', alt='Imagen decorativa')
      .col-lg-6
        p La implementación de normas y regulaciones es fundamental para la gestión de la calidad del aire y la reducción de la contaminación ambiental. Estas normativas establecen directrices claras y estándares para controlar y monitorear los contaminantes atmosféricos, lo que a su vez contribuye a proteger la salud pública y el medio ambiente. Además, proporcionan un marco legal para las autoridades ambientales y las empresas que deben cumplir con los requisitos para reducir las emisiones contaminantes y mantener la calidad del aire en niveles seguros.
        p En Colombia, al igual que en otros países, las normas y regulaciones ambientales son esenciales para abordar problemas relacionados con la contaminación del aire y el cambio climático. Estas normativas a menudo abordan temas como los límites de emisiones de contaminantes, la calidad del aire, los estándares de seguridad para la industria y las prácticas sostenibles. El cumplimiento de estas regulaciones es crucial para mitigar los impactos negativos en la salud humana y el entorno natural. A continuación, se describen las principales normas para Colombia:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-primario.mb-4
          .row(numero="1" titulo="Agua superficial")
            .col-md-12.mb-4.mb-md-0 Decreto 948 de 1995
              p.text-small Establece normas y principios generales para la protección atmosférica y la gestión de la calidad del aire. Regula la prevención, control y atención de episodios de contaminación del aire, establece normas de calidad del aire, estándares de emisión y descarga de contaminantes, y aborda el otorgamiento de permisos de emisión. También define instrumentos de control, sanciones por infracciones y promueve la participación ciudadana en el control de la contaminación atmosférica. Este decreto es fundamental para la protección del medio ambiente y la salud pública en relación con la contaminación del aire en Colombia.
          .row(numero="2" titulo="Resolución 909 de 2008")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Establece los estándares y normas de emisión permitidos para contaminantes liberados por fuentes fijas, como industrias. Regula las cantidades máximas de contaminantes que pueden ser emitidas a la atmósfera y establece requisitos de control y monitoreo. Su objetivo es proteger el medio ambiente y la salud pública al limitar la contaminación atmosférica y promover prácticas que prevengan y reduzcan las emisiones. Esta resolución se basa en el Decreto 948 de 1995 y es esencial para controlar la contaminación del aire en Colombia.
          .row(numero="3" titulo="Resolución 910 de 2008")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Establece los niveles máximos de emisión permitidos para contaminantes generados por fuentes móviles terrestres, especialmente vehículos. Esta resolución regula los requisitos y certificaciones a los que deben someterse los vehículos, ya sean importados o de fabricación nacional, con el objetivo de controlar y reducir las emisiones de contaminantes. Su finalidad es proteger la calidad del aire y la salud pública al limitar las emisiones de los vehículos terrestres, contribuyendo así a la reducción de la contaminación atmosférica.
          .row(numero="4" titulo="Política para la prevención y control de la contaminación del aire 2010")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Tiene como objetivo principal mejorar la calidad del aire en el país a corto, mediano y largo plazo, con el propósito de proteger la salud humana y promover el desarrollo sostenible. Esta política se centra en la gestión integral de la calidad del aire, la protección de la salud, la planificación a largo plazo y la cooperación entre diversas entidades gubernamentales y sectores industriales para alcanzar estos objetivos.
          .row(numero="5" titulo="Resolución 935 de 2011")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Establece métodos a nivel nacional para la evaluación de emisiones contaminantes en fuentes fijas, como instalaciones industriales. Además, determina la cantidad de pruebas o corridas necesarias para llevar a cabo estas evaluaciones. Esta resolución proporciona directrices para garantizar la precisión y coherencia en la medición y el control de las emisiones, lo que es esencial para proteger la calidad del aire y la salud pública.
          .row(numero="6" titulo="Decreto 1076 de 2015")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Tiene como objetivo principal establecer que el Ministerio de Ambiente y Desarrollo Sostenible es la entidad rectora de la gestión del ambiente y los recursos naturales renovables en el país. Este ministerio tiene la responsabilidad de dirigir y regular el ordenamiento ambiental del territorio y de definir las políticas y regulaciones que guiarán la recuperación, conservación, protección, ordenamiento, manejo, uso y aprovechamiento sostenible de los recursos naturales renovables y del ambiente a nivel nacional. Su labor es fundamental para asegurar el desarrollo sostenible en Colombia, aunque sin perjuicio de las funciones asignadas a otros sectores.
          .row(numero="7" titulo="Resolución 2254 de 2017")
            .col-md-12.mb-4.mb-md-0 
              p.text-small Establece la norma de calidad del aire o nivel de inmisión. Su objetivo principal es garantizar un ambiente sano y minimizar el riesgo para la salud humana debido a la exposición a contaminantes atmosféricos. Esta resolución establece estándares de calidad del aire, proporciona directrices para la gestión integral del aire y enfatiza la protección de la salud de la población, contribuyendo así a la creación y mantenimiento de un ambiente saludable y seguro en todo el territorio nacional.
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los niveles permitidos, o niveles máximos permisibles de contaminantes, se refieren a las concentraciones de sustancias contaminantes a las que las personas y el medio ambiente pueden estar expuestas sin que su salud e integridad se vean afectadas negativamente. Valores por encima de estos niveles pueden ser perjudiciales tanto para la salud humana como para el ambiente. La Resolución 2254 de 2017 en Colombia establece estos niveles máximos permisibles para diversos contaminantes atmosféricos, proporcionando pautas claras para la protección de la salud pública y la conservación del medio ambiente. Estos estándares son fundamentales para garantizar un ambiente sano y seguro para la población y minimizar los riesgos asociados con la contaminación del aire, como se muestra en la siguiente tabla:
    
    .row.justify-content-center.align-items-center
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span  #[i  Niveles máximos permisibles de contaminantes atmosféricos]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.desktop
        .tabla-d
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th.text-center Contaminante             
                th.text-center Nivel máximo permisible (µg/m3)
                th.text-center Tiempo de exposición
            tbody
            tr
              td(rowspan="2") PM10
              td.text-center 50
              td.text-center Anual
            tr 
              td.text-center 100
              td.text-center 24 horas
            tr(style="background-color:#F6F6F6")
              td(rowspan="2") PM2.5
              td.text-center 25
              td.text-center Anual
            tr(style="background-color:#F6F6F6")
              td.text-center 50
              td.text-center 24 horas
            tr
              td(rowspan="2") SO2
              td.text-center 50
              td.text-center Anual
            tr
              td.text-center 100
              td.text-center 24 horas
            tr(style="background-color:#F6F6F6")
              td(rowspan="2") NO2
              td.text-center 60
              td.text-center Anual
            tr(style="background-color:#F6F6F6")
              td.text-center 200
              td.text-center 1 hora
            tr
              td O3
              td.text-center 100
              td.text-center 8 horas
            tr(style="background-color:#F6F6F6")
              td(rowspan="2") CO
              td.text-center 5000
              td.text-center 8 horas
            tr(style="background-color:#F6F6F6")              
              td.text-center 35.000
              td.text-center 1 horas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El Decreto 1076 de 2015 establece claramente la necesidad de obtener permisos y licencias de la autoridad ambiental competente (en este caso, las Corporaciones Autónomas Regionales) para llevar a cabo ciertas actividades que puedan generar emisiones contaminantes. Estos permisos son esenciales para garantizar que las emisiones se mantengan dentro de los límites permitidos y que se cumplan las regulaciones ambientales.
        p Además, es importante destacar las consecuencias para aquellos que no se adhieren a estas medidas y emiten contaminantes más allá de los límites permitidos. Las sanciones y medidas preventivas, que van desde amonestaciones escritas hasta multas sustanciales y la posibilidad de cierre temporal o definitivo de la actividad, son fundamentales para hacer cumplir las regulaciones ambientales y garantizar la protección del medio ambiente y la salud pública. En el contexto de la regulación de emisiones contaminantes en Colombia, es esencial comprender que:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4 
              figure
                img(src='@/assets/curso/temas/tema1/img19_1.jpg', alt='Imagen decorativa')
            .col-lg-7
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | #[b Permisos y licencias:] los permisos y licencias emitidos por la autoridad ambiental son herramientas clave para controlar y supervisar las emisiones de contaminantes en diversas actividades industriales y comerciales. Estos permisos aseguran que se cumplan los estándares de emisión y los límites de contaminación.
                  li 
                    i.lista-ul__vineta
                    | #[b Prohibiciones:] algunas actividades, como las quemas de bosques naturales, quemas industriales de combustibles fósiles y la incineración de sustancias peligrosas, están prohibidas y no pueden obtener permisos, ya que representan un alto riesgo para el medio ambiente y la salud humana.
                  li 
                    i.lista-ul__vineta
                    | #[b Sanciones y medidas preventivas:] para quienes no cumplan con las regulaciones y emitan contaminantes más allá de los límites permitidos, se aplican sanciones y medidas preventivas. Estas pueden incluir multas significativas, la posibilidad de cierre temporal o definitivo de la actividad y, en casos graves, la revocación de licencias ambientales.
                  li 
                    i.lista-ul__vineta
                    | #[b Objetivo de protección ambiental:] la finalidad de estas regulaciones es proteger el medio ambiente y la salud pública. La emisión descontrolada de contaminantes atmosféricos puede tener graves consecuencias en términos de calidad del aire y salud de la población, por lo que es esencial establecer estándares y aplicar medidas para minimizar estos riesgos.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Estos permisos son esenciales para que tanto personas naturales como jurídicas puedan llevar a cabo actividades, obras y servicios, ya sean de carácter público o privado, sin sobrepasar los límites permitidos de emisiones contaminantes. Las actividades que requieren de estos permisos incluyen:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Quemas abiertas controladas en zonas rurales.
            li 
              i.lista-ul__vineta
              | Descargas de humos, gases, vapores, polvos o partículas a través de ductos o chimeneas en establecimientos industriales, comerciales o de servicio.
            li 
              i.lista-ul__vineta
              | Emisiones fugitivas o dispersas de contaminantes por actividades de explotación minera a cielo abierto.
            li 
              i.lista-ul__vineta
              | Incineración de residuos sólidos, líquidos y gaseosos.
            li 
              i.lista-ul__vineta
              | Operaciones de almacenamiento, transporte, carga y descarga en puertos que puedan generar emisiones al aire.
            li 
              i.lista-ul__vineta
              | Operación de calderas o incineradores en establecimientos industriales o comerciales.
            li 
              i.lista-ul__vineta
              | Quema de combustibles en operaciones ordinarias de campos de explotación de petróleo y gas.
            li 
              i.lista-ul__vineta
              | Procesos o actividades susceptibles de producir emisiones de sustancias tóxicas.
            li 
              i.lista-ul__vineta
              | Producción de lubricantes y combustibles.
            li 
              i.lista-ul__vineta
              | Refinación y almacenamiento de petróleo y sus derivados, así como procesos fabriles petroquímicos.
            li 
              i.lista-ul__vineta
              | Operación de plantas termoeléctricas.
            li 
              i.lista-ul__vineta
              | Operación de reactores nucleares.
            li 
              i.lista-ul__vineta
              | Actividades generadoras de olores ofensivos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Por otro lado, existen actividades prohibidas para las cuales no se pueden tramitar permisos. Estas actividades incluyen:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img20_1.jpg', alt='Imagen decorativa')
            .col-lg-7        
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Quemas de bosques naturales y de vegetación protectora, quema de combustibles fósiles utilizados por el parque automotor, quema industrial o comercial de combustibles fósiles, y quemas abiertas controladas en zonas rurales.
                li 
                  i.lista-ul__vineta
                  | La incineración o quema de sustancias, residuos y desechos tóxicos peligrosos.
                li 
                  i.lista-ul__vineta
                  | Actividades industriales que generen o usen sustancias sujetas al control del Protocolo de Montreal.
                li 
                  i.lista-ul__vineta
                  | Canteras y plantas trituradoras de materiales de construcción.      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Quienes no cumplan con las medidas y emitan emisiones que superen los límites permitidos, sin contar con el respectivo permiso, estarán sujetos a medidas preventivas que incluyen amonestaciones escritas. Además, si se comprueba daño o peligro para los recursos naturales o la salud humana, o si la actividad se inicia sin el permiso requerido, se puede llegar a la suspensión de la actividad. En tales casos, se inicia un proceso sancionatorio ambiental que implica la imposición de sanciones, como multas diarias de hasta cinco mil (5.000) salarios mínimos mensuales legales vigentes, cierre temporal o definitivo del establecimiento, revocatoria o caducidad de la licencia ambiental, autorización, concesión, permiso o registro, demolición de obra a costa del infractor y trabajo comunitario.
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
