<template>
  <div class="container">
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de Barra Tipo Columna</p>
    <column-chart :data="chartData" :stacked="true"></column-chart>
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de Barra Tipo Fila</p>
    <bar-chart :data="dataChart" :colors="['#229954']"></bar-chart>
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
