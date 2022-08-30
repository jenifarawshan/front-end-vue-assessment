import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
