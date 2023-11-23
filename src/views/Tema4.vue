<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Meteorología

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La meteorología es una ciencia esencial para comprender y predecir las condiciones atmosféricas a corto plazo. Proporciona información vital para una amplia gama de aplicaciones, desde la toma de decisiones cotidianas, como la elección de la ropa adecuada o la planificación de actividades al aire libre, hasta cuestiones más críticas, como la gestión de desastres naturales y la aviación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p Los meteorólogos utilizan datos sobre la temperatura, la humedad, la presión atmosférica, la velocidad y la dirección del viento, y otros parámetros para analizar y pronosticar el tiempo. Esta información ayuda a prever fenómenos como lluvias, tormentas, nevadas, vientos fuertes y otras condiciones climáticas que pueden afectar a las comunidades y al medio ambiente. Los fenómenos meteorológicos más comunes son:
    .tarjeta.tarjeta--amarilla.p-4.mb-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Lluvias y precipitaciones
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Incluye lluvia, llovizna, nieve, granizo y aguanieve. El estudio de la precipitación es esencial para prever inundaciones, nevadas, o sequías.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img2.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Temperatura
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p El registro de temperaturas máximas y mínimas, así como las variaciones diurnas y estacionales, ayuda a entender los patrones climáticos y a prever olas de calor o frío.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Viento
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Se mide la velocidad y dirección del viento. Los vientos fuertes pueden causar tormentas y huracanes, mientras que los vientos más ligeros pueden influir en la temperatura y la circulación atmosférica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Presión atmosférica
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Cambios en la presión atmosférica pueden indicar la llegada de sistemas meteorológicos, como frentes fríos o cálidos, que afectan el clima local.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img5.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Humedad
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p La cantidad de vapor de agua en el aire afecta la formación de nubes, la probabilidad de precipitación y la sensación térmica. La humedad también es importante para pronosticar tormentas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img6.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Nubes
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p La observación y clasificación de nubes es fundamental para prever el tiempo. Diferentes tipos de nubes pueden indicar la proximidad de un frente o la llegada de una tormenta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Rayos y truenos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Las tormentas eléctricas son fenómenos atmosféricos que involucran rayos, truenos y precipitación intensa. Su estudio es importante para advertir sobre tormentas severas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img8.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Neblina y niebla
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p La visibilidad reducida debido a la neblina y la niebla puede ser peligrosa para la navegación y el tráfico terrestre.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img9.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Heladas y escarchas
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Las temperaturas frías pueden causar la formación de hielo en superficies, lo que afecta la agricultura y el transporte.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img10.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Huracanes y ciclones
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Los huracanes, tifones y ciclones son grandes tormentas tropicales con vientos fuertes y lluvias torrenciales. Prever su formación y trayectoria es esencial para la seguridad pública.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img11.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p La meteorología desempeña un papel crucial en una variedad de campos y es fundamental para la toma de decisiones en muchas áreas de la sociedad. Los equipos y dispositivos utilizados en las estaciones meteorológicas permiten medir y registrar una serie de parámetros ambientales, lo que proporciona datos esenciales para la comprensión y predicción del tiempo y del clima. Los equipos utilizados para evaluar parámetros ambientales en las estaciones meteorológicas son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-left") 
        .cajon.color-secundario.p-4.mb-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Termómetro:] mide temperatura ambiente.
            li 
              i.lista-ul__vineta
              | #[b Anemómetro:] mide la velocidad del viento.
            li 
              i.lista-ul__vineta
              | #[b Pluviómetro:] mide la cantidad de lluvia caída.
            li 
              i.lista-ul__vineta
              | #[b Barómetro:] mide la presión atmosférica.
            li 
              i.lista-ul__vineta
              | #[b Veleta:] indica la dirección del viento teniendo en cuenta los puntos cardinales.
            li 
              i.lista-ul__vineta
              | #[b Higrómetro:] mide la humedad ambiental.
            li 
              i.lista-ul__vineta
              | #[b Heliógrafo:] registra la cantidad de energía solar que impacta la superficie de la tierra.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p El estudio de la meteorología es importante porque permite generar alertas tempranas y pronósticos climáticos que permiten la preparación y protección ante condiciones climáticas extremas. Además, influye en sectores clave como la agricultura, la aviación, la planificación urbana, la gestión de la energía y la investigación del cambio climático. Su capacidad para brindar información precisa y oportuna es esencial en la toma de decisiones cotidianas y la adaptación a un mundo en constante cambio debido al impacto del cambio climático.
</template>

<script>
export default {
  name: 'Tema4',
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
