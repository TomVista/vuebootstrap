<template>
  <topCover v-if='visible' class='d-flex justify-content-center align-items-center' :mask='mask' :fullScreen='fullScreen' :horizontalCenter='horizontalCenter' :verticalCenter='verticalCenter' :top='top' :bottom='bottom' :left='left' :right='right'>
    <div class='d-flex flex-column justify-content-center'>
      <div class='m-auto spinner-border' :class='"text-"+type' role='status'>
        <span class="sr-only">Loading...</span>
      </div>
      <div class='text-center text-white'>{{message}}</div>
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
      type: {
        type: String,
        default: "primary"
      },
      mask: {
        type: Boolean,
        default: true
      },
      fullScreen: {
        type: Boolean,
        default: true
      },
      horizontalCenter: {
        type: Boolean,
        default: false
      },
      verticalCenter: {
        type: Boolean,
        default: false
      },
      top: {
        type: [Number, String],
        default: 'default'
      },
      bottom: {
        type: [Number, String],
        default: 'default'
      },
      left: {
        type: [Number, String],
        default: 'default'
      },
      right: {
        type: [Number, String],
        default: 'default'
      }
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {
      hidden() {
        this.visible = false;
      },
      show() {
        this.visible = true;
      }
    },
    mounted() {
      setTimeout(this.hidden, 2000);
    }
  };
</script>