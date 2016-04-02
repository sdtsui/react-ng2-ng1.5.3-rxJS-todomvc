(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);


    console.log("rx:", Rx);
  });
})(window.app || (window.app = {}));