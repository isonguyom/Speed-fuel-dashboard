<template>
  <main class="Hull">
    <ul class="details-nav">
      <li><a href="">CII Performance</a></li>
      <li><a class="active" href="">Speed & Fuel</a></li>
      <li><a href="">Fuel consumption</a></li>
      <li><a href="">Master data</a></li>
    </ul>
    <div class="stats-wrapper">
      <div class="stats">
        <p class="top-text">Last hull cleaning date: <span>30days</span></p>
        <div class="stats-inner">
          <h3>Total Fuel consumption data</h3>
          <p>Service speed <span>12 kn</span></p>
          <p>Fuel consumption reported <span>21.5 MT/d</span></p>
          <p>Fuel consumption theoritical <span>14.77 MT/d</span></p>
          <p>Fuel consumption trend <span class="low-percent">6%</span></p>

          <button class="check-btn">
            <span class="material-symbols-outlined"> warning </span>Propeller
            check recommended
          </button>
        </div>
        <div class="stats-inner">
          <h3>Hull fouling conditions: days spent</h3>
          <p>Polar waters, &lt;10°C <span>20 days</span></p>
          <p>
            Temperature waters, 10-20°C
            <span>172 days</span>
          </p>
          <p>
            Tropical waters, >20°C
            <span>16 days</span>
          </p>
        </div>
        <div class="stats-inner">
          <h3>Data Quality Statistics</h3>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <Doughnut />
            </div>
            <div>
              <h5>Fuel Data Number</h5>
              <p>
                Speed
                <span>24</span>
              </p>
              <p>
                Power
                <span>34</span>
              </p>
              <p>
                RPM
                <span>20</span>
              </p>
              <p>
                ME fuel consumption
                <span>5</span>
              </p>
              <p>
                AE fuel consumption
                <span>7</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="graph">
        <Graph />
      </div>
    </div>
  </main>
</template>
<script>
import Graph from "../components/Graph.vue";
import Doughnut from "../components/Doughnut.vue";

export default {
  name: "Hull",
  components: { Graph, Doughnut },
};
</script>

<style scoped>
.Hull {
  border-radius: 5px;
  background-color: var(--dark-bg);
}

.details-nav {
  list-style: none;
  padding: 0 2%;
  font-size: 14px;
  border-bottom: 1px solid var(--body-bg);
}

.details-nav li {
  display: inline-block;
  margin-right: 22px;
}

.details-nav li a {
  display: block;
  text-decoration: none;
  color: var(--header-color);
  padding: 10px 0;
}
.details-nav li a:hover {
  color: var(--blue);
}

.details-nav li a.active {
  color: var(--blue);
  border-bottom: 1px solid var(--blue);
}

.stats-wrapper {
  display: flex;
}

.top-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stats {
  padding: 20px 2%;
  width: 32%;
}

.stats-inner {
  margin-top: 25px;
}

.stats-inner h3,
h5 {
  margin-bottom: 18px;
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

.stats-inner p {
  display: flex;
  justify-content: space-between;
  margin-left: 1.5em;
  line-height: 25px;
}

.check-btn {
  color: var(--red);
  background-color: transparent;
  border: none;
  border-top: 1px solid var(--red);
  border-bottom: 1px solid var(--red);
  border-radius: 2px;
  padding: 5px 10px;
  width: 100%;
  margin-top: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.check-btn span {
  display: inline-block;
  margin-right: 1.5em;
}

.low-percent {
  color: var(--red);
}

.chart-wrapper {
  display: flex;
  justify-content: space-between;
  margin-left: 1.5em;
}

.chart-wrapper p {
  margin-left: 0;
}

.chart-inner {
  width: 50%;
}



.graph {
  background-color: var(--body-bg);
  width: 68%;
  padding: 10px 2%;
}

@media screen and (max-width: 767px) {
  .stats-wrapper {
    flex-wrap: wrap;
  }
  .stats {
    width: 100%;
  }

  .graph {
    width: 100%;
  }
}
</style>
