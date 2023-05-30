<template>
  <main class="container">
    <Header />
    <section class="dashboard">
      <Sidebar />
      <div class="dashboard-body">
        <div class="dashboard-header">
          <h1 class="dashboard-title">Norman</h1>
          <button type="button" class="export-btn">Export Report</button>
        </div>
        <RouterView />
      </div>
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: { Header, Sidebar },
};
</script>

<style scoped>
.container {
  background-color: var(--body-bg);
  min-height: 100vh;
}

.dashboard {
  display: flex;
  display: -webkit-flex;
  padding: 3px 0;
}

.dashboard-body {
  width: 80%;
}
.dashboard-header {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 2%;
}

.dashboard-title {
    text-transform: uppercase;
}

.export-btn {
  background: transparent;
  border: none;
  color: var(--blue);
  cursor: pointer;
  font-size: 14px;
}

@media screen and (max-width: 767px) {
  .dashboard {
    flex-wrap: wrap;
  }

  .dashboard-body {
    width: 100%;
  }
}
</style>
