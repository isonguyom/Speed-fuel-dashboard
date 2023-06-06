<template>
  <div>
    <div class="graph-header">
      <div class="graph-des">
        <b>Speed Loss</b>
        <span>y=0.0652x - 0.0916</span>
        <span>R2=0.0578</span>
      </div>
      <div>
        <select name="graphType" id="graphType">
          <option value="drafts" selected>Drafts</option>
        </select>
      </div>

    </div>
    <svg id="myChart2"></svg>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  data() {
    return {};
  },
  mounted() {
    // Set Dimensions
const xSize = 800; 
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Create Random Points
const numPoints = 50;
const data = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

// Append SVG Object to the Page
const svg = d3.select("#myChart2")
  .append("svg")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const x = d3.scaleLinear()
  .domain([0, 24])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

// Y Axis
const y = d3.scaleLinear()
  .domain([-6, 12])
  .range([ yMax, 0]);

svg.append("g")
  .call(d3.axisLeft(y));

// Dots
svg.append('g')
  .selectAll("dot")
  .data(data).enter()
  .append("circle")
  .attr("cx", function (d) { return d[0] } )
  .attr("cy", function (d) { return d[1] } )
  .attr("r", 2.5)
  .style("fill", "#587AFF");
  },
};
</script>

<style scoped>
#myChart2 {
  width: 800px;
  height: 500px;
}

.graph-header {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}

.graph-des b {
color: var(--header-color);
}

.graph-des span {
  margin-left: 2em;
}

select {
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  padding: 5px 10px;
  border-radius: 2px;
  width: 150px;
}
</style>