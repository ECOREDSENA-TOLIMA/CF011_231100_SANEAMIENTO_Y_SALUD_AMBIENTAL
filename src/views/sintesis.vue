<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo Contaminantes atmosféricos y monitoreo de la calidad del aire, se centra en el estudio de sustancias perjudiciales liberadas en la atmósfera debido a actividades humanas y procesos naturales. Estos contaminantes incluyen partículas en suspensión, óxidos de nitrógeno, dióxido de azufre, compuestos orgánicos volátiles y otros. El monitoreo de la calidad del aire desempeña un papel fundamental en la evaluación y control de estos niveles de contaminación. Para llevarlo a cabo, se utilizan redes de sensores y estaciones de monitoreo que proporcionan mediciones en tiempo real de la concentración de contaminantes. Este proceso es crucial para tomar medidas preventivas, establecer políticas de mitigación y promover la salud pública al reducir la exposición a estas sustancias nocivas y mejorar la calidad del aire que respiramos.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestran los temas principales del componente formativo entre los cuales están: fuentes de contaminación, monitoreo de la calidad, refrigerantes y aceites, meteorología, química de combustión y los resultados.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
