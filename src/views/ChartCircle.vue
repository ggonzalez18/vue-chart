<template>
  <div class="container">
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico Circular</p>
    <pie-chart :data="chartData"></pie-chart>
      <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico Circular tipo anillo</p>
    <pie-chart :data="chartData" :donut="true"></pie-chart>

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
      ...mapState(['chartData'])
    }
  
}
</script>
