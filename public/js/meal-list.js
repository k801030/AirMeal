angular.module('meal-list', [])

.controller('listController', ['$scope', '$http', function($scope, $http) {
    $scope.meals;
    var req = {
     method: 'GET',
     url: 'https://api.parse.com/1/classes/Meal',
     headers: {
      'X-Parse-Application-Id' : 'k1W4TulDGOHVrWuOcYPovN10uf206LgJQVnfZNwr',
      'X-Parse-REST-API-Key' : 'ge1dvaOa2gWX4ig60quAC6sZhUaW4TijHCeJAi6q',
       'Content-Type': 'application/json'
     }
    };

    $http(req).then(function(res){
      $scope.meals = res.data.results;
      console.log(res);
    }, function(){

    });

}])