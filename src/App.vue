<template>
  <section>
    <Navbar class="navbar" />
    <div class="columns">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="column is-10">
        <router-view></router-view>
      </div>
    </div>

    
  </section>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>

.navbar {
  padding: 1.25rem 0;
}
.sidebar {
  padding: 20px;
  text-align: center;
}
</style>
