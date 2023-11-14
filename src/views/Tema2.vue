<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Monitoreo de la calidad de aire
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El monitoreo de la calidad del aire desempeña un papel esencial en la gestión ambiental y la toma de decisiones. Permite recopilar información valiosa para analizar, interpretar y presentar resultados, lo que, a su vez, facilita la corrección de procesos y la reprogramación de actividades. Este proceso continuo tiene varios propósitos, entre ellos:
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imagen decorativa')
      .col-lg-6
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Identificar las fuentes de contaminación.
          li 
            i.lista-ul__vineta
            | Observar las tendencias de contaminación a largo plazo.
          li 
            i.lista-ul__vineta
            | Calibrar modelos de dispersión.
          li 
            i.lista-ul__vineta
            | Seleccionar ubicaciones representativas para el monitoreo.
          li 
            i.lista-ul__vineta
            | Investigar el impacto de la contaminación en la salud de la población.
          li 
            i.lista-ul__vineta
            | Supervisar el cumplimiento de las normas de calidad del aire.
          li 
            i.lista-ul__vineta
            | Establecer sistemas de alerta para smog fotoquímico.
          li 
            i.lista-ul__vineta
            | Contribuir a la planificación, diseño e implementación de políticas públicas.
          li 
            i.lista-ul__vineta
            | Apoyar la implementación de medidas específicas de control de contaminación atmosférica.
          li 
            i.lista-ul__vineta
            | Jerarquizar las fuentes de emisión según su contribución.
          li 
            i.lista-ul__vineta
            | Evaluar la efectividad de las medidas de control implementadas en una región específica.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p De acuerdo con el protocolo para el monitoreo y seguimiento de la calidad del aire (MAVDT, 2008), se utilizan varios instrumentos para llevar a cabo el monitoreo.
    Separador
    .row
      .col-xl-12       
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Monitoreo manual
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es realizado mediante equipos que recolectan muestra en el sitio para luego ser llevadas y analizadas en el laboratorio y verificar la presencia del contaminante estudiado.
        p El procedimiento en el monitoreo manual es el siguiente:
    
    SlyderB.color-acento-botones.mb-5.p-5(:datos="datosSlyderEjemplo")(style="background-color:#EEFFDE")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El monitoreo manual es una herramienta valiosa para evaluar la calidad del aire y la presencia de contaminantes específicos en áreas de interés. Proporciona datos precisos y detallados que son fundamentales para la protección de la salud pública y el medio ambiente.
    
    Separador
    .row
      .col-xl-12       
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Monitoreo automático
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El monitoreo automático de la calidad del aire es un proceso altamente eficiente que utiliza equipos y sistemas automáticos para tomar muestras y analizar la calidad del aire en el lugar de muestreo, eliminando la necesidad de enviar muestras a un laboratorio. Aquí se resumen los puntos clave de esta metodología:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .mt-3
            .p-4
              ol.lista-ol.lista-ol--separador
                li
                  span.text-bold a) Toma de información automatizada:
                  | el proceso de monitoreo automático utiliza equipos y sistemas automáticos para recopilar datos en tiempo real en el sitio de muestreo. Estos equipos pueden medir una variedad de contaminantes atmosféricos, como material particulado, óxidos de azufre, óxidos de nitrógeno, ozono, monóxido de carbono, hidrocarburos metánicos y no metánicos.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img20.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .mt-3
            .p-4
              ol.lista-ol.lista-ol--separador
                li
                  span.text-bold b)	Análisis in #[i situ]:
                  | la ventaja principal del monitoreo automático es que los instrumentos pueden analizar directamente las muestras en el lugar de muestreo, lo que elimina la necesidad de enviar muestras a un laboratorio y reduce significativamente el tiempo necesario para obtener resultados.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img21.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .mt-3
            .p-4
              ol.lista-ol.lista-ol--separador
                li
                  span.text-bold c)	Procesamiento de información y reporte
                  | después de recopilar los datos, se realiza el procesamiento de la información de manera automática. Esto incluye la calibración y aseguramiento de la calidad de los datos. Los resultados se generan en tiempo real y se pueden informar de manera instantánea.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img22.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .mt-3
            .p-4
              ol.lista-ol.lista-ol--separador
                li
                  span.text-bold d)	Mantenimiento preventivo y correctivo:
                  | a pesar de su automatización, los equipos de monitoreo automático requieren un mantenimiento regular para garantizar que funcionen correctamente. Esto incluye tareas de mantenimiento preventivo y, en caso de fallas, mantenimiento correctivo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El monitoreo automático ofrece una ventaja significativa en términos de rapidez y eficiencia, lo que lo convierte en una herramienta valiosa para el seguimiento continuo de la calidad del aire. Además, contribuye a la toma de decisiones más ágiles en la gestión de la calidad del aire y en la aplicación de políticas públicas.

    Separador
    .row
      .col-xl-12       
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.3 Monitoreo híbrido
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El monitoreo híbrido combina aspectos positivos tanto de los equipos manuales como de los automáticos, lo que resulta en una optimización de costos y una mejora en los tiempos de generación de resultados. Sin embargo, también conlleva algunas desventajas, como la necesidad de contar con un mayor número de operadores, quienes deben recibir una capacitación más exhaustiva para realizar este tipo de monitoreo de manera efectiva.
        p En cuanto al tipo de fuente que se evaluará, el monitoreo puede ser:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-gris")
      .row(titulo="Monitoreo de fuentes fijas")
        .col-md-12.mb-4.mb-md-0
          p El Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) ha establecido métodos específicos para la evaluación de fuentes fijas en el monitoreo de contaminantes atmosféricos. Estos métodos son fundamentales para garantizar mediciones precisas y confiables. A continuación, se describen los métodos y su finalidad:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Método 1] – Determinación del punto y velocidad de muestreo para fuentes estacionarias.
            li 
              i.lista-ul__vineta
              | #[b Método 1A] - Determinación del punto y velocidad de muestreo para fuentes estacionarias con ductos o chimeneas pequeñas.
            li 
              i.lista-ul__vineta
              | #[b Método 2] - Determinación de la velocidad y tasa de flujo volumétrico de gases en chimenea (Tubo Pitot tipo S).
            li 
              i.lista-ul__vineta
              | #[b Método 3] - Análisis de gases para la determinación del peso molecular base seco.
            li 
              i.lista-ul__vineta
              | #[b Método 3B] - Análisis de gases para la determinación del factor de corrección de tasa de emisión o exceso de aire.
            li 
              i.lista-ul__vineta
              | #[b Método 4] - Determinación del contenido, de humedad en gases de la chimenea.
            li 
              i.lista-ul__vineta
              | #[b Método 5] - Determinación de las emisiones de material particulado en fuentes estacionarias.
            li 
              i.lista-ul__vineta
              | #[b Método 6] - Determinación de las emisiones de dióxido de azufre en fuentes estacionarias.
            li 
              i.lista-ul__vineta
              | #[b Método 7]- Determinación de las emisiones de óxidos de nitrógeno en fuentes estacionarias.
            li 
              i.lista-ul__vineta
              | #[b Método 12] - Determinación de las emisiones de plomo inorgánico en fuentes estacionarias.
          
          p Además de los métodos, es importante tener en cuenta el número de pruebas o corridas requeridas para medir los contaminantes de manera efectiva. El número de pruebas puede variar según la fuente y el contaminante en cuestión, y se determina con el fin de obtener resultados representativos y confiables.
      .row(titulo="Monitoreo de fuentes móviles")
        .col-md-12.mb-4.mb-md-0
          p Este monitoreo en Colombia está regulado por la Resolución 910 de 2008 (MAVDTb, 2008). Esta regulación establece niveles permisibles y reglamenta los requisitos y certificaciones necesarios para distintos tipos de vehículos. A continuación, se resumen los aspectos clave relacionados con el monitoreo de fuentes móviles en Colombia:

          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Regulación de niveles permisibles:] la Resolución 910 de 2008 establece los niveles máximos permisibles de emisión de contaminantes que los vehículos deben cumplir. Estos niveles se aplican a vehículos a gasolina, vehículos bi-combustibles (gasolina-gas natural vehicular o gasolina-GLP), motocicletas, motociclos, mototriciclos, vehículos diésel y vehículos que utilizan mezclas de combustibles.
            li 
              i.lista-ul__vineta
              | #[b Requisitos y certificaciones:] la regulación establece los requisitos y certificaciones que los vehículos deben cumplir para garantizar que sus emisiones se mantengan dentro de los límites permisibles. Esto incluye certificaciones de emisiones, estándares de calidad de aire y control de dispositivos de emisión, entre otros.
            li 
              i.lista-ul__vineta
              | #[b Variables críticas para la evaluación:] para conocer el estado de una fuente de emisión móvil, es fundamental considerar variables críticas como el tiempo, la velocidad, la aceleración y el frenado de los vehículos. Estas variables son esenciales para evaluar y controlar la contaminación generada por el parque automotor y garantizar que se cumplan los estándares de emisión.
    
    Separador
    .row
      .col-xl-12       
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.4 Muestreo isocinético
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El muestreo isocinético es una técnica que se utiliza para recolectar muestras de contaminantes emitidos por fuentes fijas, como chimeneas industriales. Lo que lo hace especial es que se toma la muestra a la misma velocidad y en las mismas condiciones en que los contaminantes son liberados de la fuente, sin alterar el flujo de gases o partículas en la corriente de aire. Esta técnica es particularmente útil para determinar la concentración de material particulado, lo que significa que se enfoca en medir las partículas sólidas suspendidas en el aire.
        p Al mantener la misma velocidad y condiciones, el muestreo isocinético proporciona una representación precisa de la cantidad de contaminantes en la corriente de aire tal como se emiten normalmente. Esto es fundamental para evaluar el cumplimiento de las regulaciones ambientales y determinar si una fuente de emisión cumple con los límites permisibles de emisión de material particulado.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span  #[i Explicación de la palabra isocinético]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img23.svg', alt='En la figura 2, se muestra la explicación de los componentes de la palabra isocinético, iso que significa igual y cinético que hace referencia al movimiento.')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img23_1.svg', alt='En la figura 2, se muestra la explicación de los componentes de la palabra isocinético, iso que significa igual y cinético que hace referencia al movimiento.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p El proceso de muestreo isocinético para la determinación de material particulado en fuentes fijas implica los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img25.jpg', alt='')
            .col-lg-7                
              ol.lista-ol
                li
                  span.text-bold a)	Obtención de material particulado isocinéticamente:
                  | se recoge el material particulado (partículas sólidas o líquidas suspendidas en el aire) de la fuente de emisión utilizando un sistema que asegura que la velocidad de captura sea igual o similar a la velocidad a la que las partículas se emiten desde la fuente.
                li
                  span.text-bold b)	Colección en un filtro de fibra de vidrio: 
                  | el material particulado capturado se deposita en un filtro de fibra de vidrio. Este filtro se mantiene a una temperatura específica de 120 ± 14 °C para evitar la presencia de humedad que podría alterar la muestra.
                li
                  span.text-bold c)	Determinación por gravimetría:
                  | el filtro con el material particulado se pesa antes y después de la colección. La diferencia de peso entre el filtro limpio y el filtro con el material capturado se utiliza para calcular la cantidad de material particulado presente en la muestra. Esta es una técnica de análisis gravimétrico que permite cuantificar la concentración de material particulado en la fuente de emisión.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En resumen, el muestreo isocinético es un método preciso para la recolección de material particulado en fuentes fijas, y la gravimetría se utiliza para determinar cuánto material particulado se emite de la fuente. Este proceso es esencial para evaluar y controlar las emisiones de partículas sólidas o líquidas en el aire y garantizar que cumplan con las regulaciones ambientales.

    Separador
    .row
      .col-xl-12       
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.5 Analizador de gases y olores
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El analizador de gases y olores, también conocido como analizador de gases de emisión, es un equipo utilizado para medir la concentración de diferentes gases generados durante la combustión. Este dispositivo es ampliamente utilizado en diversas aplicaciones para monitorear y controlar las emisiones de gases en entornos industriales y ambientales. Algunas de las medidas que se pueden realizar con un analizador de gases de emisión incluyen:
    
    .tarjeta.tarjeta--amarilla.p-4.mb-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Medición de gases de combustión
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los analizadores se utilizan comúnmente para medir gases de combustión, como dióxido de carbono (CO2), monóxido de carbono (CO), óxidos de nitrógeno (NOx), óxidos de azufre (SOx) y oxígeno (O2). Estos gases son cruciales para evaluar la eficiencia de procesos de combustión y garantizar el cumplimiento de regulaciones ambientales.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img13.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Control de calidad del aire
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los analizadores también se utilizan para monitorear la calidad del aire en entornos industriales y urbanos. Pueden medir la concentración de gases como el dióxido de azufre, el dióxido de nitrógeno, el ozono y partículas finas, que son importantes para evaluar la calidad del aire y tomar medidas para reducir la contaminación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img14.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Seguridad en el trabajo
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p En entornos industriales, los analizadores de gases pueden utilizarse para garantizar la seguridad de los trabajadores. Pueden detectar la presencia de gases peligrosos, como gases inflamables o tóxicos, y activar alarmas en caso de concentraciones peligrosas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img15.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Control de emisiones
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p En aplicaciones industriales, los analizadores de gases son esenciales para asegurarse de que las emisiones cumplan con las regulaciones ambientales. Estos dispositivos pueden proporcionar datos precisos sobre las concentraciones de gases emitidos, lo que permite a las empresas ajustar los procesos para reducir emisiones contaminantes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img16.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Monitoreo de olores
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Además de gases, algunos analizadores también pueden medir olores ofensivos en el aire. Esto es importante en aplicaciones como la gestión de residuos o la producción de alimentos, donde los olores pueden ser un problema.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img17.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P Los analizadores de gases y olores son herramientas fundamentales en la medición y el control de emisiones de gases en diversas aplicaciones, desde la industria hasta la gestión ambiental y la seguridad laboral. Proporcionan datos precisos que son esenciales para garantizar el cumplimiento de regulaciones y mejorar la calidad del aire y la seguridad en el trabajo.
    Separador
    .row
      .col-xl-12       
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.6 Tren de muestreo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P Es un sistema diseñado para captar gases contaminantes utilizando una solución química absorbente. El proceso de muestreo se realiza de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          ol.lista-ol
            li
              span.text-bold a)	Boquilla:
              | es el punto de entrada del aire ambiente al tren de muestreo.
            li
              span.text-bold b)	Sonda:
              | es una parte importante que recoge el aire contaminado y lo dirige hacia el tren de muestreo.
            li
              span.text-bold c)	Tubo #[i pitot]:
              | se utiliza para medir la velocidad del flujo de aire, lo que es esencial para una toma de muestra precisa.
            li
              span.text-bold d)	Manómetro:
              | mide la presión en el sistema, lo que es útil para garantizar que el flujo de aire se mantenga constante y se ajuste según sea necesario.
            li
              span.text-bold e)	Caja caliente:
              | es una sección del tren de muestreo que mantiene la temperatura de la muestra a un nivel constante para evitar cambios que puedan afectar la medición.
            li
              span.text-bold f)	Sensor de temperatura:
              | este sensor controla y regula la temperatura en la caja caliente.
            li
              span.text-bold g)	Caja fría:
              | puede utilizarse para enfriar la muestra si es necesario.
            li
              span.text-bold h) Sistema de medición:
              | este componente es responsable de la medición de la concentración de gases contaminantes en la muestra.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img18.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Un tren de muestreo es una herramienta esencial para recoger muestras de gases contaminantes en la atmósfera y medir sus concentraciones. Cada componente en el tren de muestreo cumple una función específica para garantizar la precisión de la toma de muestra y la medición. Estos sistemas son fundamentales en la evaluación de la calidad del aire y en el cumplimiento de regulaciones ambientales.

    Separador
    .row
      .col-xl-12       
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.7 Estimación de emisiones
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La estimación de emisiones atmosféricas es un proceso fundamental que involucra la cuantificación de la cantidad de contaminantes liberados en la atmósfera debido a actividades tanto naturales como humanas. Tanto el sector público como el privado pueden beneficiarse de este proceso:
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 a)	Sector público
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[b Establecimiento de políticas y acciones de control:] la estimación de emisiones proporciona datos clave que ayudan al sector público a definir políticas y estrategias para controlar las emisiones atmosféricas y mejorar la calidad del aire.
          br
          li 
            i.lista-ul__vineta
            | #[b Evaluación del impacto de políticas ambientales:] permite evaluar la eficacia de las políticas implementadas para reducir las emisiones y su impacto en la calidad del aire.
          br
          li 
            i.lista-ul__vineta
            | #[b Aplicación de modelos de calidad del aire:] los datos de emisiones son fundamentales para la aplicación de modelos de calidad del aire que ayudan a predecir y evaluar el impacto de las estrategias de control de emisiones.
          br
          li 
            i.lista-ul__vineta
            | #[b Análisis geográfico de emisiones:] ayuda a comprender la distribución geográfica de las emisiones en una región y a identificar áreas críticas.
          br
          li 
            i.lista-ul__vineta
            | #[b Identificación de fuentes y sectores económicos:] permite identificar las fuentes y sectores económicos que contribuyen de manera significativa a las emisiones, lo que facilita la toma de medidas de control.
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 b)	Sector privado
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[b Programas de reducción de emisiones:] los datos de emisiones ayudan a las empresas a implementar programas y estrategias para reducir sus emisiones y cumplir con regulaciones ambientales.
          br
          li 
            i.lista-ul__vineta
            | #[b Cumplimiento regulatorio:] los datos de emisiones ayudan a las empresas a implementar programas y estrategias para reducir sus emisiones y cumplir con regulaciones ambientales.
          br
          li 
            i.lista-ul__vineta
            | #[b Especificaciones técnicas de control de emisiones:] la cuantificación de emisiones ayuda a definir las especificaciones técnicas para equipos de control de emisiones, lo que es fundamental para reducir las emisiones en los procesos industriales.
          br
          p Existen dos enfoques principales para estimar emisiones de fuentes fijas:
          li 
            i.lista-ul__vineta
            | #[b Métodos directos:] estos métodos implican la recolección de datos en el campo, como el muestreo de la fuente, que consiste en la medición directa de la concentración de contaminantes en la fuente de emisión, como una chimenea o conducto.
          br
          li 
            i.lista-ul__vineta
            | #[b Métodos indirectos:] estos métodos se basan en información general sobre procesos o equipos, utilizando factores de emisión y balances de masa para estimar las emisiones.
        p La estimación de emisiones es esencial para el desarrollo de políticas ambientales, el control de la contaminación y el cumplimiento de regulaciones, tanto para el sector público como el privado. Permite tomar decisiones informadas y aplicar medidas efectivas para reducir la contaminación atmosférica y proteger la salud pública.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img26.jpg', alt='')        
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyderEjemplo: [
      {
        titulo: 'Selección de sitios de muestreo',
        texto:
          'Identificar ubicaciones estratégicas que representen diversas fuentes de contaminación o áreas de interés. Estos sitios deben ser representativos y proporcionar información útil sobre la calidad del aire.',
        imagen: require('@/assets/curso/temas/tema2/img3.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Elección de los contaminantes a monitorear',
        texto:
          'Determinar qué sustancias o contaminantes se van a analizar. Esto puede variar según los objetivos del monitoreo y las regulaciones ambientales vigentes.',
        imagen: require('@/assets/curso/temas/tema2/img4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Instalación de equipos de muestreo',
        texto:
          'Colocar equipos específicos, como muestreadores de aire, colectores de partículas, o dispositivos para capturar gases y compuestos químicos, en los sitios de muestreo seleccionados.',
        imagen: require('@/assets/curso/temas/tema2/img5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Período de muestreo',
        texto:
          'Establecer el tiempo durante el cual se recolectarán las muestras. Esto puede ser continuo o en intervalos específicos, según los objetivos del monitoreo.',
        imagen: require('@/assets/curso/temas/tema2/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Recolección de muestras',
        texto:
          'Los equipos de muestreo recopilan las muestras de aire, capturando las partículas o sustancias de interés en el ambiente.',
        imagen: require('@/assets/curso/temas/tema2/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Transporte de muestras al laboratorio',
        texto:
          'Las muestras se llevan al laboratorio, donde se analizan utilizando técnicas específicas para determinar la concentración de los contaminantes.',
        imagen: require('@/assets/curso/temas/tema2/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Análisis de resultados',
        texto:
          'Una vez que se completan los análisis en el laboratorio, se generan informes que indican los niveles de contaminantes encontrados en cada ubicación de muestreo.',
        imagen: require('@/assets/curso/temas/tema2/img9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Interpretación y toma de decisiones',
        texto:
          'Los resultados del monitoreo manual se utilizan para evaluar el cumplimiento de los estándares de calidad del aire, identificar fuentes de contaminación, y tomar decisiones relacionadas con la gestión y el control de la contaminación atmosférica.',
        imagen: require('@/assets/curso/temas/tema2/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El mantenimiento y calibración de equipos',
        texto:
          'Son prácticas fundamentales en el monitoreo de la calidad del aire. El mantenimiento preventivo incluye la limpieza, verificación y ajuste de equipos de monitoreo, garantizando su funcionamiento óptimo. La calibración implica comparar las mediciones del equipo con estándares conocidos y ajustarlos según sea necesario para mantener la precisión. La documentación detallada y el cumplimiento normativo son esenciales, ya que estas actividades son requerimientos legales en muchas jurisdicciones y son cruciales para garantizar la precisión de los datos de calidad del aire, protegiendo así la salud pública y el medio ambiente.',
        imagen: require('@/assets/curso/temas/tema2/img11.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
