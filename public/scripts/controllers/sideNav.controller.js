app.controller('LeftCtrl', function($mdSidenav) {
  var self = this;
  self.close = function () {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function () {
        console.log('sideNav closed');;
      });

  };
})
