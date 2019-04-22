<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue';

import {loading} from './loading';
Vue.prototype.$loading = loading;

  export default {
    name: 'App',
    methods: {},
    mounted() {
      this.$loading();
    }
  };
</script>