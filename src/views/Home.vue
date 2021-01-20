<template>
  <div class="text-center">
    <div class="mt-12 mb-12">
    <p class="display-3 font-weight-bold">Tipos de Gráficos</p>
    <p class="display-1 font-weight-regular">PARA USAR CON VUE</p>
    </div>
    <v-row class="d-flex align-center">
      <v-col>
    <v-btn
      class="ma-2" :loading="loading" :disabled="loading" color="info" @click="loader = 'loading'" to="/chartline">
    Grafico de Linea
      <template v-slot:loader>
        <span class="custom-loader"><v-icon light>mdi-cached</v-icon></span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2" :loading="loading1" :disabled="loading1" color="success" @click="loader = 'loading1'" to="/chartcircle">
    Grafico Circular
      <template v-slot:loader>
        <span class="custom-loader"><v-icon light>mdi-cached</v-icon></span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2" :loading="loading2" :disabled="loading2" color="warning" @click="loader = 'loading2'" to="/chartcolumn">
    Grafico de Barras
      <template v-slot:loader>
        <span class="custom-loader"><v-icon light>mdi-cached</v-icon></span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2" :loading="loading3" :disabled="loading3" color="info" @click="loader = 'loading3'" to="/chartgoogle">
    Graficos de Google
      <template v-slot:loader>
        <span class="custom-loader"><v-icon light>mdi-cached</v-icon></span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2" :loading="loading4" :disabled="loading4" color="info" @click="loader = 'loading4'">
    Grafico de Linea
      <template v-slot:loader>
        <span class="custom-loader"><v-icon light>mdi-cached</v-icon></span>
      </template>
    </v-btn>
    </v-col>
    </v-row>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  data () {
      return {
        loader: null,
        loading: false,
        loading1: false,
        loading2: false,
        loading3: false,
        loading4: false,

      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 2000)
        this.loader = null
      },
    },
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>