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
      <b-navbar-item tag="router-link" :to="{ path: '/home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/buy' }">
        Buy Boadgame
      </b-navbar-item>
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
};
</script>
<style>
</style>