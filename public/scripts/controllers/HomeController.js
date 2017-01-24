angular.module('myApp').controller('HomeController', ['$scope', 'ngDialog', 'dogFactory', '$http', '$window', function($scope, ngDialog, dogFactory, $http, $window) {
    console.log('in HomeController');

    $scope.checkLogin = function() {
        $http.get('/auth')
            .then(function successCallback(response) {
                console.log('success', response);
                if (response.status === 200) {
                    $scope.loggedIn = true;
                } else {
                    $scope.loggedIn = false;
                }
            }); //end $http.get
    }; //end $scope.checkLogin
    $scope.checkLogin();

    $scope.search = function() {
        console.log('search button clicked');
        var slicedFood = $scope.searchedFood.slice(0, 3);
        var searchToSend = {
            food_type: slicedFood.toLowerCase()
        }; //end searchToSend

        $http.post('/search', searchToSend)
            .then(function(response) {
                console.log('search returning', response);
                dogFactory.foods = response.data;
                $window.location.href = '#!/results';
                if (response.data[0].safeToEat === false) {
                  //  alert(response.data[0].food_type + ' ' + 'may be harmful to your dog');
                  $scope.badFood();
                }
                // if (response.status === 200) {
                //     $scope.result = true;
                // } else {
                //   alert('no food in db');
                //   return;
                // }
                $scope.searchedFood = '';
            }).catch(function(response) {
                console.log('error', response);
                $scope.noFood();
            }); //end http.post
    }; //end scope.search

    $scope.noFood = function () {
        ngDialog.open({ template: 'noFoodId' });
    };//end noFood function

    $scope.badFood = function () {
        ngDialog.open({ template: 'badFoodId' });
    };//end badFood function

    $scope.logout = function() {
        console.log('logout button clicked');
        $http({
            method: 'GET',
            url: '/logout',
        }).then(function successCallback(response) {
            // console.log(response);
            $window.location.href = '/';
        }, function errorCallback(error) {
            console.log('error', error);
            //  $window.location.href = '#!/register';
        }); //end $http.get
    }; //end $scope.logout

  }]); //end HomeController
