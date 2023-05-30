<template>
    <Doughnut :data="data" :options="options" width="80px"/>
  </template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  import * as chartConfig from '../scripts/doughnut'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Doughnut
    },
    data() {
      return chartConfig
    }
  }
  </script>
  