import Vue from 'vue'
// import App from './App.vue'
import test from '../test/test.vue'
import element from 'element-ui'

Vue.config.productionTip = false

Vue.use(element)
new Vue({
  render: h => h(test),
}).$mount('#app')
// import * as monaco from 'monaco-editor';

// monaco.editor.create(document.getElementById('root'), {
//   value: [
//     'function x() {',
//     '\tconsole.log("Hello world!");',
//     '}'
//   ].join('\n'),
//   language: 'javascript'
// });
