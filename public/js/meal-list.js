angular.module('meal-list', [])


.controller('listController', ['$scope', '$http', function($scope, $http) {
    $scope.meals;
    $scope.distances;

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
      meals = res.data.results;
      console.log(meals);
      for (var i = 0; i< meals.length; i++) {
          if (meals[i].location != null) {
            meals[i].dis = distance(meals[i].location.latitude, meals[i].location.longitude, $scope.location.lat, $scope.location.lng);
          }
      };
      $scope.meals = meals;
      console.log(res);
    }, function(){

    });

}])

function distance(lat1,lon1,lat2,lon2) {
 var R = 6371; // km (change this constant to get miles)
 var dLat = (lat2-lat1) * Math.PI / 180;
 var dLon = (lon2-lon1) * Math.PI / 180;
 var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;
 return Math.round(d*10)/10;
 
}

