import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        chartData: [ //se puede conectar tipo Array
            ['Infantes', 30],
            ['Niños', 15],
            ['Adolecentes', 24],
            ['Jovenes', 20],
            ['Adultos', 55],
            ['Abuelos', 35],
        ],
        dataChart: { // se puede conectar tipo objeto
            '2017-05-13': 2,
            '2017-05-14': 5,
            '2017-05-15': 4,
            '2017-05-16': 3,
            '2017-05-17': 7,
            '2017-05-18': 0,
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})