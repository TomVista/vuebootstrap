import Vue from 'vue';
import loadingTemplate from './loading.vue';

/* loadingComponent */
const loadingComponent = {
  install: function (Vue) {
    Vue.component('loading', loadingTemplate);
  }
}

/* loadingConstructor */
const _loadingConstructor = Vue.extend(loadingTemplate);

function loading(options) {
  var _loading = new _loadingConstructor({
    propsData: options
  });
  _loading.$mount();
  document.body.appendChild(_loading.$el)
  return _loading;
}

export default loadingComponent;

export {
  loading
}
