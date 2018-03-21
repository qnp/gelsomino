<template>
  <div id="app">
    <div class="navbar-header navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#">Le Bonneteau</span>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link :to="'/'">1 — Explications</router-link></li>
            <li><router-link :to="'/my-bonneteau'">2 — Mon Bonneteau</router-link></li>
          </ul>
        </div>
      </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  body {
    padding-top: 50px;
  }
  .starter-template {
    padding: 40px 15px;
  }
</style>
