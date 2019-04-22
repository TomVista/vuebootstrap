import Vue from 'vue';
import topCoverTemplate from './topCover.vue';

/* topCoverComponent */
const topCoverComponent = {
  /**
   * @param {import('vue').VueConstructor } Vue 
   */
  install: function(Vue) {
    Vue.component('topCover', topCoverTemplate);
  }
}

/* topCoverConstructor */
var _topCoverConstructor = Vue.extend(topCoverTemplate);

/**
 * 
 * @param {{mask:Boolean,fullScreen: Boolean,horizontalCenter: Boolean,verticalCenter: Boolean,top:  Number|String,bottom:  Number|String,left: Number|String,right: Number|String}} options 
 */
function topCover(options) {
  var _topCover = new _topCoverConstructor({
    propsData: options
  });
  _topCover.$mount();
  document.body.appendChild(_topCover.$el);
  return _topCover;
}

export default topCoverComponent;

export {
  topCover
};