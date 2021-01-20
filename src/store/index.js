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
            '2017-05-18': 1,
        },
        dataDay: { // se puede conectar tipo objeto
            'Lunes': 9,
            'Martes': 5,
            'Miercoles': 14,
            'Jueves': 3,
            'Viernes': 7,
            'Sabado': 11,
            'Domingo': 1,
        },
        dataCountry: [
            ['United States', 44],
            ['Germany', 23],
            ['Brazil', 22],
            ['Chile', 44],
            ['Italy', 23],
            ['Noruega', 22],
        ]

    },
    mutations: {},
    actions: {},
    modules: {}
})