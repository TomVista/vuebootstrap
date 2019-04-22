<template>
  <topCover class="d-flex justify-content-center align-items-center" :mask='true' :fullScreen='true'>
    <div class="d-flex flex-column justify-content-center">
      <div class="m-auto spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="text-center" style="color:white">{{message}}</div>
    </div>
  </topCover>
</template>
<script>
  import Vue from 'vue';
  import topCover from '../topCover';
  Vue.use(topCover);
  export default {
    props: {
      message: {
        type: String,
        default: "Loading..."
      },
      istrue: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      Message() {
        return this.message;
      }
    },
    methods: {
      hidden() {
        setTimeout(() => {
          this.visible = false;
          this.$el.parentNode.removeChild(this.$el);
        }, 3000);
      }
    },
    mounted() {}
  };
</script>