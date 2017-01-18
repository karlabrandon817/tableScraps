angular.module('myApp').controller('LogoutController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside login controller');

  $scope.logout = function(){
console.log('logout button clicked');
    $http({
      method: 'GET',
      url: '/logout',
    }).then(function successCallback(response) {
      // console.log(response);
     $window.location.href = '#!/home';
    }, function errorCallback(error) {
      console.log('error', error);
    //  $window.location.href = '#!/register';
    });
  };
}]);//end LoginController
