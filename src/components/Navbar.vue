<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/logo.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <router-link to="home">
        <b-navbar-item> Home </b-navbar-item>
      </router-link>
      <router-link to="buy"
        ><b-navbar-item> Buy Boadgame </b-navbar-item>
      </router-link>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-warning" href="/cart"> Cart </a>
          <a class="button is-primary" href="/Sign up">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/Log in"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    click() {
      console.log("Pass", this.show);
      if (this.show === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
<style>
</style>