module.exports = function (window, document) {
  var navigator = window.navigator;
    console.log(navigator);
    //[...insert main Leaflet code...]
  return window.L.noConflict();
};