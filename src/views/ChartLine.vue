<template>
  <div class="container">
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea</p>
    <line-chart :data="chartData"></line-chart>
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea</p>
    <line-chart :data="dataChart" :colors="['#b00', '#666']"></line-chart>
    <div class="d-flex">
    <v-btn color="error" class="ma-2 white--text" to="/">
      Volver
      <v-icon right dark>mdi-keyboard-return</v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['chartData', 'dataChart'])
  }
  
}
</script>
