<template>
  <div class="container">
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea</p>
    <line-chart :data="chartData"></line-chart>
    <p class="display-1 font-weight-regular mt-5 mb-5">Gráfico de línea</p>
    <line-chart :data="chartDataText" :colors="['#b00', '#666']"></line-chart>
    <div class="d-flex">
    <v-btn color="error" class="ma-2 white--text" to="/">
      Volver
      <v-icon right dark>mdi-keyboard-return</v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        '2017-05-13' : 2,
        '2017-05-14' : 5,
        '2017-05-15' : 4,
        '2017-05-16' : 3,
        '2017-05-17' : 7,
        '2017-05-18' : 0,
      },
       chartDataText: {
        'Infante' : 15,
        'Niñez' : 9,
        'Adolecencia' : 7,
        'Adultez' : 10,
        'Vejez' : 6,
      }

    }
  }
}
</script>
