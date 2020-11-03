import 'core-js/stable' // IE polyfill

require('../src/app.js');

if(module.hot) {
  module.hot.accept(); // This will make current module replaceable
}