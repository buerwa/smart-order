import Vue from 'vue';
import SvgIcon from 'vue-svgicon';

// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon);

// 自动导入所有svg
const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);