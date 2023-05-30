<template>
  <main class="Sidebar">
    <div class="sidebar-header">
      <h1 class="sidebar-title">Fleet</h1>
    </div>

    <div class="search-wrapper">
      <input
        type="search"
        name="sideSearch"
        id="sidebarSearch"
        placeholder="Search"
      />
      <span id="searchIcon" class="material-symbols-outlined">search</span>
    </div>
    <!-- Ships -->
    <ul class="sidebar-nav">
      <li><a href="">Belen</a></li>
      <li><a href="">Clara</a></li>
      <li><a href="">Celena</a></li>
      <li class="active"><a href="">Norman</a></li>
      <li><a href="">Manisa Belen</a></li>
    </ul>
    <div class="sidebar-items">
      <div class="sidebar-item-wrapper">
        <label class="input-label" for="analyzedPeriod">Analyzed Period</label>
        <select name="analyzedPeriod" id="analyzedPeriod">
          <option value="12 months" selected>12 months</option>
        </select>
      </div>
      <div class="sidebar-item-wrapper">
        <label class="input-label" for="analysisData">Analysis Data</label>
        <select name="analysisData" id="analysisData">
          <option value="All data" selected>All Data</option>
        </select>
      </div>
      <div class="sidebar-item-wrapper">
        <label class="input-label" for="trendFrequency"
          >Analysis Trend Frequency</label
        >
        <select name="trendFrequency" id="trendFrequency">
          <option value="daily" selected>Daily</option>
        </select>
      </div>
      <div class="sidebar-item-wrapper">
        <p class="tab-caption">Loading Condition</p>
        <ul class="tab-group tabs-3">
          <li><button>Ballast</button></li>
          <li><button>Laden</button></li>
          <li class="active"><button>All</button></li>
        </ul>
      </div>
      <div class="sidebar-item-wrapper">
        <label class="input-label" for="trimCondition">Trim Condition</label>
        <select name="trimCondition" id="trimCondition">
          <option value="all" selected>All</option>
        </select>
      </div>
      <div class="sidebar-item-wrapper">
        <p class="tab-caption">Loading Condition</p>
        <ul class="tab-group tabs-2">
          <li><button>Faulty</button></li>
          <li class="active"><button>Good</button></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.Sidebar {
  width: 20%;
}
.sidebar-header {
  padding: 20px 7%;
}

.sidebar-title {
  text-transform: uppercase;
}

input,
select,
button {
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  padding: 5px 10px;
  width: 100%;
  border-radius: 2px;
}

.search-wrapper {
  position: relative;
  padding: 0 7%;
}

#sidebarSearch {
  border-radius: 15px;
}

#searchIcon {
  position: absolute;
  right: 9%;
  top: 2px;
  cursor: pointer;
}

ul {
  list-style: none;
}

.input-label,
.tab-caption {
  display: block;
  margin-bottom: 2px;
}

.sidebar-nav {
  border-bottom: 1px solid var(--text-color);
  padding: 15px 0;
  max-height: 200px;
  overflow-y: auto;
}

.sidebar-nav::-webkit-scrollbar {
  width: 10px;
  padding-right: 5px;
}
/* width */
.sidebar-nav::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.sidebar-nav::-webkit-scrollbar-thumb {
  background: var(--dark-bg);
  border-radius: 10px;
}

.sidebar-nav li {
  padding: 10px 7%;
}

.sidebar-nav li.active {
  background-color: #5879ff42;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: var(--blue);
}

.sidebar-items {
  padding: 15px 7%;
}

.sidebar-item-wrapper {
  margin-bottom: 15px;
}

.tab-group {
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
}

.tabs-2 {
  grid-template-columns: auto auto;
}

.tab-group li button {
  cursor: pointer;
}

.tab-group li.active button {
  background-color: #315AFF;
  color: var(--header-color);
}

@media screen and (max-width: 767px) {
  .Sidebar {
    width: 100%;
  }
}
</style>
