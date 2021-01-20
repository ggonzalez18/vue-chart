<template>
  <div class="container">
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea</p>
    <geo-chart :data="dataCountry"></geo-chart>
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea color rojo</p>
    <timeline :data="[['Washington', '1789-04-29', '1797-03-03'], ['Adams', '1797-03-03', '1801-03-03']]"></timeline>
    <div class="d-flex">
    <v-btn color="error" class="ma-2 white--text" to="/">
      Volver
      <v-icon right dark>mdi-keyboard-return</v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['chartData', 'dataChart', 'dataCountry'])
  }
  
}
</script>
