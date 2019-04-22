import Vue from 'vue';
import loadingTemplate from './loading.vue';

/* loadingComponent */
const loadingComponent = {
  /**
   * @param {import('vue').VueConstructor } Vue 
   */
  install: function(Vue) {
    Vue.component('loading', loadingTemplate);
  }
}

/* loadingConstructor */
const LoadingConstructor = Vue.extend(loadingTemplate);

/**
 * 
 * @param {{message:string,type:string,mask:boolean,fullScreen: boolean,horizontalCenter: boolean,verticalCenter: boolean,top:  number|string,bottom:  number|string,left: number|string,right: number|string}} options 
 */
function Loading(options) {
  var _loading = new LoadingConstructor({
    propsData: options
  });
  _loading.$mount();
  document.body.appendChild(_loading.$el)
  return _loading;
}

export default loadingComponent;

export {
  Loading
}