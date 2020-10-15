<template>
  <section>
    <Navbar class="navbar" /><!--เรียกใช้งานNavbar-->
    <div class="columns">
      <div class="sidebar">
        <Sidebar /> <!--เรียกใช้งานsidebar-->
      </div>
      <div class="column is-10">
        <router-view></router-view> <!--เป็นการrouteไปตามpathต่างๆที่เราได้กำหนดไว้ในไฟร์ที่ชื่อrouter.vue-->
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {//เป็นการเก็บcomponetที่เอาไว้เรียกใช้ตามภาพด้านบน
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
