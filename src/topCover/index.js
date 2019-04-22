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
var TopCoverConstructor = Vue.extend(topCoverTemplate);

/**
 * 
 * @param {{mask:boolean,fullScreen: boolean,horizontalCenter: boolean,verticalCenter: boolean,top:  number|string,bottom:  number|string,left: number|string,right: number|string}} options 
 */
function topCover(options) {
  var _topCover = new TopCoverConstructor({
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