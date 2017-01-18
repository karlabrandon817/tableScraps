angular.module('myApp').controller('LoginController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside login controller');

  $scope.login = function(){
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
      // console.log(response);
     $window.location.href = '#!/home';
    }, function errorCallback(error) {
      console.log('error', error);
      $window.location.href = '#!/register';
    });
  };
}]);//end LoginController
