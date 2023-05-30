<template>
  <Line :data="data" :options="options" />
  <Graph2 />
</template>

<script>
import Graph2 from './Graph2.vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from '../scripts/graph1'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line, Graph2
  },
  data() {
    return chartConfig
  }
}
</script>
