<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Refrigerantes y aceites
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En sistemas de refrigeración, tanto los refrigerantes como los aceites desempeñan un papel fundamental para lograr un rendimiento eficiente y mantener el equipo funcionando correctamente. Los refrigerantes son sustancias esenciales para la transferencia de calor y el enfriamiento del sistema, mientras que los aceites lubricantes garantizan el funcionamiento suave y la protección contra el desgaste. La elección adecuada de refrigerantes y aceites es esencial para mantener la eficiencia y la durabilidad del sistema de refrigeración. A continuación, se resumen los puntos clave de cada uno de ellos:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span  #[i Características de los refrigerantes]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='En la figura 3 se muestran las características de los refrigerantes.')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema3/img1_1.svg', alt='En la figura 3 se muestran las características de los refrigerantes.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Un refrigerante ideal en un sistema de refrigeración debe tener propiedades físicas y térmicas que permitan la máxima capacidad de refrigeración con la menor demanda de energía. Esto significa que debe ser eficiente en la transferencia de calor, absorbiendo calor en el evaporador y liberándolo en el condensador de manera eficiente. También es importante que la temperatura de descarga del compresor se mantenga lo más baja posible, ya que temperaturas excesivamente altas pueden dañar el compresor y reducir su vida útil.
        p La elección del refrigerante adecuado es crucial para lograr un rendimiento óptimo y minimizar el consumo de energía en los sistemas de refrigeración. Por lo tanto, los ingenieros y diseñadores de sistemas de refrigeración deben considerar cuidadosamente las propiedades del refrigerante y su compatibilidad con los componentes del sistema para lograr un funcionamiento eficiente y duradero. Además, teniendo en cuenta las preocupaciones ambientales, es importante utilizar refrigerantes que no dañen la capa de ozono y no contribuyan al calentamiento global.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span  #[i Características de los aceites lubricantes]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='En la figura 4 se muestran las características de los aceites lubricantes.')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema3/img2_1.svg', alt='En la figura 4 se muestran las características de los aceites lubricantes.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los aceites lubricantes pueden ser de origen mineral (derivados del petróleo) o de origen sintético (elaborados mediante reacciones químicas). Su elección depende de las necesidades específicas del sistema de refrigeración y las condiciones operativas.
        p En resumen, tanto los refrigerantes como los aceites lubricantes son componentes críticos en sistemas de refrigeración. La selección adecuada de estos materiales es fundamental para garantizar un rendimiento eficiente y la durabilidad del equipo, al tiempo que se minimizan los impactos ambientales negativos, como la degradación de la capa de ozono.
          
</template>

<script>
export default {
  name: 'Tema3',
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
