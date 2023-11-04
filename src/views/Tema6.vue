<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Presentación de resultados e informe
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez realizado el muestreo de la calidad de aire, identificadas las fuentes de emisión de gases y aplicada la metodología específica según dichas fuentes, resulta fundamental la elaboración de un informe de presentación de resultados en cumplimiento con la normativa vigente y en concordancia con los objetivos del monitoreo. A continuación, se detallarán las secciones esenciales que debe contener dicho informe:
     
    LineaTiempoE.color-acento-contenido.mb-5
      .row(titulo="01" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Introducción
          p Esta sección debe proporcionar una visión general del contexto y la importancia del monitoreo de la calidad del aire. Puede incluir una breve descripción de la ubicación, el propósito del monitoreo y la relevancia para la salud pública y el medio ambiente.
      .row(titulo="02" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Objetivos
          p Aquí se detallan los objetivos específicos del monitoreo, es decir, lo que se buscaba lograr con las actividades de monitoreo. Esto puede incluir identificar fuentes de emisiones, evaluar el cumplimiento de normativas o medir el impacto en la salud pública.
      .row(titulo="03" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Normatividad
          p Esta sección debe proporcionar información sobre las regulaciones y estándares aplicables en el área de monitoreo. Esto ayuda a contextualizar los resultados y evaluar el cumplimiento con las leyes ambientales.
      .row(titulo="04" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Metodología
          p Aquí se detalla cómo se realizó el monitoreo, incluyendo la descripción de los equipos utilizados, la ubicación de los puntos de muestreo, la frecuencia de las mediciones y cualquier método específico utilizado para el análisis de muestras.
      .row(titulo="05" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Resultados
          p Esta sección es el núcleo del informe y debe presentar los datos recopilados de manera clara y organizada. Los resultados pueden incluir concentraciones de contaminantes, tendencias a lo largo del tiempo, identificación de fuentes y cualquier otro hallazgo relevante. Los resultados se pueden presentar en tablas, gráficos y, en su caso, mapas.
      .row(titulo="06" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema6/img2.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h3 Conclusiones y recomendaciones
          p Aquí se resumen las conclusiones clave derivadas de los resultados. Se debe evaluar si se cumplieron los objetivos del monitoreo y cómo los datos pueden influir en las decisiones y acciones futuras. Además, se pueden ofrecer recomendaciones para abordar problemas o mejorar la calidad del aire si es necesario.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es importante que el informe sea claro, conciso y esté respaldado por datos sólidos. Además, debe estar redactado de manera que sea accesible para una audiencia no técnica, ya que los informes de calidad de aire a menudo se utilizan para informar al público en general, a las autoridades ambientales y a otros interesados. Otro aspecto a tener en cuenta, es que las regulaciones y pautas específicas pueden variar según la jurisdicción y la naturaleza del monitoreo, por lo que es esencial cumplir con los requisitos normativos locales al elaborar el informe.
</template>

<script>
export default {
  name: 'Tema6',
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
