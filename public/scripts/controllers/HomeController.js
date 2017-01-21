angular.module('myApp').controller('HomeController', ['$scope', '$http', '$window', function($scope, $http, $window) {
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
        var searchToSend = {
            food_type: $scope.searchedFood.toLowerCase()
        }; //end searchToSend
        console.log('searchToSend:', searchToSend);

        $http.post('/search', searchToSend)
            .then(function(response) {
                console.log('search returning', response.data[0].safeToEat);
                $scope.foods = response.data;
                if(response.data[0].safeToEat === false){
                  alert(response.data[0].food_type + ' ' + 'may be harmful to your dog');
                }
            }).catch(function(response) {
                console.log(response);
            }); //end http.post
    }; //end scope.search

    $scope.likeFood = function(index) {
        console.log('like button clicked', $scope.foods[index], sessionStorage.getItem('username'));
        $http({
            method: 'PUT',
            url: '/userInfo',
            data: {
                food_info: $scope.foods[index],
                username: sessionStorage.getItem('username')
            } //end http.put
        }).then(function successCallback(response) {
            //  $window.location.href = '#!/profile';
        }, function errorCallback(error) {
            console.log('error', error);
            // $window.location.href = '#!/register';
        }); //end post call
    };

    $scope.dislikeFood = function(index) {
        console.log('dislike button clicked', $scope.foods[index], sessionStorage.getItem('username'));
        $http({
            method: 'PUT',
            url: '/dislike',
            data: {
                food_info: $scope.foods[index],
                username: sessionStorage.getItem('username')
            } // end http.put
        }).then(function successCallback(response) {
            //  $window.location.href = '#!/profile';
        }, function errorCallback(error) {
            console.log('error', error);
            // $window.location.href = '#!/register';
        }); //end post call
    }; //end $scope.dislikeFood

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
