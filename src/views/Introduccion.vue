<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p El crecimiento poblacional y la expansión de industrias y la agricultura han provocado un aumento significativo en las emisiones de gases de efecto invernadero, convirtiendo la contaminación en un problema global. Esto ha desencadenado preocupaciones sobre el cambio climático y sus impactos negativos a nivel mundial. El texto explorará las causas, consecuencias y posibles soluciones para abordar este problema, incluyendo la transición a fuentes de energía más limpias, la gestión sostenible de la tierra y la cooperación internacional.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RR0B2PZRUJg" title="Contaminantes atmosféricos y monitoreo de calidad de aire" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
