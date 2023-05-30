<template>
  <nav class="Topbar">
    <a href="" class="brand-name"></a>
    <ul class="nav-menu">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'fleet-performance' }"
          >Fleet Performance KPIS</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'hull' }">Hull</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'main-engine' }"
          >Main Engine</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'auxillaries' }"
          >Auxillaries</router-link
        >
      </li>
    </ul>
    <ul class="nav-menu menu2">
      <li class="nav-item"><button class="nav-btn">Adiministration</button></li>
      <li class="nav-item">
        <button class="nav-btn notification-btn">
          <span class="material-symbols-outlined">Notifications</span
          ><span class="notification-count">1</span>
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-btn potrait-btn">
          <img src="" alt="" /><span class="material-symbols-outlined">
            expand_more
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.Topbar {
  background-color: var(--dark-bg);
  padding: 0 2%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-menu .nav-item {
  display: inline-block;
  margin-right: 2em;
  width: fit-content;
}

.nav-menu .nav-item:last-child {
  margin-right: 0;
}

.nav-link,
.nav-btn {
  text-transform: uppercase;
  color: var(--header-color);
  font-size: 14px;
  padding: 12px 0;
}

.nav-link {
  text-decoration: none;
  display: block;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: var(--blue);
  border-bottom: 1px solid var(--blue);
}

.nav-link:hover,
.nav-btn:hover {
  color: var(--blue);
}

.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btn.notification-btn {
  color: var(--red);
}

.notification-count {
  width: 18px;
  height: 18px;
  padding: 2px;
  border-radius: 50%;
  background-color: var(--red);
  color: var(--body-bg);
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn.nav-btn.potrait-btn {
  color: var(--header-color);
}

.nav-btn.potrait-btn img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--header-color);
}

@media screen and (max-width: 767px) {
  .Topbar {
    align-items: start;
    flex-wrap: wrap;
  }

  .brand-name {
    width: 100%;
  }

  .nav-menu {
    flex-flow: column;
    align-items: start;
  }

  .menu2 {
    text-align: right;
  }

  .nav-menu .nav-item {
    display: block;
    padding: 5px 0;
    margin-right: 0;
  }

  .nav-link,
  .nav-btn {
    font-size: 0.7rem;
    text-align: left;
  }
}
</style>
