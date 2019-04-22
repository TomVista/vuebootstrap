<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue';

import {Loading} from './loading';
Vue.prototype.$loading = Loading;

  export default {
    name: 'App',
    methods: {},
    mounted() {
      this.$loading({message:'请稍后...',type:'danger',mask:true,fullScreen:true,top:'30px'});
    }
  };
</script>