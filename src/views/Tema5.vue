<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Química de combustión
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La combustión es una reacción exotérmica que libera calor y, en ocasiones, luz, y puede involucrar materia en distintos estados. Estas reacciones generalmente generan energía térmica y lumínica, produciendo compuestos como dióxido de carbono y vapor de agua. La combustión es un tipo de reacción de óxido-reducción (redox), en la cual un reactivo se oxida, perdiendo electrones, mientras que el otro se reduce, ganando electrones. En esta reacción, el oxígeno, como agente oxidante, adquiere electrones del agente reductor, que es el combustible.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En la vida cotidiana, podemos observar procesos de combustión en diversas situaciones, como:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-right")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img2.svg' alt='AvatarTop')
            h4.text-center Encendido de un fósforo
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img3.svg' alt='AvatarTop')         
            h4.text-center Estufas domésticas de gas
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img4.svg' alt='AvatarTop')         
            h4.text-center Motores de combustión interna
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img5.svg' alt='AvatarTop')        
            h4.text-center Hidróxidos de materia orgánica
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img6.svg' alt='AvatarTop')         
            h4.text-center Disparo de un arma
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/temas/tema5/img7.svg' alt='AvatarTop')         
            h4.text-center Incendios forestales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La combustión es un proceso que implica la reacción exotérmica de combustibles, sustancias que pueden arder y liberar energía en forma de calor. Algunos ejemplos de combustibles comunes incluyen:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-gris")
      .row(titulo="Sólidos")
        .col-md-6.mb-4.mb-md-0
          p Son materiales que se queman en forma de sólidos y su combustión puede producir cenizas como subproducto. Cada uno de estos combustibles sólidos tiene sus propias características de combustión, como la velocidad de propagación y la cantidad de calor liberada. Aquí se presentan algunos ejemplos de combustibles sólidos:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Madera.
            li
              i.lista-ul__vineta
              | Papel.
            li
              i.lista-ul__vineta
              | Plásticos.
            li
              i.lista-ul__vineta
              | Carbón
            li
              i.lista-ul__vineta
              | Leña.
            li
              i.lista-ul__vineta
              | Fibras textiles.

        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/img8.jpg', alt='Imagen decorativa')
      .row(titulo="Líquidos")
        .col-md-6.mb-4.mb-md-0
          p Son sustancias que pueden arder en estado líquido y producen suficiente vapor para mantener la combustión. A continuación, se presentan algunos ejemplos de combustibles líquidos más típicos:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Gasolina.
            li 
              i.lista-ul__vineta
              | Diesel.
            li 
              i.lista-ul__vineta
              | Keroseno.
            li 
              i.lista-ul__vineta
              | Aceite de calefacción.
            li 
              i.lista-ul__vineta
              | Aceites pesados.
            li 
              i.lista-ul__vineta
              | Aceites lubricantes.
            li 
              i.lista-ul__vineta
              | Alcohol etílico.


        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/img9.jpg', alt='Imagen decorativa')
      .row(titulo="Gaseosos")
        .col-md-6.mb-4.mb-md-0
          p Son aquellos que se encuentran en estado gaseoso a temperatura y presión estándar y pueden utilizarse como fuentes de energía cuando se queman. Aquí se presentan algunos ejemplos de combustibles gaseosos:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Gas natural.
            li 
              i.lista-ul__vineta
              | Gas de hulla.
            li 
              i.lista-ul__vineta
              | Gas de alto horno.
            li 
              i.lista-ul__vineta
              | Gas licuado de petróleo.

        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/img10.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La química de la combustión es un área de estudio esencial que tiene un impacto significativo en nuestra vida diaria, en la industria y en la ciencia ambiental, y su comprensión es crucial para abordar los desafíos energéticos y medioambientales actuales y futuros.
</template>

<script>
export default {
  name: 'Tema5',
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
