<template>
  <Scatter :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "vue-chartjs";
import * as scatterChart from "../scripts/gragh2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Scatter,
  },
  data() {
    return scatterChart;
  },
};
</script>
